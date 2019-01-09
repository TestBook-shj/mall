/*
 * @Author: TestBook-shj
 * @Date:   2019-01-04 21:02:58
 * @Last Modified by:   TestBook-shj
 * @Last Modified time: 2019-01-09 22:55:39
 */
'use strict';
var _mm = require('util/mm.js');
var _cities = require('util/cities/index.js');
var _address = require('service/address-service.js');
var templateAddressModal = require('./address-modal.string');

var addressModal = {
  show: function(option) {
    // option绑定
    this.$modalWrap = $('.modal-wrap');
    this.option = option;
    // 渲染页面
    this.loadModal();
    // 绑定事件
    this.bindEvent();
  },
  bindEvent: function(){
    var _this = this;
    // 省份和城市的二级联动
    this.$modalWrap.find('#receiver-province').change(function(){
      var selectedProvince = $(this).val();
      _this.loadCities(selectedProvince);
    });
    // 提交收货地址
    this.$modalWrap.find('.address-btn').click(function(){
      var receiverInfo = _this.getReceiverInfo(),
      isUpdate = _this.option.isUpdate;
      // 使用新地址，且验证通过
      if(!isUpdate && receiverInfo.status){
        _address.save(receiverInfo.data, function(res){
          _mm.successTips('地址添加成功');
          _this.hide();
          type _this.option.onSuccess === 'function' && _this.option.onSuccess(res);
        }, function(errMsg){
          _mm.errorTips(errMsg);
        })
      }
      // 更新收件人， 并且验证通过 
      else if(isUpdate && receiverInfo.status){

      }
      // 验证不通过
      else{
        _mm.errorTips(receiverInfo.errMsg || '好像哪里不对了')
      } 
    });
    // 保证点击modal内容不关闭弹窗
    this.$modalWrap.find('.modal-container').click(function(e){
      e.stopPropagation();
    });
    // 点击叉号或者蒙板区关闭弹窗
    this.$modalWrap.find('.close').click(function(){
      _this.hide();
    });
  },
  loadModal: function() {
    var addressModalHtml = _mm.renderHtml(templateAddressModal, this.option.data);
    this.$modalWrap.html(addressModalHtml);
    // 加载省份
    this.loadProvince();
    // 加载城市
    this.loadCities();
  },
  // 加载省份信息
  loadProvince: function() {
    var provinces = _cities.getProvinces() || [],
      $provinceSelect = this.$modalWrap.find('#receiver-province');
    $provinceSelect.html(this.getSelectOption(provinces));
  },
  // 加载城市信息
  loadCities: function(provinceName) {
    var cities = _cities.getCities(provinceName) || [],
    $citySelect = this.$modalWrap.find('#receiver-city');
    $citySelect.html(this.getSelectOption(cities));
  },
  // 获取表单收件人信息， 并作表单验证
  getReceiverInfo: function(){
    var receiverInfo = {},
    result = {
      status: false
    };
    receiverInfo.receiverName = $.trim(this.$modalWrap.find('#receiver-name').val());
    receiverInfo.receiverProvice = $.trim(this.$modalWrap.find('#receiver-province').val());
    receiverInfo.receiverCity = $.trim(this.$modalWrap.find('#receiver-city').val());
    receiverInfo.receiverAddress = $.trim(this.$modalWrap.find('#receiver-address').val());
    receiverInfo.receiverPhone = $.trim(this.$modalWrap.find('#receiver-phone').val());
    receiverInfo.receiverZip = $.trim(this.$modalWrap.find('#receiver-zip').val());

    if(!receiverInfo.receiverName){
      result.errMsg = '请输入收件人姓名';
    }else if(!receiverInfo.receiverProvice){
      result.errMsg = '请输入收件人所在省份';
    }else if(!receiverInfo.receiverCity){
      result.errMsg = '请输入收件人所在城市';
    }else if(!receiverInfo.receiverAddress){
      result.errMsg = '请输入收件人详细地址';
    }else if(!receiverInfo.receiverProvice){
      result.errMsg = '请输入收件人手机号';
    }
    // 所有验证都通过
    else{
      result.status = true;
      result.data = receiverInfo;
    }
    return result;
  },
  // 获取select框的选项,输入： array, 输出html
  getSelectOption: function(optionArray) {
    var html = '<option value="">请选择</options>';
    for (var i = 0, length = optionArray.length; i < length; i++) {
      html += '<option value="' + optionArray[i] + '">'+ optionArray[i] +'</options>';
    }
    return html;
  },
  // 关闭弹窗
  hide: function() {
    this.$modalWrap.empty();
  }
};

module.exports = addressModal;
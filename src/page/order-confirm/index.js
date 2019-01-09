/*
 * @Author: TestBook-shj
 * @Date:   2019-01-04 21:02:58
 * @Last Modified by:   TestBook-shj
 * @Last Modified time: 2019-01-09 22:02:53
 */
'use strict';
require('./index.css');
require('page/common/header/index.js');
require('page/common/nav/index.js');
var _mm = require('util/mm.js');
var _order = require('service/order-service.js');
var _address = require('service/address-service.js');
var templateProduct = require('./product-list.string');
var templateAddress = require('./address-list.string');
var addressModal = require('./address-modal.js');

var page = {
  data: {
    selectedAddressId: null
  },
  init: function(){
    this.onLoad();
    this.bindEvent();
  },
  onLoad: function(){
    this.loadAddressList();
    this.loadProductList();
  },
  bindEvent: function(){
    var _this = this;
    // 地址选择
    $(document).on('click', '.address-item', function(){
      var $this = $(this);
      $this.addClass('active')
        .siblings('.address-item').removeClass('active');
        _this.data.selectedAddressId = $this.data('id');
    });

    // 订单的提交
    $(document).on('click', '.order-submit', function(){
      var shippingId = _this.data.selectedAddressId;
      if(shippingId){
        _order.createOrder({
          shippingId: shippingId
        }, function(res){
          window.location.href = './payment.html?orderNumber=' + res.orderNo;
        }, function(errMsg){
          _mm.errorTips(errMsg);
        });
      }else{
        _mm.errorTips('请选择地址后再提交');
      }
    });
    // 地址的添加
     $(document).on('click', '.address-add', function(){
      addressModal.show({
        isUpdate: false,
        onsuccess: function(){
          _this.loadAddressList();
        }
      });
    });
  },
  // 加载地址列表
  loadAddressList: function(){
    var _this = this;
    // 获取地址列表
    _address.getAddressList(function(res){
      var addressListHtml = _mm.renderHtml(templateAddress, res);
      $('.address-con').html(addressListHtml);
    }, function(errMsg){
      $('.address-con').html('<p class="err-tip">地址加载失败请稍后重试</p>');
    })
  },
  // 加载商品清单
  loadProductList: function(){
    var _this = this;
    // 获取商品列表
    _order.getProductList(function(res){
      var productListHtml = _mm.renderHtml(templateProduct, res);
      $('.product-con').html(productListHtml);
    }, function(errMsg){
      $('.product-con').html('<p class="err-tip">商品信息加载失败请稍后重试</p>');
    })
  }
};

$(function(){
  page.init();
});
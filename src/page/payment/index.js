/*
 * @Author: TestBook-shj
 * @Date:   2018-12-31 16:35:13
 * @Last Modified by:   TestBook-shj
 * @Last Modified time: 2019-01-20 21:13:52
 */
'use strict'
require('./index.css');
require('page/common/nav/index.js');
require('page/common/header/index.js');
var _mm = require('util/mm.js');
var _payment = require('service/payment-service.js');
var templateIndex = require('./index.string');

var page = {
  data: {
    orderNumber: _mm.gerUrlParam('orderNumber')
  },
  init: function() {
    this.onLoad();
  },
  onLoad: function() {
    // 加载数据
    this.loadPaymentInfo();
  },
  // 加载订单列表
  loadPaymentInfo: function() {
    var _this = this,
      paymentHtml = '',
      $pageWrap = $('.page-wrap');
    $pageWrap.html('<div class="loading"></div>');
    _payment.getPaymentInfo(this.data.orderNumber, function(res) {
      // 渲染html
      paymentHtml = _mm.renderHtml(templateIndex, res);
      $pageWrap.html(paymentHtml);
      _this.listenOrderStatus();
    }, function(errMsg) {
      $pageWrap.html('<p class="err-tip">' + errMsg + '</p>');
    });
  },
  // 监听订单状态
  listenOrderStatus: function(){
    ver _this = this;
    _this.paymentTimer = window.setInterval(function(){
      _payment.getPaymentStatus(_this.data.orderNumber, function(res){
        if(res == true){
          window.location.href = './result.html?type=payment&orderNumber=' + _this.data.orderNumber;
          
        }
      }, function(errMsg){});
    }, 5e3);
  }
};
$(function() {
  page.init();
});
/*
* @Author: TestBook-shj
* @Date:   2019-01-04 21:02:58
* @Last Modified by:   TestBook-shj
* @Last Modified time: 2019-01-04 21:18:53
*/
'use strict';
require('./index.css');
require('page/common/nav/index.js');
require('page/common/header/index.js');
var _mm = require('util/mm.js');
var _product = require('service/product-service.js');
var _cart = require('service/cart-service.js');
var templateIndex = require('./index.string');

var page = {
  data: {
    listParam: {
      productId: _mm.getUrlParam('productId') || ''
    }
  },
  init: function() {
    this.onLoad();
    this.bindEvent();
  },
  onLoad: function() {
    // 如果没有传productId,自动跳回首页
    if(this.data.productId){
      _mm.goHome();
    }
    this.loadDetail();
  },
  bindEvent: function() {
    var _this = this;
  },
  // 加载商品详情的数据
  loadDetail: function() {
    
  }
};

$(function() {
  page.init();
});
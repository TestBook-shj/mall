/*
 * @Author: TestBook-shj
 * @Date:   2019-01-04 21:02:58
 * @Last Modified by:   TestBook-shj
 * @Last Modified time: 2019-01-06 19:17:34
 */
'use strict';
require('./index.css');
require('page/common/nav/index.js');
require('page/common/header/index.js');
var _mm = require('util/mm.js');
var _cart = require('service/cart-service.js');
var templateIndex = require('./index.string');

var page = {
  data: {
    
  },
  init: function() {
    this.onLoad();
    this.bindEvent();
  },
  onLoad: function() {
    // this.loadCart();
  },
  bindEvent: function() {
    
  },
  // 加载购物车信息
  loadCart: function() {
    var _this = this,
      html = '',
      $pageWrap = $('.page-wrap');
    // loading
    $pageWrap.html('<div class="loading"></div>');
    
  },
  // 数据匹配
  filter: function(data){
  }
};

$(function() {
  page.init();
});
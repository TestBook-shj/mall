/*
 * @Author: Administrator
 * @Date:   2018-12-27 17:51:02
 * @Last Modified by:   TestBook-shj
 * @Last Modified time: 2019-01-11 23:02:45
 */
'use strict';
var _mm = require('util/mm.js');

var _order = {
  // 获取商品列表
  getProductList: function(resolve, reject) {
    _mm.request({
      url: _mm.getServerUrl('./order/get_order_cart_product.do'),
      success: resolve,
      error: reject
    });
  },
  // 提交订单
  createOrder: function(orderInfo, resove, reject){
    _mm.request({
      url: _mm.getServerUrl('./order/create.do'),
      data: orderInfo,
      success: resolve,
      error: reject
    });
  },
  // 获取订单列表
  getOrderList: function(listParam, resove, reject){
    _mm.request({
      url: _mm.getServerUrl('./order/list.do'),
      data: listParam,
      success: resolve,
      error: reject
    });
  },
};

module.exports = _order;
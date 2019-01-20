/*
 * @Author: Administrator
 * @Date:   2018-12-27 17:51:02
 * @Last Modified by:   TestBook-shj
 * @Last Modified time: 2019-01-20 21:15:39
 */
'use strict';
var _mm = require('util/mm.js');

var _payment = {
  // 获取支付信息
  getPaymentInfo: function(orderNumber, resolve, reject) {
    _mm.request({
      url: _mm.getServerUrl('./order/pay.do'),
      data: {
        orderNo: orderNumber
      },
      success: resolve,
      error: reject
    });
  },
  // 获取订单状态
  getPaymentStatus: function(orderNumber, resolve, reject) {
    _mm.request({
      url: _mm.getServerUrl('./order/query_order_pay_status.do'),
      data: {
        orderNo: orderNumber
      },
      success: resolve,
      error: reject
    });
  }
};

module.exports = _order;
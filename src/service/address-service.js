/*
 * @Author: Administrator
 * @Date:   2018-12-27 17:51:02
 * @Last Modified by:   TestBook-shj
 * @Last Modified time: 2019-01-10 22:08:46
 */
'use strict';
var _mm = require('util/mm.js');

var _address = {
  // 获取地址列表
  getAddressList: function(resolve, reject) {
    _mm.request({
      url: _mm.getServerUrl('./shipping/list.do'),
      data: {
        pageSize: 50
      },
      success: resolve,
      error: reject
    });
  },
  // 新建地址
  save: function(addressInfo, resolve, reject) {
    _mm.request({
      url: _mm.getServerUrl('./shipping/add.do'),
      data: addressInfo,
      success: resolve,
      error: reject
    });
  },
  // 更新地址
  uodate: function(addressInfo, resolve, reject) {
    _mm.request({
      url: _mm.getServerUrl('./shipping/update.do'),
      data: addressInfo,
      success: resolve,
      error: reject
    });
  },
  // 删除收件人
  deleteAddress: function(shippingId, resolve, reject) {
    _mm.request({
      url: _mm.getServerUrl('./shipping/del.do'),
      data: {
        shippingId: shippingId
      },
      success: resolve,
      error: reject
    });
  },
  // 获取单条地址列表
  getAddress: function(shippingId, resolve, reject) {
    _mm.request({
      url: _mm.getServerUrl('./shipping/select.do'),
      data: {
        shippingId: shippingId
      },
      success: resolve,
      error: reject
    });
  }
};

module.exports = _address;
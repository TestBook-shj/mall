/*
 * @Author: Administrator
 * @Date:   2018-12-27 17:51:02
 * @Last Modified by:   TestBook-shj
 * @Last Modified time: 2019-01-02 22:52:14
 */
'use strict';
var _mm = require('util/mm.js');

var _product = {
  // 用户登陆
  getProductList: function(listParam, resolve, reject) {
    _mm.request({
      url: _mm.getServerUrl('./product/list.do'),
      data: listParam,
      success: resolve,
      error: reject
    });
  }
};

module.exports = _product;
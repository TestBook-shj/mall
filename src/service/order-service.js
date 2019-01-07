/*
 * @Author: Administrator
 * @Date:   2018-12-27 17:51:02
 * @Last Modified by:   TestBook-shj
 * @Last Modified time: 2019-01-07 21:32:26
 */
'use strict';
var _mm = require('util/mm.js');

var _order = {
  // 获取商品列表
  getProductList: function(listParam, resolve, reject) {
    console.log(listParam)
    _mm.request({
      url: _mm.getServerUrl('./product/list.do'),
      data: listParam,
      success: resolve,
      error: reject
    });
  }
};

module.exports = _order;
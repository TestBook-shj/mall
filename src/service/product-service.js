/*
 * @Author: Administrator
 * @Date:   2018-12-27 17:51:02
 * @Last Modified by:   TestBook-shj
 * @Last Modified time: 2019-01-01 22:41:34
 */
'use strict';
var _mm = require('util/mm.js');

var _product = {
  // 用户登陆
  login: function(userInfo, resolve, reject) {
    _mm.request({
      url: _mm.getServerUrl('./user/login.do'),
      data: userInfo,
      menthod: 'POST',
      success: resolve,
      error: reject
    });
  }
};

module.exports = _product;
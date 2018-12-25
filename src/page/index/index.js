/*
 * @Author: TestBook-shj
 * @Date:   2018-12-21 21:36:38
 * @Last Modified by:   TestBook-shj
 * @Last Modified time: 2018-12-25 22:05:51
 */

'use strict'

var _mm = require('util/mm.js');

_mm.request({
  url: '/product/list.do?keyword=1',
  success: function(res) {
    console.log(res)
  },
  error: function(errMsg) {
    console.log(errMsg)
  }
})
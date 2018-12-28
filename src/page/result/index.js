/*
 * @Author: TestBook-shj
 * @Date:   2018-12-28 22:18:25
 * @Last Modified by:   TestBook-shj
 * @Last Modified time: 2018-12-28 23:06:18
 */
'user strict';
require('./index.css');
require('page/common/nav-simple/index.js');
var _mm = require('util/mm.js');

$(function() {
  var type = _mm.getUrlParam('type') || 'default',
    $element = $('.' + type + '-success');
  // 显示对应的提示元素
  $element.show();
})
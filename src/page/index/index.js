/*
 * @Author: TestBook-shj
 * @Date:   2018-12-21 21:36:38
 * @Last Modified by:   Administrator
 * @Last Modified time: 2018-12-26 16:39:48
 */

'use strict'

var _mm = require('util/mm.js');

console.log(_mm.getUrlParam('test'))

var html = '<div>{{data}}</div>';
var data = {
	data: 123
}
console.log(_mm.renderHtml(html, data));

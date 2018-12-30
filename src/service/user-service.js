/*
 * @Author: Administrator
 * @Date:   2018-12-27 17:51:02
 * @Last Modified by:   TestBook-shj
 * @Last Modified time: 2018-12-30 21:09:28
 */
'use strict';
var _mm = require('util/mm.js');

var _user = {
	// 用户登陆
	login: function(userInfo, resolve, reject) {
		_mm.request({
			url: _mm.getServerUrl('./user/login.do'),
			data: userInfo,
			menthod: 'POST',
			success: resolve,
			error: reject
		});
	},
	// 登出
	logout: function(resolve, reject) {
		_mm.request({
			url: _mm.getServerUrl('./user/logout.do'),
			menthod: 'POST',
			success: resolve,
			error: reject
		});
	},
	// 检查登录状态
	checkLogin: function(resolve, reject) {
		_mm.request({
			url: _mm.getServerUrl('./user/get_user_info.do'),
			menthod: 'POST',
			success: resolve,
			error: reject
		});
	}
};

module.exports = _user;
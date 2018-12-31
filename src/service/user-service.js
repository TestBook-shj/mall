/*
 * @Author: Administrator
 * @Date:   2018-12-27 17:51:02
 * @Last Modified by:   TestBook-shj
 * @Last Modified time: 2018-12-31 13:26:09
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
	// 检查用户名
	checkUsername: function(username, resolve, reject) {
		_mm.request({
			url: _mm.getServerUrl('./user/check_valid.do'),
			data: {
				type: 'username',
				str: username
			},
			menthod: 'POST',
			success: resolve,
			error: reject
		});
	},
	// 用户注册
	register: function(userInfo, resolve, reject) {
		_mm.request({
			url: _mm.getServerUrl('./user/register.do'),
			data: {
				type: 'userInfo',
				str: username
			},
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
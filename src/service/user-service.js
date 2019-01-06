/*
 * @Author: Administrator
 * @Date:   2018-12-27 17:51:02
 * @Last Modified by:   TestBook-shj
 * @Last Modified time: 2019-01-06 16:31:47
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
			data: userInfo,
			menthod: 'POST',
			success: resolve,
			error: reject
		});
	},
	// 获取用户密码提示问题
	getQuestion: function(username, resolve, reject) {
		_mm.request({
			url: _mm.getServerUrl('./user/forget_get_question.do'),
			data: {
				username: username
			},
			menthod: 'POST',
			success: resolve,
			error: reject
		});
	},
	// 检查密码提示问题答案
	checkAnswer: function(userInfo, resolve, reject) {
		_mm.request({
			url: _mm.getServerUrl('./user/forget_check_answer.do'),
			data: userInfo,
			menthod: 'POST',
			success: resolve,
			error: reject
		});
	},
	resetPassword: function(userInfo, resolve, reject) {
		_mm.request({
			url: _mm.getServerUrl('./user/forget_reset_password.do'),
			data: userInfo,
			menthod: 'POST',
			success: resolve,
			error: reject
		});
	},
	getUserInfo: function(resolve, reject) {
		_mm.request({
			url: _mm.getServerUrl('./user/get_information.do'),
			menthod: 'POST',
			success: resolve,
			error: reject
		});
	},
	// 更新个人信息
	updateUserInfo: function(userInfo, resolve, reject) {
		_mm.request({
			url: _mm.getServerUrl('./user/update_information.do'),
			data: userInfo,
			menthod: 'POST',
			success: resolve,
			error: reject
		});
	},
	// 登陆状态下更新密码
	updatePassword: function(userInfo, resolve, reject) {
		_mm.request({
			url: _mm.getServerUrl('./user/reset_password.do'),
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
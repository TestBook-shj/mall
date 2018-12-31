/*
* @Author: Administrator
* @Date:   2018-12-27 17:15:13
* @Last Modified by:   TestBook-shj
* @Last Modified time: 2018-12-31 13:37:15
*/
'use strict'
require('./index.css');
var _mm = require('util/mm.js');
var _user = require('service/user-service.js');
var _cart = require('service/cart-service.js');
// 导航
var nav = {
	init: function(){
		this.bindEvent();
		this.loadUserInfo();
		this.loadCartCount();
		return this;
	},
	bindEvent: function(){
		// 登录点击事件
		$('.js-login').click(function(event) {
			_mm.doLogin();
		});
		// 注册点击事件
		$('.js-register').click(function(event) {
			window.location.href = './user-register.html';
		});
		// 退出点击事件
		$('.logout').click(function(event) {
			_user.logout(function(res){
				window.location.reload();
			}, function(errMsg){
				_mm.errorTips(errMsg);
			});
		});
	},
	// 加载用户信息
	loadUserInfo: function(){
		_user.checkLogin(function(res){
			$('.user.not-login')
			.hide()
			.siblings('.user.login')
			.show()
			.find('.username')
			.text(res.username);
		}, function(errMsg){
			// do noting
		});
	},
	// 加载购物车数量
	loadCartCount: function(){
		_cart.getCartCount(function(res){
			$('.nav .cart-cont').text(res || 0);
		}, function(errMsg){
			$('.nav .cart-cont').text(0);
		});
	}
};

module.exports = nav.init();

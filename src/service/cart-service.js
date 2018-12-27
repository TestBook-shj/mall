/*
* @Author: Administrator
* @Date:   2018-12-27 18:09:12
* @Last Modified by:   Administrator
* @Last Modified time: 2018-12-27 18:12:04
*/
'use strict'

var _mm =require('until/mm.js');

var _cart = {
	// 获取购物车数量
	getCartCount: function(resolve, reject){
		_mm.request({
			url: _mm.getServerUrl('/cart/get_cart_product_count.do'),
			success: resolve,
			error: reject
		});
	}
}
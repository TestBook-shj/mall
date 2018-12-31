/*
* @Author: TestBook-shj
* @Date:   2018-12-31 16:35:13
* @Last Modified by:   TestBook-shj
* @Last Modified time: 2018-12-31 21:26:48
*/
'use strict'
require('./index.css');
require('page/common/nav/index.js');
require('page/common/header/index.js');
var navSide = require('page/common/nav-side/index.js');
var _mm = require('util/mm.js');
var _user = require('service/user-service.js');
var templateIndex = require('./index.string');

var page = {
  init: function(){
    this.onLoad();
  },
  onLoad: function(){
    // 初始化左侧菜单
    navSide.init({
      name: 'user-center'
    });
    this.loadUserInfo();
  },
  // 加载用户信息
  loadUserInfo: function(){
    var userHtml = '';
    _user.getUserInfo(function(res){
      userHtml = _mm.renderHtml(templateIndex, res);
      $('.panel-body').html(userHtml);
    }, function(errMsg){
      _mm.errorTips(errMsg);
    });
  }
};
$(function(){
  page.init();
});
/*
 * @Author: TestBook-shj
 * @Date:   2018-12-27 21:48:50
 * @Last Modified by:   TestBook-shj
 * @Last Modified time: 2018-12-27 22:49:45
 */
'user strict';
require('./index.css');
var _mm = require('util/mm.js');
// 通用页面头部
var header = {
  init: function() {
    this.bindEvent();
  },
  onLoad: function() {
    var keyword = _mm.getUrlParam('keyword');
    // keyword存在，则回填输入框
    if (keyword) {
      $('#search-inport').val(keyword);
    };
  },
  bindEvent: function() {
    var _this = this;
    // 点击搜索按钮以后，搜索提交
    $('#search-btn').click(function() {
      _this.searchSubmit();
    });

    // 输入回车，搜索提交
    $('#search-input').keyup(function(e) {
      // 13是回车键的keyCode
      if (e.keyCode === 13) {
        _this.searchSubmit();
      }
    })
  },
  // 搜索提交
  searchSubmit: function() {
    var keyword = $.trim($('#search-input').val());
    // 如果提交的时候有值，跳转到list页
    if (keyword) {
      window.location.href = './list.html?keyword=' + keyword;
    }
    // 如果keyword为空，直接返回首页
    else {
      _mm.goHome();
    }
  }
};
header.init();
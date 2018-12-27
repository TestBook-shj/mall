/*
 * @Author: TestBook-shj
 * @Date:   2018-12-25 21:29:06
 * @Last Modified by:   Administrator
 * @Last Modified time: 2018-12-27 15:13:22
 */

'use strict';
var Hogan = require('hogan.js');
var conf = {
  serverHost: ''
};
var _mm = {
  // 网络请求
  request: function(param) {
    var _this = this;
    $.ajax({
      type: param.menthod || 'get',
      url: param.url || '',
      dataType: param.type || 'json',
      data: param.data || '',
      success: function(res) {
        // 请求成功
        if (0 === res.status) {
          typeof param.success === 'function' && param.success(res.data, res.msg);
        }
        // 没有登陆状态，需要强制登陆
        else if (10 === res.status) {
          _this.doLogin();
        }
        // 请求数据错误
        else if (1 === res.status) {
          typeof param.error === 'function' && param.error(res.msg);
        }
      },
      error: function(err) {
        typeof param.error === 'function' && param.error(err.statusText);
      }
    });
  },
  // 获取服务器地址
  getSeverUrl: function(path) {
    return conf.serverHost + path;
  },
  // 获取url参数
  getUrlParam: function(name) {
    // happymmall.com/product/list?keyword=xxx&page=1
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
    var result = window.location.search.substr(1).match(reg);
    return result ? decodeURIComponent(result[2]) : null;
  },
  // 渲染HTML模板
  renderHtml: function(htmlTemplate, data) {
    var template = Hogan.compile(htmlTemplate),
      result = template.render(data);
    return result;
  },
  // 成功提示 
  successTips: function(msg) {
    alert(msg || '操作成功');
  },
  // 错误提示
  errorTips: function(msg) {
    alert(msg || '哪里不对了!');
  },
  // 字段验证, 支持非空、手机、邮箱的判断
  validate: function(value, type) {
    var value = $.trim(value);
    // 非空验证
    if ('require' === type) {
      return !!value;
    }
    // 手机号验证
    if ('phone' === type) {
      return /^1\d{10}$/.test(value);
    }
    // 邮箱格式验证
    if ('email' === type) {
      return /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(value);
    }
  },
  // 统一登陆处理
  doLogin: function() {
    window.location.href = './login.html?redirect=' + encodeURIComponent(window.location.href);
  },
  // 跳转首页
  goHome: function(){
    window.location.href = './index.html()';
  }
};

module.exports = _mm;
/*
 * @Author: TestBook-shj
 * @Date:   2019-01-01 22:36:07
 * @Last Modified by:   TestBook-shj
 * @Last Modified time: 2019-01-03 23:19:44
 */
'use strict'
require('./index.css');
require('page/common/nav/index.js');
require('page/common/header/index.js');
var navSide = require('page/common/nav-side/index.js');
var _mm = require('util/mm.js');
var _product = require('service/product-service.js');
var Pagination = require('util/pagination/index.js');
var templateIndex = require('./index.string');

var page = {
  data: {
    listParam: {
      keyword: _mm.getUrlParam('keyword') || '',
      catrgoryId: _mm.getUrlParam('catrgoryId') || '',
      orderBy: _mm.getUrlParam('orderBy') || 'default',
      pageNum: _mm.getUrlParam('pageNum') || 1,
      pageSize: _mm.getUrlParam('pageSize') || 20
    }
  },
  init: function() {
    this.onLoad();
    this.bindEvent();
  },
  onLoad: function() {
    this.loadList();
  },
  bindEvent: function() {
    var _this = this;
    // 排序点击事件
    $('.sort-item').click(function() {
      var $this = $(this);
      _this.data.listParam.pageNum = 1;
      // 点击默认排序
      if ($this.data('type') === 'default') {
        // 已经是active样式
        if ($this.hasClass('active')) {
          return;
        }
        // 其他
        else {
          $this.addClass('active')
            .siblings('.sort-item')
            .removeClass('active asc desc');
          _this.data.listParam.orderBy = 'default';
        }
      }
      // 点击价格排序
      else if ($this.data('type') === 'price') {
        // active class处理
        $this.addClass('active')
          .siblings('.sort-item')
          .removeClass('active asc desc');
        _this.data.listParam.orderBy = 'price_asc';
        // 升序、降序处理
        if (!$this.hasClass('asc')) {
          $this.addClass('asc')
            .removeClass('desc');
        } else {
          $this.addClass('desc')
            .removeClass('asc');
          _this.data.listParam.orderBy = 'price_desc';
        }
      }
      // 重新加载列表
      _this.loadList();
    });
  },
  loadList: function() {
    var _this = this,
      listHtml = '',
      listParam = this.data.listParam,
      $pListCon = $('.p-list-con');
    $pListCon.html('<div class="loading"></div>');
    // 删除参数中不必要的字段
    listParam.catrgoryId ? (delete listParam.keyword) : (delete listParam.catrgoryId);
    // 请求接口
    _product.getProductList(listParam, function(res) {
      listHtml = _mm.renderHtml(templateIndex, {
        list: res.list
      });
      $('.p-list-con').html(listHtml);
      _this.loadPagination({
        hasPreviousPage: res.hasPreviousPage,
        prePage: res.prePage,
        hasNextPage: res.hasNextPage,
        NextPage: res.NextPage,
        pageNum: res.pageNum,
        pages: res.pages
      });
    }, function(errMsg) {
      console.log(errMsg)
      _mm.errorTips(errMsg);
    });
  },
  // 加载分页信息
  loadPagination: function(pageInfo) {
    this.pagination ? '' : (this.pagination = new Pagination());
    this.pagination.render($.extend({}, pageInfo, {
      container: $('.pagination')
    }));
  }
};

$(function() {
  page.init();
});
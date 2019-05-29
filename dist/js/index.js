"use strict";

$(function () {
  /*课程表*/
  // tab切换
  $(".curriculum-tab-head .head-item").each(function (index) {
    $(this).mouseenter(function () {
      $(this).addClass("active").siblings().removeClass("active");
    });
  });

  /*教学优势*/
  var tdArr = [];
  // 往tdArr添加数据
  $(".adv-col .td").each(function () {
    tdArr.push($(this).outerHeight());
  });
  var tdMaxHeight = Math.max.apply(Math, tdArr);
  // 把最高 高度赋值所有的.td
  $(".adv-col .td").each(function () {
    $(this).outerHeight(tdMaxHeight);
  });
});
"use strict";

$(function () {
  /*课程表*/
  // tab切换
  $(".curriculum-tab-head .head-item").each(function (index) {
    $(this).mouseenter(function () {
      // console.log(index);
      $(this).addClass("active").siblings().removeClass("active");
    });
  });
});
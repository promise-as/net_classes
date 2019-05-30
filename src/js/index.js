$(function () {
  /*tab切换*/
  // clickEle: 点击元素
  // contentEle: 内容元素
  function tabSwitch(clickEle, contentEle) {
    $(clickEle).each(function (index) {
      var that = this;
      $(that).mouseenter(function () {
        $(that).addClass("active").siblings().removeClass("active");
        $($(contentEle)[index]).addClass("active").siblings().removeClass("active");
      });
    });
  }

  /*课程表*/
  tabSwitch($(".pc-nav a"));
  /*课程表*/
  tabSwitch($(".curriculum-tab-head .head-item"), $(".curriculum .tab-lcm"));
  /*备考资料*/
  tabSwitch($(".test-data .head-item"), $(".test-data .data-item"));
  /*热门推荐*/
  tabSwitch($(".recommend .head-item"), $(".recommend .tab-body"));
  /*footer*/
  tabSwitch($(".footer .head-item"), $(".footer .data-item"));

  if ($(document.body).width() < 1366) {
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

    $(".curriculum-tab-body .tab-body").each(function (index) {
      $(this).find(".tab-body-area").not(":eq(0)").hide();
    });
  }


  /*授课 轮播图*/
  $(".lbt").slide({
    mainCell: ".cont ul",
    // autoPlay: true
  });

  $(".curriculum-tab-body .tab-body").each(function (index) {
    $(this).find(".hd").find("li").eq(0).addClass("on");
    var curId = 'cur' + index;
    /*课程表 轮播图*/
    $(".tab-lcm").slide({
      mainCell: `#${curId} ul`,
    });
  });
});

$(function () {
  $.fn.extend({
    preview: function() {
      this.each(function() {
        $(this).hover(function(e) {
          let img = $(this).attr("src");
          let wH = $(window).height();
          let wW = $(window).width();
          let smallImg = $(this).offset();
          let smallImgHeight = $(this).height();
          let smallImgWidth = $(this).width();
          let smallImgLeft = smallImg.left;
          let smallImgTop = smallImg.top;
          let style = "position: fixed; width: 200px; left: " + smallImgLeft + "px; top: " + smallImgTop + "px;";
          $("body").append("<div id='preview_tmp' style='" + style + "'><img src='" + img + "' style='width: 100%;'></div>");
          
          let bigImg = $('#preview_tmp img').offset();
          let bigImgHeight = $('#preview_tmp img').height();
          let bigImgWidth = $('#preview_tmp img').width();
          
          let newLeft = smallImgLeft + smallImgWidth + 50 + bigImgWidth > wW ? smallImgLeft - 50 - bigImgWidth : smallImgLeft + smallImgWidth + 50;
          let newTop = smallImgTop + bigImgHeight > wH ? smallImgTop - bigImgHeight : smallImgTop;
          $('#preview_tmp').offset({top: newTop, left: newLeft});
          
          console.log("hover")
        }, function(e) {
          console.log("out");
          $('#preview_tmp').remove();
        });
      });
    }
  });
});

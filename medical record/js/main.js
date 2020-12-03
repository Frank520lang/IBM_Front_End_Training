function checkSelect() {
  var value = $("select option:selected").val();
  if (value == "1") {
    $("#group_hide1").show();
  } else {
    $("#group_hide1").hide();
  }

}
$(document).ready(function () {
  $("#btn_add").click(function () {
    $("#div_hide1").show();
  });
});

function select_color() {
  $("#color").show();
}

// document.querySelector("#color").onchange = function () {
//   document.getElementById('color').click(); // 必须添加触发click事件否则不能通过点击确定按钮触发更改颜色
//   document.getElementById("display_color").style.background = this.value;
// }
function save() {
  var name_info = $("#name_info").val();
  var code_info = $("#code_info").val();
  var type_info = $("#type_info option:selected").val();
  var display_color = $("#display_color").css("background-color");
  //var des_info = $("#des_info").val();
  var date_info = $("#date_info").val();
  $("#table_hide1 tbody").append("<tr><td>" + name_info + "</td><td>" + code_info + "</td><td>" + display_color + "</td><td>" + type_info + "</td><td>" + date_info + "</td><td><button>修改</button><button>删除</button></td></tr>");

}
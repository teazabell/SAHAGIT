function display() {
  var table = $("#myTable");
  var maxRows = 10;
  $(".pagination").html("");
  var trnum = 0;
  var totalRows = $("#myTable tr").length;

  $("#myTable tr:gt(0)").each(function() {
    //แสดงข้อมูลว่าจะให้แสดงกี่แถว
    trnum++;
    if (trnum > maxRows) {
      $(this).hide();
    }
    if (trnum <= maxRows) {
      $(this).show();
    }
  });

  if(totalRows > maxRows){ //เพิ่มเลขหน้า
    var pagenum = Math.ceil(totalRows/maxRows)
    for(var i=1;i<=pagenum;){
        $('.pagination').append('<li data-page="'+i+'">\<span>'+ i++ +'<span class="sr-only">(current)</span></span>\</li>').show()
    }
}

  $(".pagination li:nth-child(2)").addClass("active");
  $(".pagination li").on("click", function() {
    var pageNum = $(this).attr("data-page");
    var trIndex = 0;
    $(".pagination li").removeClass("active");
    $(this).addClass("active");
    $("#myTable tr:gt(0)").each(function() {
      //กดเปลี่ยนหน้า
      trIndex++;
      if (
        trIndex > maxRows * pageNum ||
        trIndex <= maxRows * pageNum - maxRows
      ) {
        $(this).hide(); //เคลียร์หน้าเก่า
      } else {
        $(this).show(); //แสดงหน้าใหม่
      }
    });
  });
}
$(function() {
  $("table tr:eq(0)").prepend("<th>ID</th>");
  var id = 0;
  $("table tr:gt(0)").each(function() {
    id++;
    $(this).prepend("<td>" + id + "</td>");
  });
});

function display() {
  var perpage = 4; // จำนวนรายการต่อหนึ่งหน้า
  var allNum = $("div#content div.element").length; // นับจำนวน ข้อมูลทั้งหมดว่ามีกี่ชุด
  var i = 1;
  var paginator = "<span id='nav' class='active'" + i + " >" + i + "</span>"; // สร้าง navigator
  for (i = 2; i < Math.round(parseInt(allNum) / parseInt(perpage)); i++) {
    paginator += "<span id='nav' class='menu' >" + i + "</span>";
  }
  paginator += "<span id='nav' class='menu'" + i + " >" + i + "</span>";

  $("div.pagination").each(function() {
    // สร้าง navigator ที่ด้านบนและด้านล่างของหน้าจอ
    $(this).html(paginator);
  });

  // ทำการแทรก div เพื่อกำกับเลขหน้า  นับตามจำนวนรายการต่อหนึ่งหน้า
  var count = 0,
    pagecount = 1,
    regenerator = "<div class='page" + pagecount + "' for='all'>";
  $("div#content div.element").each(function() {
    count++;
    regenerator += "<div class='item-details'>" + $(this).html() + "</div>";
    if (!(count % perpage)) {
      pagecount++;
      regenerator += "</div><div class='page" + pagecount + "' for='all'>";
    }
  }); //แสดงเนื้อหาข้างใน
  regenerator += "</div>";
  $("div#content")
    .empty()
    .html(regenerator);
  $("div[for=all]").hide(); //ซ่อนข้อมูลทั้งหมดก่อน
  $("div.page1").show(400); //แสดงเฉพาะหน้าที่ 1
  //ดักการกดคีย์บอร์ดที่ navigator-page number ที่้ด้านบนและล่างของจอภาพ
  $("div.pagination span#nav").click(function() {
    $('span#nav').removeClass('active');
    $(this).addClass('active');
    
    var index = $(this).text();
    $("div[for=all]").hide(400);
    $("div.page" + index).show(400);
  });
}

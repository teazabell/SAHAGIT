function isEmpty(data, unit) {
  if (data.trim() == "") {
    return "-";
  } else return data + " " + unit + " ";
}

function resIsEmpty(data) {
  if (!$.trim(data)) {
    alert("ไม่พบข้อมูล");
    return false;
  } else return true;
}

function ajaxAPI() {
  var FICodeList = $("#menuFI").val();

  var criteria = {
    AccountTypeList: "",
    FICodeList: FICodeList,
    BalanceAmount: "",
    ProductName: "",
    DepositTermRange: "",
    DepositTermType: "",
    InterestWithoutTax: "",
    AccntWithInsrnc: "",
    ProductRelate: ""
  };

  if (FICodeList != "") {
    $.ajax({
      method: "POST",
      url: "https://iapi.bot.or.th/Stat/ProductDisclosure/Deposit",
      beforeSend: function(xhr) {
        xhr.setRequestHeader(
          "api-key",
          "U9G1L457H6DCugT7VmBaEacbHV9RX0PySO05cYaGsm"
        );
      },
      dataType: "json",
      contentType: "application/json; charset=utf-8",
      Accept: "application/json",
      data: JSON.stringify(criteria),
      success: function(response) {
        var img = {
          "002": "images/iconbank/กรุงเทพ.png",
          "004": "images/iconbank/กสิกร.png",
          "006": "images/iconbank/กรุงไทย.png",
          "011": "images/iconbank/ทหารไทย.png",
          "014": "images/iconbank/ไทยพาณิชย์.png",
          "017": "images/iconbank/ซิตี้แบงก์.png",
          "022": "images/iconbank/ซีไอเอ็มบี.png",
          "024": "images/iconbank/ยูโอบี.png",
          "025": "images/iconbank/กรุงศรี.png",
          "026": "images/iconbank/เมกะ สากลพาณิชย์.png",
          "030": "images/iconbank/ออมสิน.png",
          "033": "images/iconbank/ธอส.png",
          "034": "images/iconbank/ธ.ก.ส.png",
          "052": "images/iconbank/ธนาคารแห่งประเทศจีน(ไทย).png",
          "065": "images/iconbank/ธนชาต.png",
          "066": "images/iconbank/อิสลาม",
          "067": "images/iconbank/ทิสโก้.png",
          "069": "images/iconbank/เกียรตินาคิน.png",
          "070": "images/iconbank/ไอซีบีซี.png",
          "071": "images/iconbank/ไทยเครดิต เพื่อรายย่อย.png",
          "073": "images/iconbank/แลนด์ แอนด์ เฮ้าส์.png",
          "452": "images/iconbank/บง. แอ็ดวานซ์.png",
          "453": "images/iconbank/บง. ศรีสวัสดิ์.png",
          "608": "images/iconbank/บค.ลินน์ ฟิลลิปส์ มอร์ทเก็จ.png",
          "610": "images/iconbank/บค. เวิลด์.png",
          "613": "images/iconbank/บค.แคปปิตอล ลิ้งค์.png"
        };

        $(".text-block-FIName")
          .empty()
          .append("ธนาคาร" + deleteBr(response[0].FIName));
        $(".imgFI")
          .empty()
          .append('<img src="' + img[FICodeList] + '" width="100">');

        $(".divfooter").css("margin-top", "100px");

        pagination("demo1", response);
      },
      error: function(jqXHR, textStatus, errorThrown) {
        var msg = "";
        if (jqXHR.status === 0) {
          msg = "Not connect.\n Verify Network.";
        } else if (jqXHR.status == 404) {
          msg = "Requested page not found. [404]";
        } else if (jqXHR.status == 500) {
          msg = "Internal Server Error [500].";
        } else if (exception === "parsererror") {
          msg = "Requested JSON parse failed.";
        } else if (exception === "timeout") {
          msg = "Time out error.";
        } else if (exception === "abort") {
          msg = "Ajax request aborted.";
        } else {
          msg = "Uncaught Error.\n" + jqXHR.responseText;
        }
      }
    });
  }
}

function deleteBr(word){
  var index = word.indexOf("<br/>")

  if(index != -1){
  var text_head = word.substring(0,index);
  var text_last = word.substring(index+5);
  return text_head+""+text_last;
  }
  else return word;
}
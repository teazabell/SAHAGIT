function isEmpty(data, unit) {
  if (data.trim() == "") {
    return "-";
  } else return data + " " + unit + " ";
}

function resIsEmpty(data) {
  if (!$.trim(data)) {
    // alert("ไม่พบข้อมูล");
    return false;
  } else return true;
}

function ajaxAPI() {
  var FICodeList = $("#menuFI1").val();
  var AccountTypeList = $("#menuAccount").val();
  var BalanceAmount = document.getElementById("txtBalanceAmount").value;
  var AccntWithInsrnc = $("#menuAccntWithInsrnc").val();
  var ProductRelate = $("#menuProductRelate").val();
  var DepositTermRange = $("#menuDepositTermRange").val();
  var DepositTermType = $("#menuDepositTermType").val();
  var InterestWithoutTax = $("#menuInterestWithoutTax").val();
  var ProductName = $("#txtProductName").val();

  BalanceAmount = BalanceAmount.replace(',', '');
  
  var criteria = {
    AccountTypeList: AccountTypeList,
    FICodeList: FICodeList,
    BalanceAmount: BalanceAmount,
    ProductName: ProductName,
    DepositTermRange: DepositTermRange,
    DepositTermType: DepositTermType,
    InterestWithoutTax: InterestWithoutTax,
    AccntWithInsrnc: AccntWithInsrnc,
    ProductRelate: ProductRelate
  };


  $.ajax({
    method: "POST",
    // url: "https://iapi.bot.or.th/Stat/ProductDisclosure/Deposit",
    url: " https://apigw1.bot.or.th/bot/public/deposit-product/",
    beforeSend: function(xhr) {
      xhr.setRequestHeader(
        // "api-key",
        // "U9G1L457H6DCugT7VmBaEacbHV9RX0PySO05cYaGsm"
        "X-IBM-Client-Id",
        "b096ba29-5d7f-4842-b622-210d4787e3bd"
      );
    },
    dataType: "json",
    contentType: "application/json; charset=utf-8",
    Accept: "application/json",
    data: JSON.stringify(criteria),
    success: function(response) {
      // $(".divfooter").css("margin-top", "100px");
      $(".data-container").empty();
      if (resIsEmpty(response)) {
        $(".modal-header-title-detail").empty();
        $(".modal-body-detail").empty();
        pagination("demo1", response.result.data);
      }
      else{
         var str = "<div class='divNoSearch'><img src='images/nosearch.png' width='350' style='margin-top: 40px;margin-left:300px' class='image-nosearch'></div>";
        $(".data-container").append(str);
      }
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

function deleteBr(word) {
  var index = word.indexOf("<br/>");

  if (index != -1) {
    var text_head = word.substring(0, index);
    var text_last = word.substring(index + 5);
    return text_head + "" + text_last;
  } else return word;
}

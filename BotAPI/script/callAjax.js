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
  var AccountTypeList = $("#menuAccount").val();
  var ProductName = document.getElementById("txtProductName").value;
  var BalanceAmount = document.getElementById("txtBalanceAmount").value;
  var AccntWithInsrnc = $("#menuAccntWithInsrnc").val();
  var ProductRelate = $("#menuProductRelate").val();
  var DepositTermRange = $("#menuDepositTermRange").val();
  var DepositTermType = $("#menuDepositTermType").val();
  var InterestWithoutTax = $("#menuInterestWithoutTax").val();

  console.log(DepositTermRange);
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
      $('#myModal').modal( 'hide' ).data( 'bs.modal', null ); //Close bootstrap modal after submit

      if (resIsEmpty(response)) {
        pagination("demo1", response);
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

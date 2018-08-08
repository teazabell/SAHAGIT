function testAPI() {
    var criteria = {
      AccountTypeList: "",
      FICodeList: "",
      BalanceAmount: "",
      ProductName: "",
      DepositTermRange: "",
      DepositTermType: "",
      InterestWithoutTax: "",
      AccntWithInsrnc: "",
      ProductRelate: ""
    };
  
    $.ajax({
      method: "POST",
      url: "https://apigw1.bot.or.th/bot/public/deposit-product/",
        // url: "https://iapi.bot.or.th/Stat/ProductDisclosure/Deposit",
      beforeSend: function(xhr) {
        xhr.setRequestHeader(
        //   "api-key",
        //   "U9G1L457H6DCugT7VmBaEacbHV9RX0PySO05cYaGsm"
            "X-IBM-Client-Id",
            "b096ba29-5d7f-4842-b622-210d4787e3bd"
        );
      },
      dataType: "json",
      contentType: "application/json; charset=utf-8",
      Accept: "application/json",
      data: JSON.stringify(criteria),
      success: function(response) {
       console.log(response);
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
  
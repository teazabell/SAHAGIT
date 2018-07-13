function selectOption() {
  var criteria = {
    AccountTypeList: "",
    FICodeList: "",
    BalanceAmount: "",
    ProductName: "",
    DepositTermRange: "",
    DepositTermType: "",
    InterestWithoutTax: "",
    InterestWithoutTax: "",
    AccntWithInsrnc: "",
    ProductRelate: ""
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
      var $selectFI = $("#menuFI");
      $selectFI.append(showOptionFI(response));

      var $selectAccount = $("#menuAccount");
      $selectAccount.append(showOptionAccount());

      var button = '<button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal" style="float: right;margin-right: 50px;margin-bottom: 20px">Search</button>';

      $(".button-popup").append(button);
      pagination("demo1" , response);
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

function showOptionFI(response) {
  var listItems = "";
  var mySet = new Set(),
    setCode = new Set(),
    setName = new Set();

  $.each(response, function(index, value) {
    setCode.add(value.FICode);
    setName.add(value.FIName);
  });

  setCode = Array.from(setCode);
  setName = Array.from(setName);

  for (var i = 0; i < setCode.length; i++) {
    mySet.add({
      code: setCode[i],
      name: setName[i]
    });
  }

  mySet = Array.from(mySet);

  $.each(mySet, function(index, value) {
    listItems +=
      "<option value=" + value.code + " >" + value.name + "</option>";
  });

  return listItems;
}

function showOptionAccount() {
  var listItems = "";

  $.each(accountType, function(index, value) {
    if (index != 0) {
      listItems += "<option value=" + index + " >" + value + "</option>";
    }
  });
  return listItems;
}

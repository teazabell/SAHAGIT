function isEmpty(data, unit) {
  if (data.trim() == "") {
    return "-";
  } else return data + " " + unit + " ";
}

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

    var resultError = true;
    
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

        var $select = $("#categoryEvent");
        //$select.find("option").remove();
        var listitems = '';
        //var info = new Array();
        var setCode = new Set();
        var setName = new Set();

        var mySet = new Set(),
            mySet1 = new Set();
        
        $.each(response, function( index , value ) {
           setCode.add(value.FICode);
           setName.add(value.FIName);
        });


        setCode = Array.from(setCode);
        setName = Array.from(setName);

        for(var i = 0 ; i< setCode.length ;i++){
          mySet.add({
            code : setCode[i],
            name : setName[i]
          })
        }

        mySet = Array.from(mySet);

        //console.log(mySet[k].name);
        $.each( mySet , function(index , value){
          listitems += "<option value=" +value.code +" >" + value.name + "</option>";
        });
         $select.append(listitems);
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
  };

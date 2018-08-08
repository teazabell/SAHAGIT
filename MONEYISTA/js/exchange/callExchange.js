function ajaxAPIExchange() {

    var type = $("#exchangeRate").val();
    var start_period = $("#dateP").val();
    var end_period = start_period;
    var currency = $("#currency").val();

    var url = [
        // "https://iapi.bot.or.th/Stat/Stat-ExchangeRate/DAILY_AVG_EXG_RATE_V1/",
        // "https://iapi.bot.or.th/Stat/Stat-ExchangeRate/MONTHLY_AVG_EXG_RATE_V1/",
        // "https://iapi.bot.or.th/Stat/Stat-ExchangeRate/ANNUAL_AVG_EXG_RATE_V1/"

        "https://apigw1.bot.or.th/bot/public/Stat-ExchangeRate/DAILY_AVG_EXG_RATE_V1/",
        "https://apigw1.bot.or.th/bot/public/Stat-ExchangeRate/MONTHLY_AVG_EXG_RATE_V1/",
        "https://apigw1.bot.or.th/bot/public/Stat-ExchangeRate/ANNUAL_AVG_EXG_RATE_V1/"
    ]

      $.ajax({
        method: "GET",
        url: getValue(type , start_period , end_period , currency , url),
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
        // data: ,
        success: function(response) {
            
            var str = "<table id='exchangeTable' class='exchangeTable'>"+
            "<thead>"+
            "<tr  class='exchangeTable'>"+
            "<th  class='exchangeTable'>รายละเอียด</th>"+
            "<th  class='exchangeTable'></th>"+
            "</tr>"+
            "</thead>"+
            "<tbody>" +
            "<tr  class='exchangeTable'>" +
            "<td  class='exchangeTable'>สกุลเงิน</td>" +
            "<td  class='exchangeTable'>"+response.result.data.data_detail["0"].currency_name_th+"</td>" +
            "</tr>" +
            "<tr  class='exchangeTable'>" +
            "<td  class='exchangeTable'>อัตราซื้อตั๋วเงิน</td>" +
            "<td  class='exchangeTable'>"+response.result.data.data_detail["0"].buying_sight+"</td>" +
            "</tr>" +
            "<tr  class='exchangeTable'>" +
            "<td  class='exchangeTable'>อัตราซื้อเงินโอน</td>" +
            "<td  class='exchangeTable'>"+response.result.data.data_detail["0"].buying_transfer+"</td>" +
            "</tr>" +
            "<tr  class='exchangeTable' >" +
            "<td  class='exchangeTable'>อัตราขาย</td>" +
            "<td  class='exchangeTable'>"+response.result.data.data_detail["0"].selling+"</td>" +
            "</tr>" +
            "<tr  class='exchangeTable'>" +
            "<td  class='exchangeTable'>อัตรากลาง</td>" +
            "<td  class='exchangeTable'>"+response.result.data.data_detail["0"].mid_rate+"</td>" +
            "</tr>" +
            "<tr>" +
            "</tbody>"+
            "</table>";
            
            str += "<br><div>*หมายเหตุ "+response.result.data.data_header.report_uoq_name_th+"</div>"+
            "<div>*กําหนดเวลาเผยแพร่ 18.00 น. ของทุกวันทําการนั้นๆ</div>"+
            "<div>*ปรับปรุงข้อมูลล่าสุด "+response.result.data.data_header.last_updated+"</div>";
            
            // <br><br>"+
            // "<div>*หมายเหตุ"+response.result.data.data_detail["0"].report_uoq_name_th+"</div>";
         
            $("#dataOut").empty();
            $("#dataOut").append(str);

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
  
  
function getValue(type , start_period , end_period , currency , url){
    if(type == 0){
        return url[type]+"?start_period="+start_period+"&end_period="+end_period+"&currency="+currency;
    }
    else if(type ==1){
        var month = start_period.substring(0,7);
        return url[type]+"?start_period="+month+"&end_period="+month+"&currency="+currency;

    }
    else if(type ==2){
        var year = start_period.substring(0,4);
        return url[type]+"?start_period="+year+"&end_period="+year+"&currency="+currency;
    }
}
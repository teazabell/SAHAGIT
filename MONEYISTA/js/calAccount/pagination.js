
function isEmpty(data , DepositTermUnit) {
  if (data.trim() == "") {
    return "-";
  } else return (data+" "+DepositTermUnit);
}

function resIsEmpty(data) {
  if (!$.trim(data)) {
    alert("ไม่พบข้อมูล");
    return false;
  } else return true;
}

function pagination(namePage , sources) {
  (function(name) {
    var container = $('#pagination-' + name);

    var options = { //เพิ่มข้อมูล
      dataSource: sources,
      showGoInput: true,
      showGoButton: true,
      callback: function (response, pagination) {
        window.console && console.log(response, pagination);

        var dataHtml ="";

          $.each(response, function (index, item) {
            dataHtml += '<div class="element">' +
            'สถาบันการเงิน : ' + item.FIName + '<br/>' +
            'ประเภทเงินฝาก : '+ item.AccountType + '</br>' +
            'ผลิตภัณฑ์ : ' + item.ProductName + '<br/>' +
            //'อัตราดอกเบี้ยต่อปี' + response["0"].FIName + '<br/>' +
            'ระยะเวลาฝากที่กำหนด : ' + isEmpty(item.MinimumDepositTerm,"เดือน") +
            item.DepositTermFlag + '<br/>' +
            'จำนวนเงินเปิดบัญชีขั้นต่ำ : ' + numberWithCommas(parseInt(item.MinimumBalance).toFixed(0)) + ' บาท' + '<br/>' +
            'ต้องซื้อ/ใช้ผลิตภัณฑ์อื่นควบคู่กับการเปิดบัญชี : ' + item.BundleProductFlag + '<br/>' +
            '</div>';

          });

          container.prev().html(dataHtml);
        }
    };

    container.addHook('beforeInit', function () {
      window.console && console.log('beforeInit...');
    });
    container.pagination(options);

    container.addHook('beforePageOnClick', function () {
      window.console && console.log('beforePageOnClick...');
      //return false
    });

  })(namePage);
}

function interestRate(min , max){
if(min == max)
{
min = parseFloat(min).toFixed(2)+"%";
return min;
}
else {
min = parseFloat(min).toFixed(2)+"%";
max = parseFloat(max).toFixed(2)+"%";
return min+" - "+max;
} 
}

function numberWithCommas (x) {
var parts = x.toString().split(".");
parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
return parts.join(".");
}

function showDetail (index, pageNumber){
console.log("calling");
$('.content').show();
$('.content').not('#'+index+'-'+pageNumber).hide();

$('.modal-title').show();
$('.modal-title').not('#'+index+'-'+pageNumber).hide();

}
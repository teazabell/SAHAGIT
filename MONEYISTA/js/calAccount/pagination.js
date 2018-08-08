
function isEmpty(data , DepositTermUnit) {
  if (data.trim() == "") {
    return "-";
  } else return (data+" "+DepositTermUnit);
}

// function resIsEmpty(data) {
//   if (!$.trim(data)) {
//     alert("ไม่พบข้อมูล");
//     return false;
//   } else return true;
// }

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
  "066": "images/iconbank/อิสลาม.png",
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
            dataHtml += '<div class="divshowout">'+
            //"<button type='button' class='btn btn-link' data-toggle='modal' data-target='#interestModal' onclick=showDetail("+index+","+pagination.pageNumber+") >"+
            '<a href="showalldata.html" class="link-block-3 w-inline-block" target="_blank" onclick=sendData('+index+','+pagination.pageNumber+') >'+
            '<img src="'+img[item.FICode]+'" width="100" class="image-16"></a>'+
            '<div class="textinout"><b>ประเภทบัญชีเงินฝาก : </b>'+item.AccountType+
            '<br><b>ชื่อผลิตภัณฑ์ : </b>'+item.ProductName+
            '<br><b>ดอกเบี้ย : </b>'+interestRate(item.MinimumInterestRate,item.MaximumInterestRate)+' ต่อปี</div>'+
            '</div>';

            setCookie("FICode"+index+"-"+pagination.pageNumber, item.FICode);
            setCookie("ProductName"+index+"-"+pagination.pageNumber, item.ProductName);
            setCookie("AccountType"+index+"-"+pagination.pageNumber, item.AccountType);

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

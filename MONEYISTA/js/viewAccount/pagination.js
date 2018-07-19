
function isEmpty(data) {
    if (data.trim() == "") {
      return "-";
    } else return data;
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

          var dataHtml ="<table id='myTable' class='table table-bordered table-striped'  style='text-align: center'>"+
          "<thead >"+
            "<tr>"+
              // "<th>สถาบันการเงิน</th>"+
              "<th>ประเภทเงินฝาก</th>"+
              "<th>ผลิตภัณฑ์</th>"+
              "<th>อัตราดอกเบี้ยต่อปี</th>"+
              "<th>ระยะเวลาฝากที่กำหนด</th>"+
              "<th>จำนวนเงินเปิดบัญชีขั้นต่ำ</th>"+
              "<th>ต้องซื้อ/ใช้ผลิตภัณฑ์อื่นควบคู่กับการเปิดบัญชี</th>"+
            "</tr>"+
          "</thead>"+
          "<tbody>";
  
            $.each(response, function (index, item) {
  
              var data ="";
              if(item.InterestRateCondition.trim() == ""){
                
                 data= "<td>" + interestRate(item.MinimumInterestRate,item.MaximumInterestRate)+ "</td>";
              }
              else{
                data = "<td>" + "<button type='button' class='btn btn-link' data-toggle='modal' data-target='#interestModal' onclick=showDetail("+index+","+pagination.pageNumber+") >"+
                 interestRate(item.MinimumInterestRate,item.MaximumInterestRate)+"</button> </td>";
               }
  
               
              dataHtml += "<tr>" +
              // "<td>" + item.FIName +"</td>" +
              "<td>" + item.AccountType +"</td>" +
              "<td>" + item.ProductName + "</td>" +
              data+
              //  "<td>" + "<button type='button' class='btn btn-link' data-toggle='modal' data-target='#interestModal' onclick=showDetail("+index+","+pagination.pageNumber+") >"+
              //  interestRate(item.MinimumInterestRate,item.MaximumInterestRate)+"</button> </td>"+
              "<td>" + isEmpty(item.MinimumDepositTerm)+" เดือน" +"</br>"+ item.DepositTermFlag + "</td>" +
              "<td>" + numberWithCommas(parseInt(item.MinimumBalance)) +"</td>" +
              "<td>" +item.BundleProductFlag + "</td>" +
              "</tr>";
              
  
            });
  
             dataHtml += "</tbody></table>";
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
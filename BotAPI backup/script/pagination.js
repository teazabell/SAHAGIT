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
            "<th>สถาบันการเงิน</th>"+
            "<th>ประเภทเงินฝาก</th>"+
            "<th>ผลิตภัณฑ์</th>"+
            "<th>อัตราดอกเบี้ยต่อปี</th>"+
            "<th>ระยะเวลาฝากที่กำหนด</th>"+
            "<th>จำนวนเงินเปิดบัญชีขั้นต่ำ</th>"+
            "<th>ต้องซื้อ/ใช้ผลิตภัณฑ์อื่นควบคู่กับการเปิดบัญชี</th>"+
            "<th>รายละเอียดเพิ่มเติม</th>"+
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

             //var x = JSON.stringify(item);
            dataHtml += "<tr>" +
            "<td>" + item.FIName +"</td>" +
            "<td>" + item.AccountType +"</td>" +
            "<td>" + item.ProductName + "</td>" +
            //"<td>" + "<input type='button' class='btn btn-link' id='"+index+"-"+pagination.pageNumber+"' onclick=showAll("+item+") value='"+item.ProductName+"'>"+ "</td>"+
            data+
            "<td>" + isEmpty(item.MinimumDepositTerm)+" เดือน" +"</br>"+ item.DepositTermFlag + "</td>" +
            "<td>" + numberWithCommas(parseInt(item.MinimumBalance)) +"</td>" +
            "<td>" +item.BundleProductFlag + "</td>" +
            //"<td>" + "<input type='button' class='btn btn-link' onclick="+showAll(item)+" value='คลิก'>"+ "</td>"+
            //"<td>" + "<input type='button' class='btn btn-link'  onclick=showAll("+index+","+pagination.pageNumber+") value='คลิก' ></td>"+
            "</tr>";
            
            var detail = "<div class='content' id='"+index+"-"+pagination.pageNumber+"' style='display:block' >"+item.InterestRateCondition+"</div>";
            $(".modal-body-detail").append(detail);
            
            var header = "<h4 class='modal-title' id='"+index+"-"+pagination.pageNumber+"' style='display:block' >อัตราดอกเบี้ย ของผลิตภัณฑ์ "+item.ProductName+"</h4>";
            $(".modal-header-title-detail").append(header);

            //addDataAll(item,index,pagination.pageNumber);
        
          });

           dataHtml += "</tbody></table>";
          container.prev().html(dataHtml);
        }
      };
  
      // $.pagination(container, options);
  
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

function showDetail (index, pageNumber){
  $('.content').show();
  $('.content').not('#'+index+'-'+pageNumber).hide();

  $('.modal-title').show();
  $('.modal-title').not('#'+index+'-'+pageNumber).hide();
}

// function showAll (index, pageNumber){
//  // $('.contentAll').show();
//  // $('.contentAll').not('#'+index+'-'+pageNumber).hide();

//   location.href = "showAllData.html";
// }


// function showDetail(index){
//   console.log("Calling");
//   $("#"+index).css("display", "");
// }
// $('#interestModal').on('show.bs.modal', function (e) {
//   console.log("Calling");
//   alert('Modal is successfully shown!');
// });

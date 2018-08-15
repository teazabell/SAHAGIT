function createData(item , img ){
    var data = "<table id='exportTable' class='table table-bordered table-striped'>"+
                "<thead>"+
                "<tr>"+
                "</tr>"+
                "</thead>"+
                "<tbody>" +
                "<tr>" +
                "<td class='textHead'>สถาบันการเงิน</td>" +
                "<td ><img src='"+img+"' width='80' class='image-4'><br><div class='tdFIName'>"+deleteBr(item.FIName)+"</div></td>" +
                "</tr>" +
                "<tr>" +
                "<td class='textHead'>ผลิตภัณฑ์</td>" +
                "<td><div class='textBody' style='text-align: center'>"+item.AccountType+"<br>"+item.ProductName+"</div></td>" +
                "</tr>" +
                "<tr id='n1' class='tr'>" +
                "<td class='textHead'>อัตราดอกเบี้ยต่อปี (%ต่อปี)</td>" +
                "<td><div class='textBody' style='text-align: center'><b>"+interestRate(item.MinimumInterestRate,item.MaximumInterestRate)+"</b></div></td>" +
                "</tr>" +
                "<tr id='n2' class='tr'>" +
                "<td class='textHead'>อัตราดอกเบี้ย ตามเงื่อนไข (%ต่อปี)</td>" +
                "<td><div class='textBody'>"+lineUp(item.InterestRateCondition)+"</div></td>" +
                "</tr>" +
                "<tr id='n3' class='tr' style='display: none'>" +
                "<td class='textHead'>วิธีคิดอัตราดอกเบี้ย</td>" +
                "<td><div class='textBody'>"+item.InterestMethod+"</div></td>" +
                "</tr>" +
                "<tr id='n4' class='tr' style='display: none'>" +
                "<td class='textHead'>ดอกเบี้ยปลอดภาษี</td>" +
                "<td><div class='textBody'>"+InterestWithoutTaxFlag(item.InterestWithoutTax)+"</div></td>" +
                "</tr>" +
                "<tr id='n5' class='tr' style='display: none'>" +
                "<td class='textHead'>ระยะเวลาจ่ายดอกเบี้ย</td>" +
                "<td><div class='textBody'>"+item.InterestPaymentTerm+"</div></td>" +
                "</tr>" +
                "<tr id='n6' class='tr' style='display: none'>" +
                "<td class='textHead'>ช่องทางการรับดอกเบี้ย</td>" +
                "<td><div class='textBody'>"+item.InterestPaymentOptions+"</div></td>" +
                "</tr>" +
                "<tr id='n7' class='tr'>" +
                "<td class='textHead'>ดอกเบี้ย กรณีผิดเงื่อนไขการฝาก</td>" +
                "<td><div class='textBody'>"+InterestRateWithdraw(item.InterestRateWithdrawBeforeMaturity , item.InterestRateWhenDepositInstallmentIsOmitted)+"</div></td>" +
                "</tr>" +
                "<tr id='n8' class='tr' >" +
                "<td class='textHead'>ระยะเวลาฝากที่กำหนด</td>" +
                "<td><div class='textBody'>"+item.MinimumDepositTerm+" "+item.DepositTermUnit+"<br>"+item.DepositTermFlag+"</div></td>" +
                "</tr>" +
                "<tr id='n9' class='tr'>" +
                "<td class='textHead'>จำนวนเงินเปิดบัญชีขั้นต่ำ</td>" +
                "<td><div class='textBody'>"+minimumBalance(item.MinimumBalance , item.DepositTermFlag)+"</div></td>" +
                "</tr>" +
                "<tr id='n10'  class='tr' style='display: none'>" +
                "<td class='textHead'>จำนวนเงินฝากสูงสุด</td>" +
                "<td><div class='textBody'>"+number(item.MaximumBalance)+"</div></td>" +
                "</tr>" +
                "<tr id='n11' class='tr' >" +
                "<td class='textHead'>ต้องซื้อ/ใช้ผลิตภัณฑ์อื่นควบคู่กับการเปิดบัญชี</td>" +
                "<td><div class='textBody'>"+BundleProduct(item.BundleProduct)+"</div></td>" +
                "</tr>" +
                "<tr id='n12' class='tr'  style='display: none'>" +
                "<td class='textHead'>อายุผู้ฝาก (บุคคลธรรมดา)</td>" +
                "<td><div class='textBody'>"+item.DepositorAge+"</div></td>" +
                "</tr>" +
                "<tr id='n13' class='tr' style='display: none'>" +
                "<td class='textHead'>เงื่อนไขการเปิดบัญชี</td>" +
                "<td><div class='textBody'>"+lineUp(item.OpenningAccountCondition)+"</div></td>" +
                "</tr>" +
                "<tr id='n14'  class='tr' style='display: none'>" +
                "<td class='textHead'>การฝากเพิ่มในบัญชีเดิม</td>" +
                "<td><div class='textBody'>"+yesORno(item.AdditionalDepositFlag)+"</div></td>" +
                "</tr>" +
                "<tr id='n15' class='tr' style='display: none'>" +
                "<td class='textHead'>จำนวนเงินฝากขั้นต่ำต่อครั้ง</td>" +
                "<td><div class='textBody'>"+number(item.MinimumAmountPerEachDeposit)+"</div></td>" +
                "</tr>" +
                "<tr id='n16' class='tr' style='display: none'>" +
                "<td class='textHead'>การถอนบางส่วนของแต่ละรายการก่อนครบกำหนด</td>" +
                "<td><div class='textBody'>"+yesORno(item.PartialWithdrowFlag)+"</div></td>" +
                "</tr>" +
                "<tr id='n17' class='tr' >" +
                "<td class='textHead'>เงื่อนไขการฝาก/ถอน/โอน และเงินคงเหลือ</td>" +
                "<td><div class='textBody'>"+lineUp(item.ConditionOfDepositWithdrawTransferAndBalance)+"</div></td>" +
                "</tr>" +
                "<tr id='n18' class='tr' style='display: none'>" +
                "<td class='textHead'>การต่ออายุบัญชี เมื่อครบกำหนดระยะเวลาการฝาก</td>" +
                "<td><div class='textBody'>"+item.AccountRenewal+"</div></td>" +
                "</tr>" +
                "<tr id='n19'  class='tr'>" +
                "<td class='textHead'>ค่ารักษาบัญชี</td>" +
                "<td><div class='textBody'>"+item.AccountMaintenance+"</div></td>" +
                "</tr>" +
                "<tr id='n20' class='tr' >" +
                "<td class='textHead'>ประกันภัย</td>" +
                "<td><div class='textBody'>"+item.InsuranceType+"</div></td>" +
                "</tr>" +
                "<tr id='n21' class='tr' style='display: none'>" +
                "<td class='textHead'>ชื่อบริษัทประกันภัย</td>" +
                "<td><div class='textBody'>"+item.InsuranceCompanyName+"</div></td>" +
                "</tr>" +
                "<tr id='n22' class='tr'  style='display: none'>" +
                "<td class='textHead'>วงเงินคุ้มครอง</td>" +
                "<td><div class='textBody'>"+item.InsuranceProtectionLimit+"</div></td>" +
                "</tr>" +
                "<tr id='n23' class='tr' style='display: none'>" +
                "<td class='textHead'>เงื่อนไขความคุ้มครองประกันภัย</td>" +
                "<td><div class='textBody'>"+item.InsuranceCondition+"</div></td>" +
                "</tr>" +
                "<tr id='n24' class='tr' >" +
                "<td class='textHead'>Website ผู้ให้บริการ (Link)</td>" +
                "<td><div class='textBody'><a href='"+item.WebsiteUrl+"'>ไปยัง Website ผลิตภัณฑ์</a></div></td>" +
                "</tr>" +
                "</tbody>" +
                "</table>";

    $(".content").append(data);
}

function lineUp(word) {
    var newWord = word.replace(/\n/g, "<br/>");
    return newWord;
}

function BundleProduct(BundleProductFlag , BundleProduct){
    if(BundleProductFlag == "ต้อง"){
        return BundleProduct;
    }
    else return BundleProductFlag;
}

function InterestWithoutTaxFlag (InterestWithoutTaxFlag){
    if(InterestWithoutTaxFlag == 1){
        return "ปลอดภาษี";
    }
    else return "ไม่ปลอดภาษี";
}

function yesORno(data){
    if(data == "1"){
        return "ได้";
    }
    else return "ไม่ได้";
}

function InterestRateWithdraw(InterestRateWithdrawBeforeMaturity , InterestRateWhenDepositInstallmentIsOmitted){
       var str = "";
    if(InterestRateWithdrawBeforeMaturity != ""){
        str += "<u><b>กรณีถอนก่อนครบกำหนด</b></u><br>"+lineUp(InterestRateWithdrawBeforeMaturity);
    }
    if(InterestRateWhenDepositInstallmentIsOmitted != ""){
        str += "<br><u><b>กรณีขาดฝากตามงวดที่กำหนด</b></u><br>"+lineUp(InterestRateWhenDepositInstallmentIsOmitted);
    }
    return str;
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

  function deleteBr(word){
    var index = word.indexOf("<br/>")
  
    if(index != -1){
    var text_head = word.substring(0,index);
    var text_last = word.substring(index+5);
    return text_head+""+text_last;
    }
    else return word;
  }

  function number(item){
    if(item == 0.0000 || item == "") return "ไม่กำหนด";
    else if(item != "" ) return addCommas(parseInt(item))+" บาท";
}

function minimumBalance(item , type){
    if (type == "") return addCommas(parseInt(item))+" บาท";
    else if(type == "ต้องฝากทุกเดือน") return addCommas(parseInt(item))+" บาท/เดือน";
}
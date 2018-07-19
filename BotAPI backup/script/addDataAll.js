function addDataAll(item , index , pageNumber){

    console.log("calling");
    // var data = "<table class='contentAll' id='"+index+"-"+pageNumber+"'>"+
    //             "<tbody>" +
    //             "<tr>" +
    //             "<td>สถาบันการเงิน</td>" +
    //             "<td>"+item.FIName+"</td>" +
    //             "</tr>" +
    //             "<tr>" +
    //             "<td>ผลิตภัณฑ์</td>" +
    //             "<td>"+item.AccountType+"<br>"+item.ProductName+"</td>" +
    //             "</tr>" +
    //             "<tr>" +
    //             "<td>อัตราดอกเบี้ยต่อปี (%ต่อปี)</td>" +
    //             "<td>ต่อปี</td>" +
    //             "</tr>" +
    //             "<tr>" +
    //             "<td>อัตราดอกเบี้ย ตามเงื่อนไข (%ต่อปี)</td>" +
    //             "<td>"+item.InterestRateCondition+"</td>" +
    //             "</tr>" +
    //             "<tr>" +
    //             "<td>วิธีคิดอัตราดอกเบี้ย</td>" +
    //             "<td>"+item.InterestMethod+"</td>" +
    //             "</tr>" +
    //             "<tr>" +
    //             "<td>ดอกเบี้ยปลอดภาษี</td>" +
    //             "<td>"+item.InterestWithoutTax+"</td>" +
    //             "</tr>" +
    //             "<tr>" +
    //             "<td>ระยะเวลาจ่ายดอกเบี้ย</td>" +
    //             "<td>"+item.InterestPaymentTerm+"</td>" +
    //             "</tr>" +
    //             "<tr>" +
    //             "<td>ช่องทางการรับดอกเบี้ย</td>" +
    //             "<td>"+item.InterestPaymentOptions+"</td>" +
    //             "</tr>" +
    //             "<tr>" +
    //             "<td>ดอกเบี้ย กรณีผิดเงื่อนไขการฝาก</td>" +
    //             "<td>"+item.InterestRateWithdrawBeforeMaturity+"<br>"+"<br>"+item.InterestRateWhenBalanceIsBelowMimimumLevel+"<br>"+item.InterestRateWhenDepositInstallmentIsOmitted+"</td>" +
    //             "</tr>" +
    //             "<tr>" +
    //             "<td>ระยะเวลาฝากที่กำหนด</td>" +
    //             "<td>"+item.MinimumDepositTerm+"<br>"+item.DepositTermFlag+"</td>" +
    //             "</tr>" +
    //             "<tr>" +
    //             "<td>จำนวนเงินเปิดบัญชีขั้นต่ำ</td>" +
    //             "<td>"+item.MinimumBalance+"</td>" +
    //             "</tr>" +
    //             "<tr>" +
    //             "<td>จำนวนเงินฝากสูงสุด</td>" +
    //             "<td>"+item.MaximumBalance+"</td>" +
    //             "</tr>" +
    //             "<tr>" +
    //             "<td>ต้องซื้อ/ใช้ผลิตภัณฑ์อื่นควบคู่กับการเปิดบัญชี</td>" +
    //             "<td>"+item.BundleProductFlag+"<br>"+item.BundleProduct+"</td>" +
    //             "</tr>" +
    //             "<tr>" +
    //             "<td>อายุผู้ฝาก (บุคคลธรรมดา)</td>" +
    //             "<td>"+item.DepositorAge+"</td>" +
    //             "</tr>" +
    //             "<tr>" +
    //             "<td>เงื่อนไขการเปิดบัญชี</td>" +
    //             "<td>"+item.OpenningAccountCondition+"</td>" +
    //             "</tr>" +
    //             "<tr>" +
    //             "<td>การฝากเพิ่มในบัญชีเดิม</td>" +
    //             "<td>"+item.AdditionalDepositFlag+"</td>" +
    //             "</tr>" +
    //             "<tr>" +
    //             "<td>จำนวนเงินฝากขั้นต่ำต่อครั้ง</td>" +
    //             "<td>"+item.MinimumAmountPerEachDeposit+"</td>" +
    //             "</tr>" +
    //             "<tr>" +
    //             "<td>การถอนบางส่วนของแต่ละรายการก่อนครบกำหนด</td>" +
    //             "<td>"+item.PartialWithdrowFlag+"</td>" +
    //             "</tr>" +
    //             "<tr>" +
    //             "<td>เงื่อนไขการฝาก/ถอน/โอน และเงินคงเหลือ</td>" +
    //             "<td>"+item.ConditionOfDepositWithdrawTransferAndBalance+"</td>" +
    //             "</tr>" +
    //             "<tr>" +
    //             "<td>การต่ออายุบัญชี เมื่อครบกำหนดระยะเวลาการฝาก</td>" +
    //             "<td>"+item.AccountRenewal+"</td>" +
    //             "</tr>" +
    //             "<tr>" +
    //             "<td>ค่ารักษาบัญชี</td>" +
    //             "<td>"+item.AccountMaintenance+"</td>" +
    //             "</tr>" +
    //             "<tr>" +
    //             "<td>ประกันภัย</td>" +
    //             "<td>"+item.InsuranceType+"</td>" +
    //             "</tr>" +
    //             "<tr>" +
    //             "<td>ชื่อบริษัทประกันภัย</td>" +
    //             "<td>"+item.InsuranceCompanyName+"</td>" +
    //             "</tr>" +
    //             "<tr>" +
    //             "<td>วงเงินคุ้มครอง</td>" +
    //             "<td>"+item.InsuranceProtectionLimit+"</td>" +
    //             "</tr>" +
    //             "<tr>" +
    //             "<td>เงื่อนไขความคุ้มครองประกันภัย</td>" +
    //             "<td>"+item.InsuranceCondition+"</td></td>" +
    //             "</tr>" +
    //             "<tr>" +
    //             "<td>Website ผู้ให้บริการ (Link)</td>" +
    //             "<td>"+item.WebsiteUrl+"</td>" +
    //             "</tr>" +
    //             "</tbody>" +
    //             "</table>";

    var data ="World";

                //document.getElementById("demo").insertAdjacentHTML('beforeend', data);

                //document.getElementById("demo").innerHTML(data);
                $("#demo").append(data);

    
    //location.href = "showAllData.html";
    
}
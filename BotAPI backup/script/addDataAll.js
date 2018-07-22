function addDataAll(item, index, pageNumber) {

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

    // var detail =
    // "<div class='content' style='display:block' >"+
    // '<div class="rowshow w-row">' +
    // '<div class="column-7 w-col w-col-6">' +
    // '<div class="textshowCol">สถาบันการเงิน</div>' +
    // "</div>" +
    // '<div class="column-8 w-col w-col-6"><img src="'+img+'" width="60" class="image-4">' +
    // '<div class="text-block-17">'+item.FIName+'</div>' +
    // "</div>" +
    // "</div>" +
    // '<div class="rowshow w-row">' +
    // '<div class="column-7 w-col w-col-6">' +
    // '<div class="textshowCol">ผลิตภัณฑ์</div>' +
    // "</div>" +
    // '<div class="column-8 w-col w-col-6"><div class="txtItem">'+item.ProductName+'</div></div>'+
    // "</div>" +
    // "</div>" +
    // '<div class="rowshow w-row">' +
    // '<div class="column-7 w-col w-col-6">' +
    // '<div class="textshowCol">อัตราดอกเบี้ยต่อปี (%ต่อปี)</div>' +
    // "</div>" +
    // '<div class="column-8 w-col w-col-6"><div class="txtItem"></div></div>'+
    // "</div>" +
    // "</div>" +
    // '<div class="rowshow w-row">' +
    // '<div class="column-7 w-col w-col-6">' +
    // '<div class="textshowCol">อัตราดอกเบี้ยตามเงื่อนไข (%ต่อปี)</div>' +
    // "</div>" +
    // '<div class="column-8 w-col w-col-6"><div class="txtItem">'+lineUp(item.InterestRateCondition)+'</div></div>'+
    // "</div>" +
    // "</div>" +
    // '<div class="rowshow w-row">' +
    // '<div class="column-7 w-col w-col-6">' +
    // '<div class="textshowCol">วิธีคิดอัตราดอกเบี้ย</div>' +
    // "</div>" +
    // '<div class="column-8 w-col w-col-6"><div class="txtItem">'+item.InterestMethod+'</div></div>'+
    // "</div>" +
    // "</div>" +
    // '<div class="rowshow w-row">' +
    // '<div class="column-7 w-col w-col-6">' +
    // '<div class="textshowCol">ดอกเบี้ยปลอดภาษี</div>' +
    // "</div>" +
    // '<div class="column-8 w-col w-col-6"><div class="txtItem">'+InterestWithoutTaxFlag(item.InterestWithoutTaxFlag)+'</div></div>'+
    // "</div>" +
    // "</div>" +
    // '<div class="rowshow w-row">' +
    // '<div class="column-7 w-col w-col-6">' +
    // '<div class="textshowCol">ระยะเวลาจ่ายดอกเบี้ย</div>' +
    // "</div>" +
    // '<div class="column-8 w-col w-col-6"><div class="txtItem">'+item.InterestPaymentTerm+'</div></div>'+
    // "</div>" +
    // "</div>" +
    // '<div class="rowshow w-row">' +
    // '<div class="column-7 w-col w-col-6">' +
    // '<div class="textshowCol">ช่องทางการรับดอกเบี้ย</div>' +
    // "</div>" +
    // '<div class="column-8 w-col w-col-6"><div class="txtItem">'+item.InterestPaymentOptions+'</div></div>'+
    // "</div>" +
    // "</div>" +
    // '<div class="rowshow w-row">' +
    // '<div class="column-7 w-col w-col-6">' +
    // '<div class="textshowCol">ดอกเบี้ย กรณีผิดเงื่อนไขการฝาก</div>' +
    // "</div>" +
    // '<div class="column-8 w-col w-col-6"><div class="txtItem">'+item.InterestRateWithdrawBeforeMaturity+"<br>"+"<br>"+item.InterestRateWhenBalanceIsBelowMimimumLevel+"<br>"+item.InterestRateWhenDepositInstallmentIsOmitted+'</div></div>'+
    // "</div>" +
    // "</div>" +
    // '<div class="rowshow w-row">' +
    // '<div class="column-7 w-col w-col-6">' +
    // '<div class="textshowCol">ระยะเวลาฝากที่กำหนด</div>' +
    // "</div>" +
    // '<div class="column-8 w-col w-col-6"><div class="txtItem">'+item.MinimumDepositTerm+"<br>"+item.DepositTermFlag+'</div></div>'+
    // "</div>" +
    // "</div>" +
    // '<div class="rowshow w-row">' +
    // '<div class="column-7 w-col w-col-6">' +
    // '<div class="textshowCol">จำนวนเงินเปิดบัญชีขั้นต่ำ</div>' +
    // "</div>" +
    // '<div class="column-8 w-col w-col-6"><div class="txtItem">'+item.MinimumBalance+'</div></div>'+
    // "</div>" +
    // "</div>" +
    // '<div class="rowshow w-row">' +
    // '<div class="column-7 w-col w-col-6">' +
    // '<div class="textshowCol">จำนวนเงินฝากสูงสุด</div>' +
    // "</div>" +
    // '<div class="column-8 w-col w-col-6"><div class="txtItem">'+item.MaximumBalance+'</div></div>'+
    // "</div>" +
    // "</div>" +
    // '<div class="rowshow w-row">' +
    // '<div class="column-7 w-col w-col-6">' +
    // '<div class="textshowCol">ต้องซื้อ/ใช้ผลิตภัณฑ์อื่นควบคู่การเปิดบัญชี</div>' +
    // "</div>" +
    // '<div class="column-8 w-col w-col-6"><div class="txtItem">'+BundleProduct(item.BundleProduct)+'</div></div>'+
    // "</div>" +
    // "</div>" +
    // '<div class="rowshow w-row">' +
    // '<div class="column-7 w-col w-col-6">' +
    // '<div class="textshowCol">อายุผู้ฝาก (บุคคลธรรมดา)</div>' +
    // "</div>" +
    // '<div class="column-8 w-col w-col-6"><div class="txtItem">'+item.DepositorAge+'</div></div>'+
    // "</div>" +
    // "</div>" +
    // '<div class="rowshow w-row">' +
    // '<div class="column-7 w-col w-col-6">' +
    // '<div class="textshowCol">เงื่อนไขการเปิดบัญชี</div>' +
    // "</div>" +
    // '<div class="column-8 w-col w-col-6"><div class="txtItem">'+lineUp(item.OpenningAccountCondition)+'</div></div>'+
    // "</div>" +
    // "</div>" +
    // '<div class="rowshow w-row">' +
    // '<div class="column-7 w-col w-col-6">' +
    // '<div class="textshowCol">การฝากเพิ่มในบัญชีเดิม</div>' +
    // "</div>" +
    // '<div class="column-8 w-col w-col-6"><div class="txtItem">'+AdditionalDepositFlag(item.AdditionalDepositFlag)+'</div></div>'+
    // "</div>" +
    // "</div>" +
    // '<div class="rowshow w-row">' +
    // '<div class="column-7 w-col w-col-6">' +
    // '<div class="textshowCol">จำนวนเงินฝากขั้นต่ำต่อครั้ง</div>' +
    // "</div>" +
    // '<div class="column-8 w-col w-col-6"><div class="txtItem">'+item.MinimumAmountPerEachDeposit+'</div></div>'+
    // "</div>" +
    // "</div>" +
    // '<div class="rowshow w-row">' +
    // '<div class="column-7 w-col w-col-6">' +
    // '<div class="textshowCol">การถอนบางส่วนของแต่ละรายการก่อนครบกำหนด</div>' +
    // "</div>" +
    // '<div class="column-8 w-col w-col-6"><div class="txtItem">'+item.PartialWithdrowFlag+'</div></div>'+
    // "</div>" +
    // "</div>" +
    // '<div class="rowshow w-row">' +
    // '<div class="column-7 w-col w-col-6">' +
    // '<div class="textshowCol">เงื่อนไขการฝาก/ถอน/โอนและเงินคงเหลือ</div>' +
    // "</div>" +
    // '<div class="column-8 w-col w-col-6"><div class="txtItem">'+item.ConditionOfDepositWithdrawTransferAndBalance+'</div></div>'+
    // "</div>" +
    // "</div>" +
    // '<div class="rowshow w-row">' +
    // '<div class="column-7 w-col w-col-6">' +
    // '<div class="textshowCol">การต่ออายุบัญชี เมื่อครบกำหนดระยะการฝาก</div>' +
    // "</div>" +
    // '<div class="column-8 w-col w-col-6"><div class="txtItem">'+item.AccountRenewal+'</div></div>'+
    // "</div>" +
    // "</div>" +
    // '<div class="rowshow w-row">' +
    // '<div class="column-7 w-col w-col-6">' +
    // '<div class="textshowCol">ค่ารักษาบัญชี</div>' +
    // "</div>" +
    // '<div class="column-8 w-col w-col-6"><div class="txtItem">'+item.AccountMaintenance+'</div></div>'+
    // "</div>" +
    // "</div>" +
    // '<div class="rowshow w-row">' +
    // '<div class="column-7 w-col w-col-6">' +
    // '<div class="textshowCol">ประกันภัย</div>' +
    // "</div>" +
    // '<div class="column-8 w-col w-col-6"><div class="txtItem">'+item.InsuranceType+'</div></div>'+
    // "</div>" +
    // "</div>" +
    // '<div class="rowshow w-row">' +
    // '<div class="column-7 w-col w-col-6">' +
    // '<div class="textshowCol">ชื่อบริษัทประกันภัย</div>' +
    // "</div>" +
    // '<div class="column-8 w-col w-col-6"><div class="txtItem">'+item.InsuranceCompanyName+'</div></div>'+
    // "</div>" +
    // "</div>" +
    // '<div class="rowshow w-row">' +
    // '<div class="column-7 w-col w-col-6">' +
    // '<div class="textshowCol">วงเงินการคุ้มครอง</div>' +
    // "</div>" +
    // '<div class="column-8 w-col w-col-6"><div class="txtItem">'+item.InsuranceProtectionLimit+'</div></div>'+
    // "</div>" +
    // "</div>" +
    // '<div class="rowshow w-row">' +
    // '<div class="column-7 w-col w-col-6">' +
    // '<div class="textshowCol">เงื่อนไขความคุ้มครองประกันภัย</div>' +
    // "</div>" +
    // '<div class="column-8 w-col w-col-6"><div class="txtItem">'+item.InsuranceCondition+'</div></div>'+
    // "</div>" +
    // "</div>" +
    // '<div class="rowshow w-row">' +
    // '<div class="column-7 w-col w-col-6">' +
    // '<div class="textshowCol">website ผู้ให้บริการ (Link)</div>' +
    // "</div>" +
    // '<div class="column-8 w-col w-col-6"><div class="txtItem"><a href="'+item.WebsiteUrl+'">ไปยัง Website ผลิตภัณฑ์</a></div></div>'+
    // "</div>" +
    // "</div>" +
    // "</div>";

    var data = "World";

    //document.getElementById("demo").insertAdjacentHTML('beforeend', data);

    //document.getElementById("demo").innerHTML(data);
    $("#demo").append(data);


    //location.href = "showAllData.html";

}
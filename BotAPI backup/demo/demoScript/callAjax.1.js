function isEmpty(data , unit) {
    if (data.trim() == '') {
        return "-";
    }
    else return data+" "+unit+" ";
}

function ajaxAPI() {
    $(document).ready(function () {
        var criteria = {
            "AccountTypeList": "",
            "FICodeList": "004",
            "BalanceAmount": "",
            "ProductName": "",
            "DepositTermRange": "",
            "DepositTermType": "",
            "InterestWithoutTax": "",
            "AccntWithInsrnc": "",
            "ProductRelate": ""
        };

        var resultError = true;

        $.ajax({
            method: "POST",
            url: "https://iapi.bot.or.th/Stat/ProductDisclosure/Deposit",
            beforeSend: function (xhr) {
                xhr.setRequestHeader('api-key', 'U9G1L457H6DCugT7VmBaEacbHV9RX0PySO05cYaGsm');
            },
            dataType: 'json',
            contentType: 'application/json; charset=utf-8',
            Accept: 'application/json',
            data: JSON.stringify(criteria),
            success: function (response) {
                console.log(response);

                var str = '';

                for (var i = 0; i < response.length; i++) {
                    str += '<div class="element">' +
                        'สถาบันการเงิน : ' + response[i].FIName + '<br/>' +
                        'ผลิตภัณฑ์ : ' + response[i].ProductName + '<br/>' +
                        //'อัตราดอกเบี้ยต่อปี' + response["0"].FIName + '<br/>' +
                        'ระยะเวลาฝากที่กำหนด : ' + isEmpty(response[i].MinimumDepositTerm,"เดือน") +
                        response[i].DepositTermFlag + '<br/>' +
                        'จำนวนเงินเปิดบัญชีขั้นต่ำ : ' + response[i].MinimumBalance + ' บาท' + '<br/>' +
                        'ต้องซื้อ/ใช้ผลิตภัณฑ์อื่นควบคู่กับการเปิดบัญชี : ' + response[i].BundleProductFlag + '<br/>' +
                        '</div>';
                }
                //$("#content").empty(); //ลบ display-data ก่อนหน้า ลบข้อความที่ต้องการ
                $("#content").append(str);
                display();
            },
            error: function (jqXHR, textStatus, errorThrown) {
                var msg = '';
                if (jqXHR.status === 0) {
                    msg = 'Not connect.\n Verify Network.';
                } else if (jqXHR.status == 404) {
                    msg = 'Requested page not found. [404]';
                } else if (jqXHR.status == 500) {
                    msg = 'Internal Server Error [500].';
                } else if (exception === 'parsererror') {
                    msg = 'Requested JSON parse failed.';
                } else if (exception === 'timeout') {
                    msg = 'Time out error.';
                } else if (exception === 'abort') {
                    msg = 'Ajax request aborted.';
                } else {
                    msg = 'Uncaught Error.\n' + jqXHR.responseText;
                }
            }
        });
    });
}
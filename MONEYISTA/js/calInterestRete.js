function calendar() {
  var amount_day = [-1, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  var start_d = $("#start_dayA").val();
  var start_m = $("#start_monthA").val();
  var start_y = $("#start_yearA").val();

  var end_d = $("#end_dayA").val();
  var end_m = $("#end_monthA").val();
  var end_y = $("#end_yearA").val();

  var dayZ = 0;

  //เช็คปีอธิกสุรทิน
  amount_day[2] = checkLeapYear(start_y);

  var day = start_d,
    month = start_m,
    year = start_y,
    sum = 0;

  // for (var i = month + 1; i < end_m; i++) {
  //   dayZ += amount_day[month];
  //   if (month == 13) {
  //     month = 1;
  //     year++;
  //     amount_day[2] = checkLeapYear(year);
  //   }
  // }
  // dayZ = dayZ + (amount_day[start_m] - start_d) + end_d;

  while (day != end_d || month != end_m || year != end_y) {
    day++;
    sum++;
    if (day > amount_day[month]) {
      day = 1;
      month++;
    }
    if (month == 13) {
      month = 1;
      year++;
      amount_day[2] = checkLeapYear(year);
    }
  }
  return sum;
}

function checkLeapYear(y) {
  if (y % 4 == 0 && (y % 100 != 0 || y % 400 == 0)) {
    return 29;
  } else return 28;
}

function calInterestRate_saving() {
  var numOfDay = calendar();
  var money = $("input[name='amountA']").val();
  money = money.replace(',', '');
  var interestRate = $("input[name='interestRateA']").val();
  var interest = (money * (interestRate / 100) * numOfDay) / 365;
  
  $(".div-block-7").empty().append(interest.toFixed(2)+" บาท");
  $(".div-block-8").empty().append("0 บาท");
  $(".div-block-9").empty().append(interest.toFixed(2)+" บาท");
}

function calFixedDepositInterest() {
  var money = $("input[name='amountB']").val();
  money = money.replace(',', '');
  var interestRate = $("input[name='interestRateB']").val();
  interestRate = interestRate;
  var depositeType = $("#depositeType").val();
  var interest = (money * (interestRate / 100) * depositeType) / 365;
  var interestWithoutTax = interest*0.85;
  var subTax = interest-interestWithoutTax;
  $(".div-block-13").empty().append(interest.toFixed(2)+" บาท");
  $(".div-block-12").empty().append(subTax.toFixed(2)+" บาท");
  $(".div-block-14").empty().append(interestWithoutTax.toFixed(2)+" บาท");
  // ฝากต่อไปเรื่อย ๆ จนถึงปัจจุบันได้เท่าไร ไม่ครบเดือน ไม่จ่ายดอกเบี้ย
}

// function calFixedDepositInterest() {

//   var money = $("input[name='amountB']").val();
//   var interestRate = $("input[name='interestRateB']").val();
//   interestRate = interestRate * 0.85;
//   var depositeType = $("#depositeType").val();
//   var interest = (money * (interestRate / 100) * depositeType) / 365;

//   console.log(interest);
//   // ฝากต่อไปเรื่อย ๆ จนถึงปัจจุบันได้เท่าไร ไม่ครบเดือน ไม่จ่ายดอกเบี้ย
// }

function calTaweesap() {
  var start_money = parseFloat($("input[name='amountC']").val());
  var interestRate = parseFloat($("input[name='interestRateC']").val());
  var total_interest = 0;
  var total_money = parseFloat(start_money);
  // var interest = (money * (30/ 365 )) * interestRate;
  // (เงินต้น x (จำนวนวันที่ฝาก/ 365 )) x อัตราดอกเบี้ย

  var amount_day = [-1, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  var start_d = $("#start_dayC").val();
  var start_m = $("#start_monthC").val();
  var start_y = $("#start_yearC").val();
  var now = new Date();
  var end_d = now.getDate();
  var end_m = now.getMonth() + 1;
  var end_y = now.getFullYear() + 543;

  // console.log(end_d);
  // console.log(end_m);
  // console.log(end_y);
  //เช็คปีอธิกสุรทิน
  amount_day[2] = checkLeapYear(start_y);
  var day = start_d,
    month = start_m,
    year = start_y,
    sum = 0,
    total_month = 0,
    interest = 0;

  //   while (day != end_d || month != end_m || year != end_y) {
  //     day++;
  //     sum++;
  //     if(start_d == day){
  //       interest = total_money * (30 / 365) * (interestRate / 100);
  //       total_interest = total_interest + interest;
  //       total_money = total_money + start_money ;
  //       console.log("interest : "+interest);
  //       console.log("total interest : "+total_interest);
  //       console.log("money : "+total_money);
  //       total_month++;
  //       //ผ่านไป 1 เดือน
  //       if(total_month == 24){
  //         break;
  //       }
  //     }
  //     if (day > amount_day[month]) {
  //       day = 1;
  //       month++;
  //     }
  //     if (month == 13) {
  //       month = 1;
  //       year++;
  //       amount_day[2] = checkLeapYear(year);
  //     }
  //   }
  // console.log(total_interest);
  // console.log(total_money);

  for (var i = 1; i < 24; i++) {
    interest = total_money * (30 / 365) * (interestRate / 100);
    total_interest = total_interest + interest;
    total_money = total_money + start_money;
    if(i==1){
      total_interest = total_interest + interest * 2.5;
    }
  }

  console.log("total interest : " + total_interest);
  console.log("money : " + total_money);
}

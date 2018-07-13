function InterestRateCondition() {
    
  // var index = data.indexOf("*");
  // var interest = data.substring(0, index);

  // var int = "3.123000%";
  // var dot = int.indexOf(".");
  // var indexA = int.indexOf("0");
  // var indexN = int.indexOf("%");
  // var num = int.substring(0,indexN);

  // // console.log(num);
  //  var data = (parseInt(num).toFixed(indexA-dot));
  
  //  console.log(data);

  var min = "2.3100%";
  var max = "2.300%";

  var indexMin = min.indexOf("%");
  var indexMax = max.indexOf("%");


  min = min.substring(0,indexMin);
  max = max.substring(0,indexMax);


  if(min == max)
  {
    min = parseFloat(min).toFixed(2);
    console.log(min);
    return min;
  }
  else {
    min = parseFloat(min).toFixed(2);
    max = parseFloat(max).toFixed(2);
    console.log(min);
    console.log(max);
    return min+" - "+max;
  } 
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

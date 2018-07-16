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

function showInterest(){
  
}
function addCommas(nStr) {
  nStr += "";
  x = nStr.split(".");
  x1 = x[0];
  x2 = x.length > 1 ? "." + x[1] : "";
  var rgx = /(\d+)(\d{3})/;
  while (rgx.test(x1)) {
    x1 = x1.replace(rgx, "$1" + "," + "$2");
  }
  return x1 + x2;
}

function chkNum(ele) {
  var num = parseFloat(ele.value);
  ele.value = addCommas(num.toFixed(2));
}

function addFixed(ele) {
  var num = parseFloat(ele.value);
  ele.value = num.toFixed(2);
}

function CheckNum(event) {
  if (
    $.inArray(event.keyCode, [46, 8, 9, 27, 13, 190]) !== -1 ||
    // Allow: Ctrl+A
    (event.keyCode == 65 && event.ctrlKey === true) ||
    // Allow: home, end, left, right
    (event.keyCode >= 35 && event.keyCode <= 39)
  ) {
    // let it happen, don't do anything
    return;
  } else {
    // Ensure that it is a number and stop the keypress
    if (
      event.shiftKey ||
      ((event.keyCode < 48 || event.keyCode > 57) &&
        (event.keyCode < 96 || event.keyCode > 105))
    ) {
      event.preventDefault();
    }
  }
}

function Comma(ele){
  var num = parseFloat(ele.value);
  ele.value = addCommas(num.toFixed(0));
}
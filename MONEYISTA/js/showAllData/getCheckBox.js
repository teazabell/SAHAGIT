function getCheckBox() {
  $("#myModal")
    .modal("hide")
    .data("bs.modal", null); //Close bootstrap modal after submit
  var val = [];
  $(":checkbox:checked").each(function(i) {
    val[i] = $(this).val();
  });
  hideShow(val);
}

function hideShow(val) {
  $(".tr").hide();
  $.each(val, function(index, item) {
    if(item == "1-2"){
        $("#n1").show();
        $("#n2").show();
    }
    $("#n" + item).show();
  });
}


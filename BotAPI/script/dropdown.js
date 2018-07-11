$(document).ready(function() {
  $fiName = $("select[name='fiName']");
  $account = $("select[name='account']");

  $fiName.change(function() {
    if ($(this).val() == "Sales") {
      $("select[name='account'] option").remove();
      $("<option>John Smith</option>").appendTo($cname);
      $("<option>Marry Jones</option>").appendTo($cname);
    }

    if ($(this).val() == "Support") {
      $("select[name='cname'] option").remove();
      $("<option>Jessy McBeth</option>").appendTo($cname);
      $("<option>Bob Smith</option>").appendTo($cname);
    }

    if ($(this).val() == "Department") {
      $("select[name='cname'] option").remove();
      $("<option>Contact name</option>").appendTo($cname);
    }
  });
});

function typeAccount(){

    $("#panel-body").css("height", "450px");
    $(".divacspe").hide();
    var type = $("#menuAccount").val();
    if(type == 2 || type == 4 || type == 7){
        $("#panel-body").css("height", "700px");
        $(".divacspe").show();
    }
}
function popup(){
    $(".divpopup").dialog({
        title: "my popup",
        width: 430,
        height: 200,
        modal: true,
        buttons: {
            Close:
            function(){
                $(this).dialog('close');
            }
        }
    })
}
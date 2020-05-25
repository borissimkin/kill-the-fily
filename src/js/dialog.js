$(function() {
    $( "#write_result" ).dialog({
        buttons: [{text: "OK", click: writeResult}],
        modal: true,
        autoOpen: false,
        resizable:false,
        open: function () {
            $('#content_holder').html(`Ваш лучший результат ${endTime} для ${selectedNumberFlies} мух!`)
            $('#nick').val(username)
        }
    });

    $("#rules_dialog").dialog({
        buttons: [{text: "OK", click: function () {
                $( this ).dialog( "close" );
            }}],
        modal: true,
        autoOpen: false,
        resizable:false
    });

    $("#about_dialog").dialog({
        buttons: [{text: "OK", click: function () {
                $( this ).dialog( "close" );
            }}],
        modal: true,
        autoOpen: false,
        resizable:false
    });

    $("#records_dialog").dialog({
        buttons: [{text: "OK", click: function () {
                $( this ).dialog( "close" );
            }}, {text: "Очистить результаты", click: function () {
                 clearRecords();
                 $('.table_records').html(`<p>Нет рекордов</p>`);

            }}],
        modal: true,
        autoOpen: false,
        resizable:false,
        open: function () {
            $('.table_records').html(`<p>ФЦВ</p>`);
        }
    })


});
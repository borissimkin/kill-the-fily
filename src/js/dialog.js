

// $('.write_result').dialog({
//         title: "NOTE",
//         buttons: [{text: "OK", click: writeResult}],
//         modal: true,
//         autoOpen: false,
//         width: 340,
//
//         open: function () {
//             $('#contentholder').val('ТЫ ВЫИГРАЛ ВСЕХ МУХ')
//         }
// })

$(function() {
    $( "#write_result" ).dialog({
        buttons: [{text: "OK", click: writeResult}],
        modal: true,
        autoOpen: false,
        resizable:false,
        open: function () {
            $('#content_holder').html(`Ваш лучший результат ${endTime} для ${selectedNumberFlies} мух!`)
        }
    });

});
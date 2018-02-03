var socket = io();
$(function () {
    var button=$('#send');
    var message=$('#message')
    var handle=$('#handle')
    var list=$('#output');

    button.click(function () {
        socket.emit('msg',{
            mes:message.val(),
            Name:handle.val()
        })


    })

    socket.on('msg2', function (data) {
        list.append(`<p><strong>${data.Name}</strong> : ${data.mes}</p>`)
    })

})
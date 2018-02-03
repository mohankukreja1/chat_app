var socket = io();
$(function () {
    var button=$('#send');
    var message=$('#message')
    var handle=$('#handle')
    var list=$('#output');
    var feedback=$('#feedback')

    button.click(function () {

        socket.emit('msg',{
            mes:message.val(),
            Name:handle.val()
        })


    })
    message.keydown(function () {
        socket.emit('key',{
            handle:handle.val()
        })
    })
    
    socket.on('typing',function (data) {
        feedback.html(`<p><em>${data.handle} is typing ....</em></p>`);
    })

    socket.on('msg2', function (data) {
        feedback.html("");
        list.append(`<p><strong>${data.Name}</strong> : ${data.mes}</p>`)
    })

})
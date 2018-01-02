$(document).ready(function() {

    var $xhr = $.getJSON('http://localhost:3000/test');
    $xhr.done(function(data) {
        if ($xhr.status !== 200) {
            return;
        }
        console.log(data)
        for(let i in data){
            //console.log(data[i])
            $('#messages').append(`
            <i>${data[i].id}</i>
            <i>${data[i].name}</i>
            <i>${data[i].message}</i>
            <br/>
            <br/>
            `) 
        }
    })
    //Post
    $('#submit').click(function(){
        event.preventDefault();
        let id = $('#id').val()
        let name = $('#name').val()
        let message = $('#message').val()
        let obj = {
            name:name,
            message:message
        }
        $.ajax({
            url: `/test`,
            type:`POST`,
            data: obj,
            success:function (data) {
                window.location.reload(true);
            }
        })
    })
    //Patch
    $('#update').click(function(){
        event.preventDefault();
        let id = $('#id').val()
        let name = $('#name').val()
        let message = $('#message').val()
        let obj = {
            id:id,
            name:name,
            message:message
        }
        $.ajax({
            url: `/test/${id}`,
            type:`PATCH`,
            data: obj,
            success:function (data) {
                window.location.reload(true);
            }
        })
    })
    //Delete
    $('#delete').click(function(){
        event.preventDefault();
        let id = $('#id').val()
        let name = $('#name').val()
        let message = $('#message').val()
        let obj = {
            id:id,
            name:name,
            message:message,
        }
        console.log('DELETE',obj)
        $.ajax({
            url: `/test/${id}`,
            type:`DELETE`,
            data: obj,
            success:function (data) {
                window.location.reload(true);
            }
        })
    })
})
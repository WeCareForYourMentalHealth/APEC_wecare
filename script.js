 function SendMail(){
    var params = {
        from_name : document.getElementById("name").value,
        email_id : document.getElementById("email").value,
        subject_message : document.getElementById("Subject").value,
        message : document.getElementById("message").value,
    }
    emailjs.send("service_6flsvww", "template_o0e3f44", params).then(function (res) {
        alert("Message Sent Succesfully! ");
    })
 }
function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
}
$('#submitbutton').click(function(){
    var errorMessage="";
    var fieldsmissing="";
    if($('#email').val()=="")
    {
        fieldsmissing +="<br>Email"
    }
    if($('#phone').val()=="")
    {
        fieldsmissing +="<br>Telephone"
    }
    if($('#password').val()=="")
    {
        fieldsmissing +="<br>password"
    }
    if($('#passwprdConfirm').val()=="")
    {
        fieldsmissing +="<br>passwordConfirm"
    }
    if(fieldsmissing!="")
    {
        errorMessage +="<p>The missing fields are :" + fieldsmissing;
    }

    if(isEmail($('#email').val())==false){
        errorMessage +="<p>the email is not valid</p>"
    }
    if($.isNumeric($('#phone').val())==false){
        errorMessage +="<p>the phone no is not valid</p>"
    }
    if($('#password').val()!=$('#passwordConfirm').val())
    {
        errorMessage +="<p>the password do not match</p>"
    }
    if(errorMessage!=""){
    $('#error-message').html(errorMessage);
    }
    else
    {
        $('#success-message').show();
        $('#error-message').css("display","none");
    }

});
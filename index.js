function submitForm(){

    var formName = document.getElementById("inputName").value;
    var formEmail = document.getElementById("inputEmail").value;
    var formSubject = document.getElementById("inputSubject").value;

    if(formName == ""){
        $("#form-name").css("display","block")
    }else{
        $("#form-name").css("display","none")
    }

    if(formEmail == ""){
        $("#form-email").css("display","block")
    }else{
        $("#form-email").css("display","none")
    }

    if(formSubject == ""){
        $("#form-subject").css("display","block")
    }else{
        $("#form-subject").css("display","none")
    }
}
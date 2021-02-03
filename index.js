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

// EVENT WILL START IN SECTION

setInterval(showSecond,1000); 
setInterval(showMinute,1000); 
setInterval(showHour,1000); 
setInterval(showDay,1000); 


function showSecond(){
  var time = new Date();
  var sec = time.getSeconds();
  var main_sec=(59-sec);
  main_sec = main_sec < 10 ? "0"+main_sec : main_sec; 
  document.getElementById("clock-second").innerHTML = main_sec; 
}


function showMinute(){
  var time = new Date();
  var min = time.getMinutes(); 
  var main_min=(59-min);
  main_min = main_min < 10 ? "0"+main_min : main_min; 
  document.getElementById("clock-minute").innerHTML =main_min; 
}

function showHour() { 
  var time = new Date();
    var day=time.getDay()
    var hour = time.getHours();
    var main_hr=(23-hour);
    main_hr= main_hr < 10 ? "0"+main_hr : main_hr; 
    document.getElementById("clock-hour").innerHTML = main_hr; 
} 

function showDay(){
    var time = new Date();
    var day=time.getDay();
    var day=(279+day)
    
  document.getElementById("clock-day").innerHTML = day; 
}


//  EVEN SCHEDULES

$("#event1").click(function(){
  $(".schedule-event-discription1").slideToggle();
  $(".schedule-event-discription2").slideUp();
  $(".schedule-event-discription3").slideUp();
})

$("#event2").click(function(){
  $(".schedule-event-discription1").slideUp();
  $(".schedule-event-discription2").slideToggle();
  $(".schedule-event-discription3").slideUp();
})

$("#event3").click(function(){
  $(".schedule-event-discription1").slideUp();
  $(".schedule-event-discription2").slideUp();
  $(".schedule-event-discription3").slideToggle();
})
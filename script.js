function showTime(){
    let time=new Date();
    let hour=time.getHours();
    let min=time.getMinutes();
    let sec=time.getSeconds();
    var am_pm="AM"



    hour = (hour < 10) ? "0" + hour : hour;
    min = (min < 10) ? "0" + min : min;
    sec = (sec < 10) ? "0" + sec : sec;


    
   if(hour==12 && am_pm=="AM" ){
     am_pm="PM";
   }
   else if(hour==0){
    hour=12;
  }
    if(hour>12){
        hour-=12;
        am_pm="PM";
    }

   
     document.getElementById("Hours").innerHTML=hour;
     document.getElementById("Min").innerHTML=min;
     document.getElementById("Sec").innerHTML=sec;
     document.getElementById("AM").innerHTML=am_pm;

    setInterval(showTime,1000);
}
showTime();
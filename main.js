function showtime(){

    var date = new Date();
    var houres = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    

    if(houres > 12){
        houres = houres - 12;
    }

    
    houres = (houres < 10) ? "0" + houres : houres;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;





    var time = houres + ":" + minutes + ":" + seconds ;
    document.getElementById("myClock").innerHTML =  time;
    setTimeout(showtime,1000);

}
showtime();



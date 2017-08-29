
        function myFunction() {
    var message, x;
    message = document.getElementById("message");
    message.innerHTML = "";
    x = document.getElementById("firstinput").value;
    try { 
        if(x == "")  throw "empty";
        if(isNaN(x)) throw "not a number";
       
    }
    catch(err) {
        message.innerHTML = "Input is " + err;
    }
}


  
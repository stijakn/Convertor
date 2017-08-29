

$.ajax({
    type: "GET",
    url: window.location.href+"fetchJsonFile",
    success: function (result) { 
        if(result != "OK") {
            alert("Something went wrong with fetching json!")
        }
    }
});

function parseJson(param1) {
    var request = new XMLHttpRequest();
    request.open("GET", "./file.json", true);
    request.send(null);
    request.onreadystatechange = function() {
      if ( request.readyState === 4 && request.status === 200 ) {
        var parsedJSON = JSON.parse(request.responseText);
        var factor = 1;
        valuta1 = document.getElementById('from').value.toLowerCase();
        if(valuta1 != "") {
            valuta2 = document.getElementById('to').value.toLowerCase();
            if(valuta1 == 'rsd') {
                factor = 1/parsedJSON.result[valuta2]['sre'];
            } else if(valuta2 == 'rsd') {
                factor = parsedJSON.result[valuta1]['sre'];
            } else {
                factor = parsedJSON.result[valuta1]['sre']/parsedJSON.result[valuta2]['sre'];
            }
        }


        if(param1 == "C"){
            document.getElementById('secondinput').value = toFixedIfNecessary(document.getElementById('firstinput').value * factor, 2);
        }
        else if(param1 == "F"){
            document.getElementById('firstinput').value = toFixedIfNecessary(document.getElementById('secondinput').value * factor, 2);
        }
      }
    }
}

function toFixedIfNecessary(value, dp) {
  return +parseFloat(value).toFixed( dp );
}
        

    function convert(param1){
        parseJson(param1);

    // var factor = 1;  
    // f = document.getElementById('from').value;
    // t = document.getElementById('to').value;

   
    // if(f == t){
    //     factor = 1
    // }
        
    // else if(f == 'EUR' && t == 'RSD'){
    //     factor = parseJson('eur', 'rsd');
    //     alert("ACO: "+parseJson('eur', 'rsd'));
    //     //factor = 119.3934;
    // }
    
    // else if(f == 'RSD' && t == 'EUR'){
    //     factor = 1/119.3934;
    // }
        
    //     if(f == t){
    //     factor = 1
    // }
    // else if(f == 'USD' && t == 'RSD'){
    //     factor = 101.5077;
    // }
    
    // else if(f == 'RSD' && t == 'USD'){
    //     factor = 1/101.5077;
    // }
        
    //     if(f == t){
    //     factor = 1
    // }
    // else if(f == 'EUR' && t == 'USD'){
    //     factor = 1.17;
    // }
    
    // else if(f == 'USD' && t == 'EUR'){
    //     factor = 1/1.17;
    // }  

    // if(param1 == "C"){
    //     document.getElementById('secondinput').value = document.getElementById('firstinput').value * factor
    // }
    // else if(param1 == "F"){
    //     document.getElementById('firstinput').value = document.getElementById('secondinput').value * factor
    // }
 
}


    
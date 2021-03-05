/*window.onload= function(){

    var Details = document.querySelector("#Details");
    Details.addEventListener("click" , function(){

        var newNode= document.createElement("p");
        newNode.innerHTML = "Ətraflı məlumat üçün aşağı istiqamətdə hərəkət edin!";
        newNode.setAttribute("id" , "myNode");
    
        var myArray= document.getElementsByTagName("p");
        myArray[0].insertBefore(newNode, myArray[0].firstElementChild);

    });
  
}  */

var details = document.querySelector("#details");
var button = document.getElementById("button");

button.addEventListener ('click', accordion);

function accordion(){
    content = this.nextSibling.nextSibling;

    if(content.style.display != "block"){
        content.style.display= "block";
    } else{
        content.style.display= "none";
    }
}



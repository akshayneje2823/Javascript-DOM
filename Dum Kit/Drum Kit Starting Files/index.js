var noOfbuttons = document.querySelectorAll(".drum").length

for(var i=0; i<noOfbuttons; i++){
    document.querySelectorAll('.drum')[i].addEventListener("click",function (){
        alert("i got clicked")
    });
    

}




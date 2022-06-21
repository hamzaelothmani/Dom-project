var ree = document.querySelectorAll('#plus')
var tee = document.querySelectorAll("#minus")
var yee =  document.querySelectorAll("#reset")
var uee = document.querySelectorAll(".counter")
var lee = document.querySelectorAll(".counte")
var oee = document.querySelectorAll("#btnh1")
var kee = document.querySelector("#total")
ree[0].addEventListener("click", myFun)
tee[0].addEventListener("click", myDee)
yee[0].addEventListener("click", myFee)
ree[1].addEventListener("click", myRee)
tee[1].addEventListener("click", myPee)
yee[1].addEventListener("click", myMee)
oee[0].addEventListener("click", heart)
ree[0].addEventListener("click", total)
tee[0].addEventListener("click", total)
oee[1].addEventListener("click", like)
ree[1].addEventListener("click", total)
tee[1].addEventListener("click", total)

let count = 0;
let text = 0;
function myFun(){
  if(oee[0].style.color == "red" && count < 10){
    count +=1
  }
  uee[0].innerHTML = count
  kee.innerHTML = count *500 + text*300 + " DH"
}
function myDee(){
  if(oee[0].style.color = "gray" && count >= 1 ){
    count -=1
  }
  uee[0].innerHTML = count
  kee.innerHTML = count *500 + text*300 + " DH"
}
function myFee(){
count = 0
uee[0].innerHTML = count
kee.innerHTML = "0"
}

function heart() {
  if (oee[0].style.color == "red") {
    oee[0].style.color = "gray";
    
  } else {
    oee[0].style.color = "red";
  }
}

//                                        **THE SECOND**
function myRee(){
  if(oee[1].style.color == "red" && text < 10){
    text +=1
  }
  uee[1].innerHTML = text
  kee.innerHTML = text *300 + count*500 +" DH"
  }
  function myPee(){
    if(oee[1].style.color = "gray" && text >= 1 ){
      text -=1
    }
    uee[1].innerHTML = text
    kee.innerHTML = text *300 + count*500 + " DH"
  }
  function myMee(){
  text = 0
  uee[1].innerHTML = text
  kee.innerHTML =  "0"
  
  }
  function like() {
    if (oee[1].style.color == "red") {
      oee[1].style.color = "gray";
      
    } else {
      oee[1].style.color = "red";
    }
  }
  

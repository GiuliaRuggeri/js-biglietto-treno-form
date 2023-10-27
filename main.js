const button1= document.querySelector("#button1");
let nameSurname;
let distance;
let age;
const kmPrice=0.21;
let discount;
let ticketName=document.querySelector("#ticketname")
let offerType=document.querySelector("#offertype")
let wagonNumber=document.querySelector("#wagonnumber")
let cpCode=document.querySelector("#cpcode")
let ticketPrice=document.querySelector("#ticketprice")






button1.addEventListener('click', function(){
    button1.classList.add("borderbutton")
  nameSurname=document.querySelector("#namesurname").value;
  distance=parseInt(document.querySelector("#distance").value);
  age=document.querySelector("#age").value;
  
  if (Number.isFinite(distance)){
    price= distance * kmPrice;

  } else{
    alert("I dati inseriti non sono corretti")
  }

  if(age=="minorenne"){
    discount= (price * 20) / 100;
    offerType.innerHTML="Biglietto Minorenne"
    }
    else if(age=="over65"){
    discount= (price *40) / 100;
    offerType.innerHTML="Biglietto over65"
    }
    else if(age!="minorenne" || age!="over65"){
    discount = 0;
    offerType.innerHTML="Biglietto Standard"
    }

    wagonNumber.innerHTML=Math.floor(Math.random()*100);
    cpCode.innerHTML=Math.floor(Math.random()*100);
    ticketName.innerHTML= nameSurname;
    ticketPrice.innerHTML= parseFloat(price-discount).toFixed(2) + "€";

    console.log(discount)
}
)
const isimText=document.getElementById("myName");
const clock=document.getElementById("myClock");

let isim= prompt("İsminiz:")

isimText.textContent=isim?isim:"Ziyaretçi";

function render(){
    const date = new Date();
    console.log(date.toLocaleTimeString())
    const gunler = [
      "Pazar",
      "Pazartesi",
      "Salı",
      "Çarşamba",
      "Perşembe",
      "Cuma",
      "Cumartesi",
    ];
    let day=gunler[date.getDay()]
    clock.textContent = `${date.toLocaleTimeString()}, ${day}`;
}

render();
setInterval(render, 1000)
  







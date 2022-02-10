const isimText=document.getElementById("myName");
const clock=document.getElementById("myClock");

let isim= prompt("İsminiz:")

isimText.textContent=isim?isim:"Ziyaretçi";

function render(){
    const date = new Date();
    const gunler = [
      "Pazartesi",
      "Salı",
      "Çarşamba",
      "Perşembe",
      "Cuma",
      "Cumartesi",
      "Pazar",
    ];
    const [hour, minutes, seconds, day] = [
      date.getHours(),
      date.getMinutes(),
      date.getSeconds(),
      gunler[date.getDay() - 1],
    ];
    clock.textContent = `${hour}:${minutes}:${seconds}, ${day}`;
}

function renderDate() {
    setInterval(()=>{console.log("adsds");
    render()

    }, 1000)
  
}

window.addEventListener("load", renderDate)




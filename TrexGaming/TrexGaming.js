const trex = document.getElementById("trex");
const cactus = document.getElementById("cactus");

document.addEventListener('keydown',function(event){
    if (event.code==='Space') {
         zipla();
    }
})

function zipla(){      
    if (cactus.classList!="cactus-animate") {
        cactus.classList.add("cactus-animate");
    }
     
   if (trex.classList!="trex-animate") {  // bir bir zıplamaması için
    trex.classList.add("trex-animate"); 
    setTimeout(function() {                   // tekrar tekrar zıplaması için eklemzesek sade bir kere zıplar, döngü gibi düşünebiliriz
        trex.classList.remove("trex-animate");
    },500) 
   }      
 
  var carpisma = setInterval(function(){
        var trexBottom = parseInt(window.getComputedStyle(trex).getPropertyValue("bottom"));  //Bu metot, belirtilen bir HTML öğesinin CSS hesaplanmış stilini döndürür. 
        var cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));  

        if (cactusLeft > 0 && cactusLeft < 30 && trexBottom < 40) { // Solunda 30 ile 0 arasında ve yükseklik 40 geçmesin diye değer verdik
            cactus.classList.remove("cactus-animate");
            alert("Oyun Bitti !!");
        }

  },10)  
   
}
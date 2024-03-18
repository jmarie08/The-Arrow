let enter = document.querySelector("button");
let greenorblack = document.querySelector(".greenorblack");
let favoritenumber = document.querySelector(".favoritenumber");
let h2 = document.querySelector("h2");
let green = ("green");
let black = ("black");
let disappear = document.querySelector(".disappear");
let info = document.querySelector(".info");

// img
let saraandoliver = document.querySelector(".saraandoliver");
let saralance = document.querySelector(".saralance");
let oliverqueen = document.querySelector(".oliverqueen");
let theaqueen = document.querySelector(".theaqueen");
let laurellance = document.querySelector(".laurellance");

enter.addEventListener("click", function() {
    let greenorblack = document.querySelector(".greenorblack").value;
    let favoritenumber = document.querySelector(".favoritenumber").value;

    // let message = document.querySelector(".message");


if (greenorblack === black && favoritenumber <= 50){
 h2.innerHTML="You are The Canary";
 info.innerHTML="The Canary, Sara Lance is the younger sister of Laurel Lance and daughter of Quentin Lance. She's also an on-and-off love interest of Oliver Queen, even when Ollie was dating Laurel. She is thought to have died when the Queen's Gambit sunk, but is discovered alive in the same area as Oliver.";
 saraandoliver.style.display="none";
 saralance.style.display="block";
disappear.style.display="none";
}

if (greenorblack === green && favoritenumber >= 51){
    h2.innerHTML="You are The Green Arrow";
    info.innerHTML="Spoiled billionaire playboy Oliver Queen is missing and presumed dead when his yacht is lost at sea. He returns five years later a changed man, determined to clean up the city as a hooded vigilante armed with a bow."
    saraandoliver.style.display="none";
    oliverqueen.style.display="block";
    disappear.style.display="none";
   }
   if (greenorblack === green && favoritenumber <= 50){
    h2.innerHTML="You are Thea Queen";
     info.innerHTML="Thea Dearden Queen is the daughter of the late Malcolm Merlyn and Moira Queen, the adoptive daughter of the late Robert Queen (though treated unquestionably as his daughter throughout his life), the younger maternal half-sister of the late Oliver Queen, the younger paternal half-sister of Tommy Merlyn and Saracon, the adoptive sister of Emiko Adachi, the fiancée of Roy Harper, and the paternal aunt of William Clayton and Mia Queen.";
    saraandoliver.style.display="none";
    theaqueen.style.display="block"; 
    disappear.style.display="none";
   }
   if (greenorblack === black && favoritenumber >= 50){
    h2.innerHTML="You are Laurel Lance";
    saraandoliver.style.display="none";
   laurellance.style.display="block"; 
    disappear.style.display="none";
   }
   















});
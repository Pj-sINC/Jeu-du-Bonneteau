console.log("Chargement du JavaScript");

function flip(teventhis){
    let element = event.currentTarget;
    if (element.className === "card"){
        if(element.style.transform == "rotateY(180deg)"){
            element.style.transform = "rotateY(0deg)";
        }
        else {
            element.style.transform = "rotateY(180deg)"
        }
    }
}
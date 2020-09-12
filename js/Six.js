const exitcross = document.getElementById("exitcross")

const popupMenupausal = document.getElementById("popup-menupausal");
const otherCheck = document.getElementById("other-check");
const femaleChecked = document.getElementById("female-check")


otherCheck.addEventListener('click',()=>{
    popupMenupausal.style.display = "none"
})


femaleChecked.addEventListener('click',(event)=>{
    if(popupMenupausal.style.display == "none"){
        popupMenupausal.style.display = "block"
    }
    
})

exitcross.addEventListener('click',(event)=>{
    popupMenupausal.style.display = "none"
})
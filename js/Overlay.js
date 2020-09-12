const question = document.getElementById("question")
const modalWindow = document.getElementById("custom-modal")
const overLay = document.getElementById("custom-overlay")
const closeOverlay = document.getElementById("close-overlay")

question.addEventListener("click",()=>{
    modalWindow.style.display = "block";
    overLay.style.display = "block";
})

closeOverlay.addEventListener("click",()=>{
    modalWindow.style.display = "none";
    overLay.style.display = "none";
})

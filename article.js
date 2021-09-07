const share = document.querySelectorAll(".share")
const active = document.querySelectorAll(".active")
const inactive = document.querySelectorAll(".inactive")
const row = document.querySelector(".row")
const row2 = document.querySelector(".row2")
const shareImg = document.querySelector(".share-img")
const pushUp = document.querySelector(".push-up")
let shareStatus = false
for (let i = 0; i < share.length; i++){

share[i].addEventListener("click", function () {
    if (shareStatus === false){
    
    for (let i = 0; i < active.length; i++){
        active[i].style.display = "inline"
    }
    for (let i = 0; i < inactive.length; i++) {
        inactive[i].style.display = "none"
    }
    row.style.background = "hsl(217, 19%, 35%)"
    row.style.padding = "1em 3em"
    shareStatus = true
    pushUp.style.padding = "0.3em 1em"
}
else if (shareStatus === true) {
    for (let i = 0; i < active.length; i++){
        active[i].style.display = "none"
    }
    for (let i = 0; i < inactive.length; i++) {
        inactive[i].style.display = "block"
    }
    pushUp.style.padding = "0 1em"
    row.style.background = "white"
    row.style.padding = "1em 3em"
    shareStatus = false
}   
})

}
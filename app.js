const burgerBtn = document.querySelector(".burger-btn")
const leftArrow = document.querySelector(".left-arrow")
const leftNav = document.querySelector(".leftnav")


burgerBtn.addEventListener("click", function() {
    leftNav.classList.add("leftnav-hidden")
})

leftArrow.addEventListener("click", function() {
    leftNav.classList.remove("leftnav-hidden")
})
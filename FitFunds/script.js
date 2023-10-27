// ------------------------------------MOBILE SIDEBAR------------------------------------------- //
// Get the menu and sidebar elements
const menu = document.getElementById("menu");
const sidebar = document.querySelector(".sidebar");
const xButton = document.querySelector(".xButton");
const blackBG = document.querySelector(".blackBG");
const navbarSelector = document.getElementById("navbarSelector")

// Add event listener to the menu
menu.addEventListener("click", () => {
    sidebar.classList.add("sidebarShow");
    blackBG.classList.add("blackBGShow")
});

// Add event listener to the xButton
xButton.addEventListener("click", () => {
    sidebar.classList.remove("sidebarShow");
    blackBG.classList.remove("blackBGShow");
}); 

blackBG.addEventListener("click", () => {
    sidebar.classList.remove("sidebarShow");
    blackBG.classList.remove("blackBGShow")
})
function homeHover() {
    navbarSelector.classList.add("moveOne")
}
function homeHoverLeave() {
    navbarSelector.classList.remove("moveOne")
}
function faqHover() {
    navbarSelector.classList.add("moveTwo")
}

function faqHoverLeave() {
    navbarSelector.classList.remove("moveTwo")
}

function downloadHover() {
    navbarSelector.classList.add("moveThree")
}
function downloadHoverLeave() {
    navbarSelector.classList.remove("moveThree")
}
function accountHover() {
    navbarSelector.classList.add("moveFour")
}
function accountHoverLeave() {
    navbarSelector.classList.remove("moveFour")
}
// --------------------------------------- SIDEBAR MENU -------------------- //
// Get divs //
let index = document.getElementById("index")
let faq = document.getElementById("faq")
let download = document.getElementById("download")
let accountCancellation = document.getElementById("accountCancellation")
let sidebarMenusSelector = document.getElementById("sidebarMenusSelector")

// Img ids //
let indexImg = document.getElementById("indexImg")
let faqImg = document.getElementById("faqImg")
let downloadImg = document.getElementById("downloadImg")
let accountCancellationImg = document.getElementById("accountCancellationImg")

// Active images //
let indexActive = "images/cebian_ico1@3x.webp"  
let faqActive = "images/cebian_ico2@3x_active.webp"
let downloadActive = "images/cebian_ico3@3x_active.webp"
let accountCancellationActive = "images/cancel_account_icon_active.webp"

// Inactive images // 
let indexInactive = "images/cebian_ico1@3x_inactive.webp"
let faqInactive = "images/cebian_ico2@3x.webp"
let downloadInactive = "images/cebian_ico3@3x.webp"
let accountCancellationInactive = "images/cancel_account_icon.webp"

// Sidebar Selector styles 
let indexSelector = "sidebarMenusSelectorIndex"
let faqSelector = "sidebarMenusSelectorFaq"
let downloadSelector = "sidebarMenusSelectorDownload"
let accountCancellationSelector = "sidebarMenusSelectorAccountCancellation"



function indexClick() {
    index.classList.add("active")
    faq.classList.remove("active")
    download.classList.remove("active")
    accountCancellation.classList.remove("active")

    indexImg.src = indexActive
    faqImg.src = faqInactive
    downloadImg.src = downloadInactive
    accountCancellationImg.src = accountCancellationInactive

    sidebarMenusSelector.classList.add(indexSelector)
    sidebarMenusSelector.classList.remove(faqSelector)
    sidebarMenusSelector.classList.remove(downloadSelector)
    sidebarMenusSelector.classList.remove(accountCancellationSelector)

    setTimeout(() => {
        window.location.href = "index.html"
    }, 300)
}

function faqClick() {
    index.classList.remove("active")
    faq.classList.add("active")
    download.classList.remove("active")
    accountCancellation.classList.remove("active")

    indexImg.src = indexInactive
    faqImg.src = faqActive
    downloadImg.src = downloadInactive
    accountCancellationImg.src = accountCancellationInactive

    sidebarMenusSelector.classList.remove(indexSelector)
    sidebarMenusSelector.classList.add(faqSelector)
    sidebarMenusSelector.classList.remove(downloadSelector)
    sidebarMenusSelector.classList.remove(accountCancellationSelector)

    setTimeout(() => {
        window.location.href = "faq.html"
    }, 300)
}

function downloadClick() {
    index.classList.remove("active")
    faq.classList.remove("active")
    download.classList.add("active")
    accountCancellation.classList.remove("active")

    indexImg.src = indexInactive
    faqImg.src = faqInactive
    downloadImg.src = downloadActive
    accountCancellationImg.src = accountCancellationInactive

    sidebarMenusSelector.classList.remove(indexSelector)
    sidebarMenusSelector.classList.remove(faqSelector)
    sidebarMenusSelector.classList.add(downloadSelector)
    sidebarMenusSelector.classList.remove(accountCancellationSelector)

    setTimeout(() => {
        window.location.href = "download.html"
    }, 300)
}

function accountCancellationClick() {
    
    index.classList.remove("active")
    faq.classList.remove("active")
    download.classList.remove("active")
    accountCancellation.classList.add("active")

    indexImg.src = indexInactive
    faqImg.src = faqInactive
    downloadImg.src = downloadInactive
    accountCancellationImg.src = accountCancellationActive

    sidebarMenusSelector.classList.remove(indexSelector)
    sidebarMenusSelector.classList.remove(faqSelector)
    sidebarMenusSelector.classList.remove(downloadSelector)
    sidebarMenusSelector.classList.add(accountCancellationSelector)

    setTimeout(() => {
        window.location.href = "account_cancellation.html"
    }, 300)
}
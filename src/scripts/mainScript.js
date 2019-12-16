//check if doc is loaded
document.addEventListener('DOMContentLoaded', function () {
    let menuButton = document.getElementById("menu-button")
    let closeButton = document.getElementById("close-button")
    function openMenu() {
        document.getElementById("menu").style.width = "100%";
    };
    function closeMenu() {
        document.getElementById("menu").style.width = "0"
    }

    menuButton.addEventListener("click", openMenu)
    closeButton.addEventListener("click", closeMenu)


});
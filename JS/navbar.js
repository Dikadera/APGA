let navLinks = document.querySelector(".navlinks");
let showMenu = document.querySelector(".show-menu")
let hideMenu = document.querySelector(".exit-icon")

        showMenu.addEventListener("click", function() {
            navLinks.classList.add("display")
            showMenu.classList.add("hide")
            hideMenu.classList.remove("hide")
        })

        hideMenu.addEventListener("click", function(){
            navLinks.classList.remove("display")
            showMenu.classList.remove("hide")
            hideMenu.classList.add("hide")
        })
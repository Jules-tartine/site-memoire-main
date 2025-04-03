document.addEventListener("DOMContentLoaded", function(){
    const menuLinks = document.querySelectorAll("#menu-principal a");
    const pages = document.querySelectorAll(".page");

    menuLinks.forEach(link => {
        link.addEventListener("click", function(e){
            e.preventDefault();
            const targetPage = this.getAttribute("data-page");

            // Masquer toutes les pages
            pages.forEach(page => {
                page.classList.remove("active");
            });

            // Afficher la page cible
            const pageToShow = document.getElementById(targetPage);
            if(pageToShow) {
                pageToShow.classList.add("active");
            }
        });
    });

    const notes = document.querySelectorAll("sup");
    const aside = document.querySelector("aside");
    const ol = document.querySelector("aside ol");
    const li = document.querySelectorAll("aside li");
    notes.forEach(note => {
        note.addEventListener("mouseover", function(){
            const noteValue = this.textContent;
            const noteToShow = ol.querySelector(`li:nth-child(${noteValue})`);
            li.forEach(li => {
                li.classList.add("is-gris");
            });
            noteToShow.classList.remove("is-gris");
        });
        note.addEventListener("mouseout", function(){
            li.forEach(li => {
                li.classList.remove("is-gris");
            });
        });
    }); 
});


document.addEventListener("DOMContentLoaded", function() {
    const menuLinks = document.querySelectorAll("#menu-principal a");
    const pages = document.querySelectorAll(".page");
    const partTitles = document.querySelectorAll(".part-title");
    const parts = document.querySelectorAll(".part");

    // Gestion du menu principal (Changement de page)
    menuLinks.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const targetPage = this.getAttribute("data-page");

            // Masquer toutes les pages
            pages.forEach(page => page.classList.remove("active"));

            // Afficher la page cible
            const pageToShow = document.getElementById(targetPage);
            if (pageToShow) {
                pageToShow.classList.add("active");
            }
        });
    });

});

document.addEventListener("DOMContentLoaded", function() {
    const menu = document.getElementById("menu-principal");
    let lastScrollTop = window.scrollY;

    // Affiche le menu dès le début
    menu.classList.add("visible");

    window.addEventListener("scroll", function() {
        let scrollTop = window.scrollY;

        if (scrollTop < lastScrollTop) {
            // Si on remonte, on affiche le menu
            menu.classList.add("visible");
        } else {
            // Si on descend, on cache le menu
            menu.classList.remove("visible");
        }

        lastScrollTop = scrollTop;
    });
    });

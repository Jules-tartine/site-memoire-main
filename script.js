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
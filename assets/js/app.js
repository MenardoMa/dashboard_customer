
const parent = document.querySelector(".parent")

/**
 * 
 * Hamburgeur
 * 
 */
const showSidebarLeft = () => {
    
    const navHamb = document.querySelector(".nav-hamb")

    navHamb.addEventListener("click", (e) => {
        
        e.preventDefault()

        if(!parent.classList.contains("active")){
            parent.classList.add("active")
        }else{
            parent.classList.remove("active")
        }

    })

}

/**
 * 
 * Close sidebarLeft
 * 
 */
const closeSidebarLeftOverlyne = () => {
    
    const overlyne = document.querySelector(".overlyne")
    overlyne.addEventListener("click", (e) => {
        
        e.preventDefault()
        parent.classList.remove("active")

    })
}

/**
 * 
 * Close sidebarLeft
 * 
 */
const closeSidebarLeftBtn = () => {
    
    const btnClose = document.querySelector(".btn-close")
    btnClose.addEventListener("click", (e) => {
        
        e.preventDefault()
        parent.classList.remove("active")

    })
}


/**
 * 
 * Show Link sidebar accordion
 * 
 */
const showLinkAccordeon = () => {
    
    const accordionLinks = document.querySelectorAll(".accordion-link");

    accordionLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            
            e.preventDefault();
            e.stopPropagation();

            // Cherche l'élément actuellement actif
            const activeLink = document.querySelector(".accordion-link.active");

            // Si un élément est actif, on lui retire active
            if (activeLink) {
                activeLink.classList.remove("active");
            }

            // Si l'élément cliqué n'était pas l'ancien actif,
            // on lui ajoute active
            if (activeLink !== e.currentTarget) {
                e.currentTarget.classList.add("active");
            }
        });
    });
};


const showBrands = () => {
    
    const brandsLinks = document.querySelector(".brands-links")
    const menuDropBrands = document.querySelector(".menu-drop-brands")

    brandsLinks.addEventListener("click", (e) => {

        e.preventDefault()

        if(menuDropBrands.classList.contains("active")){
            menuDropBrands.classList.remove("active")
            brandsLinks.classList.remove("active")
        }else{
            menuDropBrands.classList.add("active")
            brandsLinks.classList.add("active")
        }

    })

}



showSidebarLeft()
showLinkAccordeon()
closeSidebarLeftOverlyne()
closeSidebarLeftBtn()

showBrands()
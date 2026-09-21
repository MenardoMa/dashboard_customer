
/**
 * ============================================================
 * VARIABLES DOM
 * ============================================================
 */

const parent = document.querySelector(".parent");

const navHamb = document.querySelector(".nav-hamb");
const btnClose = document.querySelector(".btn-close");
const btnCloseSidebarLeft = document.querySelector(".btn-closeSidebarLeft");

const overlyne = document.querySelector(".overlyne");
const sidebarRight = document.querySelector(".sidebarRight");
const settings = document.querySelector(".settings");

const accordionLinks = document.querySelectorAll(".accordion-link");

const brandsLinks = document.querySelector(".brands-links");
const menuDropBrands = document.querySelector(".menu-drop-brands");

const notificationLinks = document.querySelector(".notification-links");
const menuDropNotification = document.querySelector(".menu-drop-notification");

const user = document.querySelector(".items.user");
const menuDropUser = document.querySelector(".menu-drop-user");

const language = document.querySelector(".items.language");
const menuDropLanguage = document.querySelector(".menu-drop-language");


/**
 * ============================================================
 * UTILITAIRES
 * ============================================================
 */

/**
 * Ferme tous les dropdowns de la navbar.
 */
const closeNavbarDropdowns = () => {

    menuDropBrands?.classList.remove("active");
    brandsLinks?.classList.remove("active");

    menuDropNotification?.classList.remove("active");
    notificationLinks?.classList.remove("active");

    menuDropUser?.classList.remove("active");

    menuDropLanguage?.classList.remove("active");
    language?.classList.remove("active");
};


/**
 * ============================================================
 * SIDEBAR LEFT
 * ============================================================
 */

/**
 * Ouvre / ferme la sidebar gauche avec le hamburger.
 */
const showSidebarLeft = () => {

    navHamb?.addEventListener("click", (e) => {

        e.preventDefault();

        parent?.classList.toggle("active");

    });

};


/**
 * Ferme la sidebar gauche avec l'overlay.
 */
const closeSidebarLeftOverlyne = () => {

    overlyne?.addEventListener("click", (e) => {

        e.preventDefault();

        if (!sidebarRight?.classList.contains("active")) {
            parent?.classList.remove("active");
        }

        overlyne?.classList.remove("active");
        sidebarRight?.classList.remove("active");

    });

};


/**
 * Ferme les sidebars avec les boutons de fermeture.
 */
const closeSidebarLeftBtn = () => {

    btnClose?.addEventListener("click", (e) => {

        e.preventDefault();

        parent?.classList.remove("active");

    });


    btnCloseSidebarLeft?.addEventListener("click", (e) => {

        e.preventDefault();

        if (!sidebarRight?.classList.contains("active")) {
            parent?.classList.remove("active");
        }

        overlyne?.classList.remove("active");
        sidebarRight?.classList.remove("active");

    });

};


/**
 * ============================================================
 * ACCORDÉON
 * ============================================================
 */

const showLinkAccordeon = () => {

    accordionLinks.forEach((link) => {

        link.addEventListener("click", (e) => {

            e.preventDefault();
            e.stopPropagation();

            const activeLink = document.querySelector(
                ".accordion-link.active"
            );

            if (activeLink) {
                activeLink.classList.remove("active");
            }

            if (activeLink !== e.currentTarget) {
                e.currentTarget.classList.add("active");
            }

        });

    });

};


/**
 * ============================================================
 * MENU BRANDS
 * ============================================================
 */

const showBrands = () => {

    brandsLinks?.addEventListener("click", (e) => {

        e.preventDefault();

        const isActive = menuDropBrands?.classList.contains("active");

        closeNavbarDropdowns();

        if (!isActive) {

            menuDropBrands?.classList.add("active");
            brandsLinks?.classList.add("active");

        }

    });

};


/**
 * ============================================================
 * MENU NOTIFICATION
 * ============================================================
 */

const showNotification = () => {

    notificationLinks?.addEventListener("click", (e) => {

        e.preventDefault();

        const isActive =
            menuDropNotification?.classList.contains("active");

        closeNavbarDropdowns();

        if (!isActive) {

            menuDropNotification?.classList.add("active");
            notificationLinks?.classList.add("active");

        }

    });

};


/**
 * ============================================================
 * MENU USER
 * ============================================================
 */

const showNavbarUser = () => {

    user?.addEventListener("click", (e) => {

        e.preventDefault();

        const isActive = menuDropUser?.classList.contains("active");

        closeNavbarDropdowns();

        if (!isActive) {

            menuDropUser?.classList.add("active");

        }

    });

};


/**
 * ============================================================
 * MENU LANGUAGE
 * ============================================================
 */

const showNavBarLanguage = () => {

    language?.addEventListener("click", (e) => {

        e.preventDefault();

        const isActive =
            menuDropLanguage?.classList.contains("active");

        closeNavbarDropdowns();

        if (!isActive) {

            menuDropLanguage?.classList.add("active");
            language?.classList.add("active");

        }

    });

};


/**
 * ============================================================
 * SIDEBAR RIGHT
 * ============================================================
 */

const showSidebarRight = () => {

    settings?.addEventListener("click", (e) => {

        e.preventDefault();

        const isActive =
            sidebarRight?.classList.contains("active");

        closeNavbarDropdowns();

        if (isActive) {

            sidebarRight?.classList.remove("active");
            overlyne?.classList.remove("active");

        } else {

            sidebarRight?.classList.add("active");
            overlyne?.classList.add("active");

        }

    });

};


/**
 * ============================================================
 * INITIALISATION
 * ============================================================
 */

showSidebarLeft();

showLinkAccordeon();

closeSidebarLeftOverlyne();
closeSidebarLeftBtn();

showBrands();
showNotification();
showNavbarUser();
showNavBarLanguage();

showSidebarRight();
class MobileNavbar {
    constructor (mobileMenu, navList, navLinks) {
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";

    }

    addClickEvent() {
        this.mobileMenu.addEvenListener("click", () => con;
    }
    init() {
        if(this.mobileMenu) {
            this.addClickEvent();
        }
        return this;
    }
}

const mobileNavbar = new MobileNavbar(
    ".molibe-menu",
    ".nav-list",
    ".nav-list li",
);
    mobileNavbar.init();
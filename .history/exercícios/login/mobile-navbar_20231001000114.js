class MobileNavbar {
    constructor () {
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";
    }


    addClickEvent() {
        this.mobileMenu.addEvenListener("click", 
    }
    init() {
        if(this.mobileMenu) {
            this.addClickEvent();
        }
        return this;
    }
}

const MobileNavbar = new MobileNavbar(
    ".molibe-menu",
    ".nav-list",
    ".nav-list li",
);
mobileNavbar.init();
class MobileNavbar {
    constructor () {
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";
    }


    addClickEvent() {
        this.mobileMenu.addEvenListener("click", () => console.log("hey"));
    }
    init() {
        if(this)
    }
}

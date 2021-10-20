const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const headerElement = $('#header');
const menuBarBtn = $('.menu-bar');
const menuItems = $('.menu-items');
const menuBtns = $$('.js-menu-button');
const menuItemContents = $$('.js-menu-item__content');

// On/Off MenuBarRight
function activeMenuBarBtn() {
    menuBarBtn.classList.toggle('active');
    menuItems.classList.toggle('active');
}

menuBarBtn.addEventListener('click', activeMenuBarBtn);

// Scroll Header
function scrollHeader() {
    const x = this.pageYOffset;
    if (x > 80) {
        headerElement.classList.add('active');
    } else {
        headerElement.classList.remove('active');
    }
}

window.addEventListener('scroll', scrollHeader);

// Menu Food Tab

menuBtns.forEach((menuBtn, index) => {
    const menuItemContent = menuItemContents[index];

    menuBtn.onclick = function () {
        $('.js-menu-button.active').classList.remove('active');
        $('.js-menu-item__content.active').classList.remove('active');

        this.classList.add('active');
        menuItemContent.classList.add('active');
    }
})

// menuTitle.addEventListener('click', function(x) {
//     if (x.target.classList.contains('menu-button')) {
//         const Target = x.target.getAttribute('data-title');

//         menuTitle.querySelector('.active').classList.remove('active');
//         x.target.classList.add('active');

//         menuElement.querySelector('.menu-item__content.active').classList.remove('active');
//         menuElement.querySelector(Target).classList.add('active');
//     }
// })


const mobileMenuOpenBtn = document.getElementById("mobile-menu__btn");
const mobileMenu = document.querySelector(".header__mobile-menu--deactive");
const overlay = document.querySelector(".overlay--deactive");
const mobileMenuCloseBtn = document.querySelector('.mobile-menu__close-btn');
const mobileMenuSearchbar = document.querySelector('#mobile-menu__searchbar')

function closeMobileMenu() {
  mobileMenu.className = "header__mobile-menu--deactive";
  overlay.className = "overlay--deactive";
}

function openMobileMenu() {
  mobileMenu.className = "header__mobile-menu--active";
  overlay.className = "overlay--active";
}

mobileMenuOpenBtn.addEventListener("click", openMobileMenu);
overlay.addEventListener("click", closeMobileMenu);
mobileMenuCloseBtn.addEventListener('click', closeMobileMenu);
mobileMenu.addEventListener('click', e => {
  if (e.target.tagName === 'A') {
    closeMobileMenu()
  }
});
mobileMenuSearchbar.addEventListener('keydown', e => {
  if(e.keyCode === 13){
    closeMobileMenu();
    mobileMenuSearchbar.value = '';
  }
});


// overlay--deactive
// header__mobile-menu--deactive
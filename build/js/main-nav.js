(function () {
  var navMain = document.querySelector('.main-nav');
  var navToggle = document.querySelector('.main-nav__toggle');
  var pageHeader = document.querySelector('.page-header');
  var pageHeaderNavWrapper = document.querySelector('.page-header__main-nav');
  const SCROLL_Y_VALUE = 70;
  let coordY = window.pageYOffset;

  navMain.classList.remove('main-nav--nojs');
  pageHeader.classList.add('page-header--js')
  pageHeaderNavWrapper.classList.add('page-header__main-nav--js');
  pageHeaderNavWrapper.classList.add('page-header__main-nav--transparent');
  navToggle.addEventListener('click', function () {
    if (navMain.classList.contains('main-nav--closed')) {
      navMain.classList.remove('main-nav--closed');
      navMain.classList.add('main-nav--opened');
      pageHeaderNavWrapper.classList.remove('page-header__main-nav--transparent');
    } else {
      navMain.classList.add('main-nav--closed');
      navMain.classList.remove('main-nav--opened');
      pageHeaderNavWrapper.classList.add('page-header__main-nav--transparent');
    }
  });

  window.onscroll = function () {
    if (window.pageYOffset > 50) {
      pageHeaderNavWrapper.classList.remove('page-header__main-nav--transparent');
    } else {
      pageHeaderNavWrapper.classList.add('page-header__main-nav--transparent');
    }
  }
})();

let lastScroll = 0;
const defaultOffset = 200;
const navMenu = document.querySelector('.navMenu');

const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop;
const containHide = () => navMenu.classList.contains('hide');

window.addEventListener('scroll', () => {
  if (scrollPosition() > lastScroll && !containHide() && scrollPosition() > defaultOffset) {
    // scroll down
    navMenu.classList.add('hide');
  } else if (scrollPosition() < lastScroll && containHide()) {
    // scroll up
    navMenu.classList.remove('hide');
  }

  lastScroll = scrollPosition();
});

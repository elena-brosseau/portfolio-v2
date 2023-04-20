
/////// Fade on Scroll 

const fadeIns = Array.from(document.querySelectorAll('.fadeIn'));
const fadeDowns = Array.from(document.querySelectorAll('.fadeDown'));
const skewFades = Array.from(document.querySelectorAll('.skills-list'))


const scrollOffset = 100;

const elementInView = (el, offset = 0) => {
  const elementTop = el.getBoundingClientRect().top;
  
  return (
    elementTop <= 
    ((window.innerHeight || document.documentElement.clientHeight) - offset)
  );
};

const handleScrollAnimation = () => {
    fadeIns.forEach(scrollElement => {
        if (elementInView(scrollElement, scrollOffset)) {
            scrollElement.classList.add('animateFadeIn');
        } else if (!elementInView(scrollElement, 0)) {
            scrollElement.classList.remove('animateFadeIn');
        }
    })

    fadeDowns.forEach(scrollElement => {
        if (elementInView(scrollElement, scrollOffset)) {
            scrollElement.classList.add('animateFadeDown');
        } else if (!elementInView(scrollElement, 0)) {
            scrollElement.classList.remove('animateFadeDown');
        }
    })

    skewFades.forEach(scrollElement => {
        if (elementInView(scrollElement, scrollOffset)) {
            scrollElement.classList.add('skewFadeDown');
        } else if (!elementInView(scrollElement, 0)) {
            scrollElement.classList.remove('skewFadeDown');
        }
    })
}

document.querySelector('main').addEventListener('scroll', () => {
  handleScrollAnimation();
})



/////// Mobile Nav

const menuIcon = document.querySelector('.menu-icon'),
      header = document.querySelector('header');
      navLinks = Array.from(document.querySelectorAll('.nav-mobile a'))


menuIcon.onclick = toggleNav;

navLinks.forEach(link => {
    link.onclick = toggleNav;
})

function toggleNav() {

    if (menuIcon.src === 'file:///Users/gonzo/Documents/projects/portfolio%20v2/assets/menu.png') {
        menuIcon.src = './assets/close.png';
    } else {
        menuIcon.src = './assets/menu.png';
    };

    header.classList.toggle('open');
}

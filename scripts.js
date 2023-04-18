
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

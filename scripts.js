
// Fade on Scroll 

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



// Mobile Nav

const menuIcon = document.querySelector('.menu-icon'),
      header = document.querySelector('header');
      navLinks = Array.from(document.querySelectorAll('.nav-mobile a'))


menuIcon.onclick = toggleNav;

navLinks.forEach(link => {
    link.onclick = toggleNav;
})

function toggleNav() {

    if (!header.classList.contains('open')) {
        menuIcon.src = './assets/close.png';
    } else {
        menuIcon.src = './assets/menu.png';
    };

    header.classList.toggle('open');
}


// Projects Slideshow

const video = document.querySelector('.browser-content video')
      title = document.querySelector('.project-name'),
      description = document.querySelector('.project-description'),
      github = document.querySelector('.link-buttons a:nth-child(1)'),
      liveSite = document.querySelector('.link-buttons a:nth-child(2)'),
      previous = document.querySelector('.project-nav-buttons .prev'),
      next = document.querySelector('.project-nav-buttons .next')

let i = 0;

const projects = [
    {
        video: './assets/testing-center-screen-record.webm',
        title: 'Testing Center',
        description: 'Single page appointment scheduler app, created to fill a need at my current job. Built with React, Redux, React Router, and Jest.',
        github: 'https://github.com/elena-brosseau/testing-center-2',
        live: 'https://elena-brosseau.github.io/testing-center-2/'
    },
    {
        video: './assets/ouch-screen-record.webm',
        title: 'Ouch Productions',
        description: 'A minimalist homepage for a media production company, inclucing video previews of each of their featured projects. Built with HTML, CSS, and Javascript.',
        github: 'https://github.com/elena-brosseau/ouch',
        live: 'https://ouchproductions.tv/'
    }
]

function setProject() {
    video.src = projects[i].video
    title.innerHTML = projects[i].title
    description.innerHTML = projects[i].description
    github.href = projects[i].github
    liveSite.href = projects[i].live
}

setProject();

function nextProject() {

    if (i < (projects.length - 1)) {
        i++;
    } else {
        i = 0;
    }

    setProject()
}

function prevProject() {
    
    if (i === 0) {
        i = (projects.length - 1);
    } else {
        i--;
    }

    setProject()
}

next.onclick = nextProject;
previous.onclick = prevProject;

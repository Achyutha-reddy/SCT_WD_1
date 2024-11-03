import React from 'react'
import '../Nav/nav.css';

function Nav() {
    let sections = document.querySelectorAll('section');
    let navLinks =document.querySelectorAll('header nav a');

    window.onscroll = () => {
        sections.forEach(sec => {
                let top = window.scrollY;
                let offset = sec.offsetTop;
                let height = sec.offsetHeight;
                let id = sec.getAttribute('id');

                if (top => offset && top < offset + height){
                    navLinks.forEach(links => {
                        links.classList.remove('active');
                        document.querySelector('header nav a[href*=' + id + ']').classlist.add('active')
                    });
                };
        });
    };
  return (
   <div>
    <header>
    <a href="#" className='logo'>SkillCraftTechnology.</a>
    
    <nav>
        <a href="#home" className='active'>HOME</a>
        <a href="#about">ABOUT</a>
        <a href="#experience">EXPERIENCE</a>
        <a href="#portfolio">PORTFOLIO</a>
        <a href="#qualification">QUALIFICATION</a>
        <a href="#contact">CONTACT</a>
    </nav>
   </header>
  
   <section id="home">   <div>
            <h1 id='start'>Let's Learn <span id="place"></span></h1>
        </div></section>
   <section id="about">ABOUT</section>
   <section id="experience">EXPERIENCE</section>
   <section id="portfolio">CONTACT</section>
   <section id="qualification">QUALIFICATION</section>
   <section id="contact">CONTACT</section>
   </div>
   
   
   
  )
}

export default Nav
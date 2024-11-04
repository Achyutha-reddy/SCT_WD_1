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
        <a href="#task1">TASK-1</a>
        <a href="#task2">TASK-2</a>
        <a href="#task3">TASK-3</a>
        <a href="#task4">TASK-4</a>
    </nav>
   </header>
  
   <section id="home">   <div>
            <h1 id='start'>WEB DEVELOPMENT <span style={{color:'yellow'}}>TASKS-</span> <span id="place"></span></h1>
        </div></section>
   <section id="task1">RESPONSIVE LANDING PAGE</section>
   <section id="task2">STOP-WATCH</section>
   <section id="task3">TIC-TAC-TOE</section>
   <section id="task4">TO-DO-LIST</section>
   </div>
   
   
   
  )
}

export default Nav
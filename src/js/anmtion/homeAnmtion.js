
// import gsap from 'gsap';


class anmtionForDesktop{
    constructor(){
        this.mm = gsap.matchMedia();
        this.tl = gsap.timeline();
        this.S = 800;
        
    }
    
    activeAnmtion(){
        window.addEventListener('DOMContentLoaded',()=>{
            gsap.registerPlugin(CustomEase,ScrollTrigger);
            CustomEase.create('hop','.4,0,.47,1')

            this.mm.add(`(min-width: ${this.S}px)`,()=>{
                this.HomeSection();
            })
        })
    }

    HomeSection(){
        const tagImg = document.querySelector(".D-desktop");
        const homeContent = document.querySelectorAll('.home-content *');
        const headerElemnt = document.querySelectorAll('.nav-links li');

        this.tl.from(tagImg,{
            yPercent:-200,
            duration:1,
            ease:"hop"
        })
        .from( headerElemnt ,{
            opacity:0,
            x: -50,
            duration:1,
            stagger:0.14
        })
        .from( homeContent ,{
            opacity:0,
            y: -50,
            duration:0.5,
            stagger:0.3
        },'<')

    }
}


const App = new anmtionForDesktop();

App.activeAnmtion();
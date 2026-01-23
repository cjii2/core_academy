
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
            CustomEase.create('hop','0.9 , 0 , 0.1 , 1')

            this.mm.add(`(min-width: ${this.S}px)`,()=>{
                this.HomeSection();
            })
        })
    }

    HomeSection(){
        const tagImg = document.querySelector(".img-bg");

        gsap.to(tagImg,{
            clipPath: "inset(0 0 0 0)",
            ease: "hop",
        })

    }
}


const App = new anmtionForDesktop();

App.activeAnmtion();
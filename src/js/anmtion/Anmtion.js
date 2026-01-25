
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
            CustomEase.create('hop','.52,0,.35,1')
            CustomEase.create('hop-tow','.54,.01,0,1')

            this.mm.add(`(min-width: ${this.S}px)`,()=>{
                this.HomeSection();
                this.aboutSection();
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

    aboutSection(){
        const imgs = document.querySelectorAll('.img-container *');
        const content1 = document.querySelectorAll('.about-content *');
        const content2 = document.querySelectorAll('.about-content-tow *');
        
        const tl = gsap.timeline({
            scrollTrigger:{
                trigger:'#about',
                start: '5% bottom',
                end:'bottom 50%',
            }
        })

        tl.from(imgs, {
            yPercent:100,
            opacity:0,
            duration:1.4,
            stagger:0.3,
            ease:'hop',
        })
        .from(content1 , {
            xPercent:100,
            duration:1.9,
            opacity:0,
            stagger:0.1,
            ease:'hop-tow'
        },'-=1.3')
        .from(content2 , {
            xPercent: 100,
            duration: 1.9,
            opacity: 0,
            stagger: 0.2,
            ease:'hop-tow'
        },'-=1.2')
    }
}


const App = new anmtionForDesktop();

App.activeAnmtion();
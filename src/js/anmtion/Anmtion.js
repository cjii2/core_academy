
// import gsap from 'gsap';


export class anmtionForDesktop{
    constructor(){
        this.mm = gsap.matchMedia();
        this.S = 800;
        
    }
    
    activeAnmtion(){
        document.addEventListener('DOMContentLoaded',()=>{
            gsap.registerPlugin(CustomEase,ScrollTrigger);
            CustomEase.create('hop','.52,0,.35,1')
            CustomEase.create('hop-tow','.54,.01,0,1')

            this.mm.add(`(min-width: ${this.S}px)`,()=>{
                this.HomeSection();
                this.aboutSection();
                this.whyUsSection();
                this.qusationsSection();
                // this.programsSection();
            });
        });
    }

    HomeSection(){
        const tagImg = document.querySelector(".D-desktop");
        const homeContent = document.querySelectorAll('.home-content *');
        const headerElemnt = document.querySelectorAll('.nav-links li');

        const tl = gsap.timeline();
        tl.from(tagImg,{
            yPercent:-200,
            duration:1,
            ease:'power1-inOut'
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
            duration:0.8,
            stagger:0.3,
            ease:'power1-inOut',
        })
        .from(content1 , {
            xPercent:100,
            duration:0.9,
            opacity:0,
            stagger:0.2,
        },'-=1.3')
        .from(content2 , {
            xPercent: 100,
            duration: 0.9,
            opacity: 0,
            stagger: 0.2,
        },'-=1.2')
    }

    programsSection(){
        const header = document.querySelectorAll('#programs .programs-head-children');
        const cards = document.querySelectorAll('#programs .card-container .card');
        // console.log(cards);
        if(!cards.length) return;
        const tl = gsap.timeline({
            scrollTrigger:{
                trigger:'#programs',
                start:'5% bottom',
                end: 'bottom 50%',

            }
        })

        tl.from(header,{
            yPercent:110,
            opacity:0,
            duration:0.5,
            stagger: 0.2,
            ease: 'power1-inOut'
        })

        .from(cards , {
            yPercent:30,
            opacity:0,
            duration:1,
            stagger: 0.2,
            ease: 'power1-inOut'
        })
    }

    whyUsSection(){
        const cards = document.querySelectorAll('#whyUs .card');
        const tl = gsap.timeline({
            scrollTrigger:{
                trigger:'#whyUs',
                start:'20% 95%',
                end:'bottom 50%',
            }
        })

        tl.from(cards,{
            yPercent:100,
            opacity:0,
            stagger: 0.3,
            duration:1,
            ease:'power1-inOut'
        })
    }

    qusationsSection(){
        const qusations = document.querySelectorAll('#FAQ .qustions-container > *');

        const tl = gsap.timeline({
            scrollTrigger:{
                trigger:'#FAQ',
                start:'20% 95%',
                end:'bottom 50%',
            }
        });

        tl.fromTo(qusations,{opacity:0 ,yPercent:0,},{
            y:-100,
            opacity:1,
            stagger:0.2,
            duration:0.5,
            ease:'power1-inOut'
        })
    }
}

export class anmtionForMobile{
    constructor(){
        this.mm = gsap.matchMedia();
        this.S = 800;
    }

    activeAnmtion(){
        window.addEventListener('DOMContentLoaded',()=>{
            gsap.registerPlugin(CustomEase,ScrollTrigger);
            CustomEase.create('hop','.52,0,.35,1')
            CustomEase.create('hop-tow','.54,.01,0,1')

            this.mm.add(`(max-width: ${this.S}px)`,()=>{
                this.HomeSection();
                this.aboutSection();
                // this.programsSection();
                this.whyUsSection();
                this.qusationsSection();
            })
        })
    }

    HomeSection(){
        const tagImg = document.querySelector(".D-desktop");
        const homeContent = document.querySelectorAll('.home-content *');
        const headerElemnt = document.querySelectorAll('.nav-links li');

        const tl = gsap.timeline();

        tl.from(tagImg,{
            yPercent:-200,
            duration:1,
            ease:'power1.inOut'
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
            ease:'power1.inOut',
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

    programsSection(){
        const header = document.querySelectorAll('#programs .programs-head-children');
        const cards = document.querySelectorAll('#programs .card');
        if(!cards.length) return
        const tl = gsap.timeline({
            scrollTrigger:{
                trigger:'#programs',
                start:'5% bottom',
                end: 'bottom 50%',

            }
        })

        tl.from(header,{
            yPercent:110,
            opacity:0,
            duration:0.5,
            stagger: 0.2,
            ease:'power1-inOut'
        })

        .from(cards , {
            yPercent:30,
            opacity:0,
            duration:0.5,
            stagger: 0.2,
        })
    }

    whyUsSection(){
        const cards = document.querySelectorAll('#whyUs .card');
        const tl = gsap.timeline({
            scrollTrigger:{
                trigger:'#whyUs',
                start:'20% 95%',
                end:'bottom 50%',
            }
        })

        tl.from(cards,{
            yPercent:100,
            opacity:0,
            stagger: 0.3,
            duration:1,
            ease:'power1-inOut'
        })
    }

    qusationsSection(){
        const qusations = document.querySelectorAll('#FAQ .qustions-container > *');

        const tl = gsap.timeline({
            scrollTrigger:{
                trigger:'#FAQ',
                start:'20% 95%',
                end:'bottom 50%',
            }
        });

        tl.fromTo(qusations,{opacity:0 ,yPercent:0,},{
            y:-100,
            opacity:1,
            stagger:0.2,
            duration:0.5,
            ease:'power1-inOut'
        })
    }
}
const desktop = new anmtionForDesktop();
const mobile = new anmtionForMobile();
desktop.activeAnmtion();
mobile.activeAnmtion();
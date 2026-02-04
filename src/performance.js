
class performance{
    constructor(){
    }
    async initAllSections(){
        this.lazyLoad("../src/js/sectionsJS/header.js",'head','header','HomeSection');
        this.lazyLoad("../src/js/sectionsJS/home.js",'home','home');
        this.lazyLoad("../src/js/sectionsJS/aboutUs.js",'about','about','aboutSection');
        this.lazyLoad("../src/js/sectionsJS/programs.js",'programs','programs');
        this.lazyLoad("../src/js/sectionsJS/whyUs.js",'whyUs','whyUs','whyUsSection');
        this.lazyLoad("../src/js/sectionsJS/FAQ.js",'FAQ','FAQ');
    }

    async loadAnimations(){
        if (this.desktop) return;
        const {anmtionForDesktop, anmtionForMobile} =
            await import('../src/js/anmtion/Anmtion.js');
        this.desktop = new anmtionForDesktop();
        this.mobile = new anmtionForMobile();
    }

    lazyLoad(url, sectionId, functionName,anmtionFun) {
        const section = document.getElementById(sectionId);
        if (!section) return;

        const observer = new IntersectionObserver(async (entries) => {
            if (entries[0].isIntersecting) {
                observer.disconnect();

                
                const module = await import(/* @vite-ignore */ url);
                if (module[functionName]) {
                    module[functionName]();
                }
                if(anmtionFun){
                    await this.loadAnimations();
                    requestAnimationFrame(()=>{
                        if(window.innerWidth >= 800) return this.desktop[anmtionFun]();
                        if(window.innerWidth < 800) this.mobile[anmtionFun]();
                    })
                }
                
                
            }
        }, {
            rootMargin: '300px'
        });

        observer.observe(section);
    }

    activeApp(){
        this.initAllSections();
    }
}

const app = new performance();

app.activeApp();
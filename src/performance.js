
import { anmtionForMobile , anmtionForDesktop} from '../src/js/anmtion/Anmtion.js'


class performance{
    constructor(){
        this.mobile = new anmtionForMobile();
        this.desktop = new anmtionForDesktop();
    }
    
    activeHomePage(){

        this.initHome();
        this.initAllSections();
        
    }
    
    async initHome(){
        const { home } = await import('../src/js/sectionsJS/home.js');
        const { header } = await import('../src/js/sectionsJS/header.js');

        await Promise.all([
            home(),
            header()
        ]);
        await new Promise(res=>{requestAnimationFrame(res)})

        if (this.desktop?.activeAnmtion) {
            await this.desktop.activeAnmtion();
        }
        if (window.innerWidth < 800 && this.mobile?.activeAnmtion) {
            this.mobile.activeAnmtion();
        }
    }

    async initAllSections(){
        this.lazyLoad("../src/js/sectionsJS/aboutUs.js",'about','about');
        this.lazyLoad("../src/js/sectionsJS/programs.js",'programs','programs');
        this.lazyLoad("../src/js/sectionsJS/whyUs.js",'whyUs','whyUs');
        this.lazyLoad("../src/js/sectionsJS/FAQ.js",'FAQ','FAQ');
    }
    lazyLoad(url, sectionId, functionName) {
        const section = document.getElementById(sectionId);
        if (!section) return;

        const observer = new IntersectionObserver(async (entries) => {
            if (entries[0].isIntersecting) {
                const module = await import(/* @vite-ignore */ url);
                if (module[functionName]) {
                    module[functionName]();
                }
                observer.disconnect();
            }
        }, {
            rootMargin: '200px'
        });

        observer.observe(section);
    }

    activeApp(){
        this.activeHomePage();
    }
}

const app = new performance();

app.activeApp();
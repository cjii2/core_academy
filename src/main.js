import {anmtionForDesktop , anmtionForMobile} from '../src/js/anmtion/Anmtion.js'

const anmtionDesktop = new anmtionForDesktop();
const anmtionMobile  = new anmtionForMobile();

export class insertDataIntoInputs{
    constructor(url){
        this.filter_container = document.getElementById('filter_container');
        this.url = url;
        this.data = null;
    }

    async load(){
        if(this.data) return this.data;
        const res = await fetch(this.url);
        this.data = await res.json();
        return this.data;
    }

    async getData(section){
        const data = await this.load();
        return data[section] || [];
    }

    fillterData(data,fatherOfcards,wordTofilter){
        if(!fatherOfcards) return console.log("error in creatCards into main.js");
        fatherOfcards.innerHTML ="";
        const filter = data.filter((e) =>{return e.level === wordTofilter || e.getAll === wordTofilter});
        filter.forEach((e)=>{
            fatherOfcards.insertAdjacentHTML('beforeend',`
                <article class="card">
                    <header class="card-head">
                        <h3>${e.title}</h3>
                        <p>${e.content}</p>
                    </header>
            
                    <ul>
                        <li><span>${e.level} -</span></li>
                        <li><span>${e.when}-</span></li>
                        <li><span>${e.time}-</span></li>
                    </ul>

                    <img src="${e.img.url}" alt="${e.img.title}">
                    <div class="buy-">
                        <strong>${e.price}${e.currency}</strong>
                        <a target="_blank" href="https://wa.me/${e.phoneCountry}${e.phoneNumber}?text=${encodeURIComponent(e.message)}">${e.title_link}</a>
                    </div>
                </article>
            `);
        });
    }
    insertDataIntoTags(data,elemnt,log){
        if(log) console.log(log);
        elemnt.forEach((e,i)=>{
            e.innerText = data[i]
        });
    }
    insertDataIntoStats(data,elemnt){
        if(!data || !elemnt) return console.log("error in insertDataIntoTags into main.js");
        elemnt.forEach((e,i)=>{
            e.innerText = data[i]
        });
    }
    
    insertDataIntoLinks(data,elemnt){
        if(!data || !elemnt) return console.log("error in insertDataIntoLinks into main.js");
        elemnt.forEach((e,i)=>{
            e.textContent = data[i].title;
            e.href = data[i].link;
        });
    }

    inserDataIntoImg(data,elemnt){
        if(!data || !elemnt) return console.log("error in inserDataIntoImg into main.js");
        elemnt.forEach((e,i)=>{
            e.src = data[i].url;
            e.alt = data[i].title;
        });
    }

    inserDataIntoVideo(data,elemnt,log){
        if(log) console.log(log)
        if(!data || !elemnt) return console.log("error in inserDataIntoImg into main.js");
        elemnt.forEach((e,i)=>{
            e.src = data[i].url
            e.type = data[i].type
        });
    }
    creatCards(data,fatherOfcards){
        const levels = data.map(e => e.level);
        const uniqueLevels = [...new Set(levels)];

        fatherOfcards.innerHTML ="";
        uniqueLevels.forEach(e=>{
            this.filter_container.insertAdjacentHTML('beforeend',`
                <li class="programs-head-children"><button class="filter-btn" type="button">${e}</button></li>
                `)
        });

        if(this.filter_container.children.length > 1){
            this.filter_container.style.opacity = 1;
        }

        data.forEach((e,i) =>{
            fatherOfcards.insertAdjacentHTML('beforeend',`
                <article class="card">
                    <header class="card-head">
                        <h3>${e.title}</h3>
                        <p>${e.content}</p>
                    </header>

                    <ul>
                        <li><span>${e.level} -</span></li>
                        <li><span>${e.when}-</span></li>
                        <li><span>${e.time}-</span></li>
                    </ul>

                    <img src="${e.img.url}" alt="${e.img.title}">
                    <div class="buy-">
                        <strong>${e.price}${e.currency}</strong>
                        <a target="_blank" href="https://wa.me/${e.phoneCountry}${e.phoneNumber}?text=${encodeURIComponent(e.message)}">${e.title_link}</a>
                    </div>
                </article>
            `)
        });

        document.querySelectorAll("#programs .filter-btn").forEach(e=>{
            e.addEventListener('click',()=>{
                this.fillterData(data,fatherOfcards,e.textContent)
            });
        });

        requestAnimationFrame(()=>{
            if(window.innerWidth < 800 ) return anmtionMobile.programsSection();
            anmtionDesktop.programsSection();
        });

    }
    createQustions(data,container){
        if(!data || !container) return console.log("error in creatCards into main.js");
        
        data.forEach((e,i)=>{
            container.insertAdjacentHTML('beforeend',`
                <article class="qustion">
                    <div class="qustion-content">
                        <button type="button"></button>
                        <h2>${i+1}) ${e.title}</h2>
                    </div>

                    <p>${e.content}</p>
                </article>
                `);
        });

        const qusetions = document.querySelectorAll('#FAQ .qustion');
        qusetions.forEach((q,i)=>{
            const btns = q.querySelector('#FAQ .qustion button');

            btns.addEventListener('click',()=>{
                q.classList.toggle('open');
            });
        });

        requestAnimationFrame(()=>{
            if(window.innerWidth < 800 ) return anmtionMobile.qusationsSection();
            anmtionDesktop.qusationsSection();
        });
    }
}

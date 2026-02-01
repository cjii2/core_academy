import {anmtionForDesktop , anmtionForMobile} from '../src/js/anmtion/Anmtion.js'
// import {open_close_qustion} from '../src/js/sectionsJS/FAQ.js'

const anmtionDesktop = new anmtionForDesktop();
const anmtionMobile  = new anmtionForMobile();

export class insertDataIntoInputs{
    constructor(){}

    insertDataIntoTags(url,elemnt,log){
        if(log) console.log(log);
        if(!url || !elemnt) return console.log("error in insertDataIntoTags into main.js");
        fetch(url).then(res => {
            if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
            return res.json();
        }).then(data =>{
            elemnt.forEach((e,i)=>{
                e.innerText = data.content[i]
                e = null
            });

        });
    }
    insertDataIntoStats(url,elemnt){
        if(!url || !elemnt) return console.log("error in insertDataIntoTags into main.js");
        fetch(url).then(res => {
            if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
            return res.json();
        }).then(data =>{
            elemnt.forEach((e,i)=>{
                e.innerText = data.status[i]
                e = null
            });

        });
    }
    
    insertDataIntoLinks(url,elemnt){
        if(!url || !elemnt) return console.log("error in insertDataIntoLinks into main.js");
        fetch(url).then(res=>{
            if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
            return res.json();
        }).then(data=>{
            data.links.forEach((e,i)=>{
                elemnt[i].textContent = e.title
                elemnt[i].href = e.link
            });
        });
    }

    inserDataIntoImg(url,elemnt){
        if(!url || !elemnt) return console.log("error in inserDataIntoImg into main.js");

        fetch(url).then(res=>{
            if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
            return res.json();
        }).then(data=>{
            data.img.forEach((e,i)=>{
                elemnt[i].src = e.url
                elemnt[i].alt = e.title
            })
        })
    }

    creatCards(url,fatherOfcards,fillter){
        if(!url || !fatherOfcards) return console.log("error in creatCards into main.js");
        fetch(url).then(res => {
            if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
            return res.json();
        }).then(data=>{

            data.cards_info.forEach((e,i) =>{
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
            })
            if(window.innerWidth < 800 ) return anmtionMobile.programsSection();
            anmtionDesktop.programsSection();
        })
    }

    createQustions(url,container){
        if(!url || !container) return console.log("error in creatCards into main.js");
        fetch(url).then(res => {
            if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
            return res.json();
        }).then(data=>{
            data.content.forEach((e,i)=>{
                container.insertAdjacentHTML('beforeend',`
                    <section class="qustion">
                        <div class="qustion-content">
                            <button type="button"></button>
                            <h2>${i+1}) ${e.title}</h2>
                        </div>

                        <p>${e.content}</p>
                    </section>
                    `);
                });
                
                const qusetions = document.querySelectorAll('#FAQ .qustion');
                qusetions.forEach(q=>{
                    const btns = q.querySelector('#FAQ .qustion button');

                    btns.addEventListener('click',()=>{
                        q.classList.toggle('open');
                    });
                });

                if(window.innerWidth < 800 ) return anmtionMobile.qusationsSection();
                anmtionDesktop.qusationsSection();
            });
    }
}
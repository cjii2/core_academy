export class insertDataIntoInputs{
    constructor(){}

    insertDataIntoTags(url,elemnt){
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
        })
    }
}
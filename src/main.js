export class insertDataIntoInputs{
    constructor(){}

    insertDataIntoTags(url,elemnt){
        fetch(url).then(res => res.json()).then(data =>{
            if(!data) return;
            elemnt.forEach((e,i)=>{
                e.innerText = data.content
                e = null
            });

        });
    }

    insertDataIntoLinks(url,elemnt){
        fetch(url).then(res=>res.json()).then(data=>{
            if(!data) return console.log("data is found");
            data.data.forEach((e,i)=>{
                elemnt.textContent = e.title
                elemnt.href = e.link
            });
        });
    }

    inserDataIntoImg(url,elemnt){
        if(!url && elemnt) return;

        fetch(url).then(res=>res.json()).then(data=>{
            data.img.forEach((e,i)=>{
                elemnt.src = e.url
                elemnt.alt = e.title
            })
        })
    }

    creatreCards(url,fatherOfcards,fillter){
        fetch(url).then(res => res.json()).then(data=>{
            if(!data) return;

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
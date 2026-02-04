import {insertDataIntoInputs} from '../../main.js'

export function whyUs(){
    const cards = document.querySelectorAll('#whyUs .card');
    const conatiner = document.querySelector('#whyUs .conatiner');
    const elemnt = document.querySelectorAll('#whyUs h2, #whyUs p');
    const links = document.querySelectorAll('#whyUs a');
    const stats = document.querySelectorAll('#whyUs h4 ,#whyUs strong');
    const url = 'src/json/whyUsSection/insertData.json';
    
    const whyUs = new insertDataIntoInputs(url);
    whyUs.getData('links').then(data=>whyUs.insertDataIntoLinks(data,links));
    whyUs.getData('content').then(data=>whyUs.insertDataIntoTags(data,elemnt));
    whyUs.getData('status').then(data=>whyUs.insertDataIntoTags(data,stats));

    if(conatiner.children.length > 0){
        cards.forEach(e=>{
            e.style.opacity = 1
        });
    }
}
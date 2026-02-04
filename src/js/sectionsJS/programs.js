import {insertDataIntoInputs} from '../../main.js'

export function programs(){
    const elemnt = document.querySelector('#programs .card-container');
    const content = document.querySelectorAll('#programs .programs-head h1');
    console.log(content)
    const url = 'src/json/programs/createCards.json';
    const programs = new insertDataIntoInputs(url);
    programs.getData('cards_info').then(data=> programs.creatCards(data,elemnt));
    programs.getData('content').then(data=> programs.insertDataIntoTags(data,content));
}
import {insertDataIntoInputs} from '../../main.js'

export function programs(){
    const elemnt = document.querySelector('#programs .card-container');
    const url = 'src/json/programs/createCards.json';
    const dataType = 'cards_info';
    const programs = new insertDataIntoInputs(url);
    
    programs.getData(dataType).then(data=>{
        programs.creatCards(data,elemnt);
    });
}
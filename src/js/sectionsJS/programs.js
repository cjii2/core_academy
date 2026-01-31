import {insertDataIntoInputs} from '../../main.js'

function app(){
    const elemnt = document.querySelector('#programs .card-container');
    const url = '../../../src/json/programs/createCards.json';

    const programs = new insertDataIntoInputs();
    programs.creatCards(url, elemnt)
}

app();
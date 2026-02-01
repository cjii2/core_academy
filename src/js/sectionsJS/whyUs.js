import {insertDataIntoInputs} from '../../main.js'

function app(){
    const elemnt = document.querySelectorAll('#whyUs h2, #whyUs p');
    const links = document.querySelectorAll('#whyUs a');
    const stats = document.querySelectorAll('#whyUs h4 ,#whyUs strong');
    const url = 'src/json/whyUsSection/insertData.json';
    

    const homeElemnt = new insertDataIntoInputs();
    homeElemnt.insertDataIntoLinks(url , links);
    homeElemnt.insertDataIntoTags(url , elemnt);
    homeElemnt.insertDataIntoStats(url , stats);
}

app();
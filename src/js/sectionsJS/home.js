import {insertDataIntoInputs} from '../../main.js'

function app(){
    const elemnt = document.querySelectorAll('#home h1 , #home p');
    const links = document.querySelectorAll('#home a');
    const imgs = document.querySelectorAll('#home img');
    const url = '../../../src/json/homeSectionData/insertData.json';

    const homeElemnt = new insertDataIntoInputs();
    homeElemnt.insertDataIntoLinks(url , links);
    homeElemnt.insertDataIntoTags(url , elemnt);
    homeElemnt.inserDataIntoImg(url , imgs)
}

app();
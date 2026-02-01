import {insertDataIntoInputs} from '../../main.js'

function app(){
    const elemnt = document.querySelectorAll('#home h1 , #home p');
    const links = document.querySelectorAll('#home a');
    const video = document.querySelectorAll('#home video');
    const url = 'src/json/homeSectionData/insertData.json';

    const homeElemnt = new insertDataIntoInputs();
    homeElemnt.insertDataIntoLinks(url , links);
    homeElemnt.insertDataIntoTags(url , elemnt);
    homeElemnt.inserDataIntoVideo(url , video,video);
}

app();
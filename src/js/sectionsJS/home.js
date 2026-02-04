import {insertDataIntoInputs} from '../../main.js'

export function home(){
    const elemnt = document.querySelectorAll('#home h1 , #home p');
    const links = document.querySelectorAll('#home a');
    const url = 'src/json/homeSectionData/insertData.json';

    const homeElemnt = new insertDataIntoInputs(url);
    homeElemnt.getData('links').then(data=>homeElemnt.insertDataIntoLinks(data,links));
    homeElemnt.getData('content').then(data=>homeElemnt.insertDataIntoTags(data,elemnt));
}
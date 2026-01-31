import {insertDataIntoInputs} from '../../main.js'

function app(){
    const elemnt = document.querySelectorAll('#about .all-about-content h2, .all-about-content p');
    const imgs = document.querySelectorAll('#about img');
    const url = '../../../src/json/aboutSection/insertData.json';


    const about = new insertDataIntoInputs();

    about.inserDataIntoImg(url,imgs)
    about.insertDataIntoTags(url,elemnt)
}

app();
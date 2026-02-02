import {insertDataIntoInputs} from '../../main.js'

export function about(){
    const elemnt = document.querySelectorAll('#about .all-about-content h2, .all-about-content p');
    const imgs = document.querySelectorAll('#about .img-container img');
    const url = 'src/json/aboutSection/insertData.json';


    const about = new insertDataIntoInputs();

    about.inserDataIntoImg(url,imgs)
    about.insertDataIntoTags(url,elemnt)
}
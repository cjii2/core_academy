import {insertDataIntoInputs} from '../../main.js'

export function about(){
    const elemnt = document.querySelectorAll('#about .all-about-content h2, .all-about-content p');
    const imgs = document.querySelectorAll('#about .img-container img');
    const video = document.querySelectorAll('#about .img-container source');
    const url = 'src/json/aboutSection/insertData.json';


    const about = new insertDataIntoInputs(url);

    about.getData('img').then(data=>about.inserDataIntoImg(data,imgs));
    about.getData('content').then(data=>about.insertDataIntoTags(data,elemnt));
    about.getData('video').then(data=>about.inserDataIntoVideo(data,video));
    
}
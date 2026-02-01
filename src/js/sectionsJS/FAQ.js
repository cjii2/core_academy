import {insertDataIntoInputs} from '../../main.js'
function app(){
    const elemnt = document.querySelector('#FAQ .qustions-container');
    const url = 'src/json/qusationsSection/insertData.json';

    const qusations = new insertDataIntoInputs();
    qusations.createQustions(url, elemnt)
}

app();
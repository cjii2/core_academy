function open_close_qustion(){
    const btns = document.querySelectorAll('#FAQ .qustion button');
    btns.forEach(btn=>{
        btn.addEventListener('click',()=>{
            // btns.forEach(e=>e.parentElement.classList.remove('open'));
            btn.parentElement.classList.toggle('open');
        });
    });
}
open_close_qustion();
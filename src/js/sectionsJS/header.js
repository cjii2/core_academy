const btn = document.querySelector('.closeMenu');
function open_close_menu(){
    document.getElementById('head').classList.toggle('open');
}

btn.addEventListener('click', open_close_menu);
console.log('FIRED');

let classnone = document.querySelector('.ac_content');
let togglebtn = document.querySelector('.ac_content_icon');
let classnone2 = document.querySelector('.ac_content_2');
let togglebtn2 = document.querySelector('.ac_content_icon_2');
let classnone3 = document.querySelector('.ac_content_3');
let togglebtn3 = document.querySelector('.ac_content_icon_3');

function letItToggle () {
    console.log('TOGGLE 1 ACTIVATED');
    classnone.classList.toggle('ac_content_toggle');
}

function letItToggle_2 () {
    console.log('TOGGLE 2 ACTIVATED');
    classnone2.classList.toggle('ac_content_toggle_2');
}

function letItToggle_3 () {
    console.log('TOGGLE 3 ACTIVATED');
    classnone3.classList.toggle('ac_content_toggle_3');
}

togglebtn.addEventListener('click', letItToggle);
togglebtn2.addEventListener('click', letItToggle_2);
togglebtn3.addEventListener('click', letItToggle_3);

// YES, I know how ugly this looks....but the toggles just wouldn't work otherwise >_<
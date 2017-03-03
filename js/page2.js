/**
 * Created by pblead26 on 03-Mar-17.
 */
var section2 = document.getElementById('section2');

function checkConstant(){
    var constOutput = document.getElementById("constantOutput");

    var radios = document.getElementsByName('constant');

    for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
            switch(i){
                case 0: constOutput.innerHTML="But omelette doesnt need water.";
                    break;
                case 1: constOutput.innerHTML="We certainly don’t put salt in maggi, as far as I remember";
                    break;
                case 2: constOutput.innerHTML="That's correct";
                    next();
                    break;

            }

        }
    }
}

function next(){
    section2.style.visibility = 'visible';
}

function nextPage() {
    window.location.href = 'page3.html';
}
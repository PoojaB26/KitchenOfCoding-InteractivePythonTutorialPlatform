/**
 * Created by pblead26 on 03-Mar-17.
 */
var section2 = document.getElementById('section2');
var section3 = document.getElementById('section3');
var constOutput = document.getElementById("radio-output");
var constOutput1 = document.getElementById("radio-output1");

function checkConstant(){

    var radios = document.getElementsByName('constant');

    for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
            switch(i){
                case 0: showRemark();
                    constOutput.innerHTML="Try again";
                    break;
                case 1: showRemark();
                    constOutput.innerHTML="Try again";
                    break;
                case 2: showRemark();
                    constOutput.innerHTML="Yes, absolutely.";
                    next();
                    break;

            }

        }
    }
}
function checkConstant1(){

    var radios = document.getElementsByName('constant1');

    for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
            switch(i){
                case 0: showRemark1();
                    constOutput1.innerHTML="Really? Why don’t you read the question again?";
                    break;
                case 1: showRemark1();
                    constOutput1.innerHTML="That’s right, you don’t have enough sugar for 6 people. ";
                    next1();
                    break;

            }

        }
    }
}

function showRemark(){
    constOutput.style.visibility = 'visible';
}
function showRemark1(){
    constOutput1.style.visibility = 'visible';
}
function next(){
    section2.style.visibility = 'visible';
}

function next1() {
    section3.style.visibility = 'visible';
}/**
 * Created by meow on 4/15/2017.
 */

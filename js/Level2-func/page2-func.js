/**
 * Created by meow on 4/5/2017.
 */
var radioOutput = document.getElementById('radio-output');

function showRemark() {
    radioOutput.style.visibility = 'visible';

}
function checkFunctionName(){

    var radios = document.getElementsByName('choose-func');

    for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
            switch(i){
                case 0: showRemark();
                    radioOutput.innerHTML="Did we really use this yet?";
                    break;
                case 1: showRemark();
                    radioOutput.innerHTML="Yes, you got it";
                    showDivGoNext();
                    break;
                case 2: showRemark();
                    radioOutput.innerHTML="Try again, maybe. We never used it before.";
                    break;

            }

        }
    }
}


function showDivGoNext() {
    document.getElementById('go-next').style.visibility = "visible";
}

function nextPage() {
    $(function() {
        $("#page2").load("page3.html");
    });   }

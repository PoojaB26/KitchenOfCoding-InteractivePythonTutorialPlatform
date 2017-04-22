/**
 * Created by meow on 4/10/2017.
 */


function nextPage() {
    location.href = "page5.html";
}

// output functions are configurable.  This one just appends some text
// to a pre element.
function outf(text) {
    var outputText = document.getElementById("code-output");
    var resultText = document.getElementById("code-remark");

    outputText.innerHTML = outputText.innerHTML + text;

    var output = outputText.innerHTML;

    if(isNaN(output))
        resultText.innerHTML = "Hey, did you follow the 4th instruction. It's the most important one.";
    else{
        resultText.innerHTML = "You are getting good at this!";
        showSection3();

    }

}


function builtinRead(x) {
    if (Sk.builtinFiles === undefined || Sk.builtinFiles["files"][x] === undefined)
        throw "File not found: '" + x + "'";
    return Sk.builtinFiles["files"][x];
}
// Here's everything you need to run a python program in skulpt
// grab the code from your textarea
// get a reference to your pre element for output
// configure the output function
// call Sk.importMainWithBody()
function runit() {
    var userCode = document.getElementById("user-code").value;
    var PreDefinedCode = document.getElementById("predefined").value;

    var finalProg = userCode + "\n" + PreDefinedCode;
    var mypre = document.getElementById("code-output");
    mypre.innerHTML = "";
    Sk.pre = "code-output";
    Sk.configure({output:outf, read:builtinRead});
    var myPromise = Sk.misceval.asyncToPromise(function() {
        return Sk.importMainWithBody("<stdin>", false, finalProg, true);
    });
    myPromise.then(function(mod) {
            console.log('success');
        },
        function(err) {
            console.log(err.toString());
        });
}

/**
 * Created by pblead26 on 03-Mar-17.
 */
var section2 = document.getElementById('section2');
var constOutput = document.getElementById("radio-output");

function checkAnswer(){

    var radios = document.getElementsByName('check-ans');

    for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
            switch(i){
                case 0: showRemark();
                    constOutput.innerHTML="Is that all? Do we not call or reuse the task again?";
                    break;
                case 1: showRemark();
                    constOutput.innerHTML="Ah yes! But is that the entire purpose of functions?";
                    break;
                case 2: showRemark();
                    constOutput.innerHTML="We do. But does it always have to a task with a purpose?";
                    break;
                case 3: showRemark();
                    constOutput.innerHTML="A function is used because of all the above reasons.";
                    showSection2();
                    break;

            }

        }
    }
}

function showRemark(){
    constOutput.style.visibility = 'visible';
}

function showSection2(){
    section2.style.visibility = 'visible';
}
function showSection3() {
    document.getElementById('section3').style.visibility = "visible";
}
function clearConsole(){
    var outputText = document.getElementById("code-output");
    outputText.innerHTML = " ";
}
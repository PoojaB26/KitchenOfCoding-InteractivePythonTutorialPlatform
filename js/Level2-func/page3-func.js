/**
 * Created by pblead26 on 04-Mar-17.
 */


function showDivGoNext() {
    document.getElementById('go-next').style.visibility = "visible";
}

function nextPage() {
    location.href = "page4.html";
}

function refreshConsole(){
    var outputText = document.getElementById("code-output");
    outputText.innerHTML = " ";
}
// output functions are configurable.  This one just appends some text
// to a pre element.
function outf(text) {
    var outputText = document.getElementById("code-output");
    var resultText = document.getElementById("code-remark");
    outputText.innerHTML = outputText.innerHTML + text;
    showDivGoNext();

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

    var finalProg =  document.getElementById("test-code").value;
    var mypre = document.getElementById("code-output");
    mypre.innerHTML = '';
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

function clearConsole(){
    var outputText = document.getElementById("code-output");
    outputText.innerHTML = " ";
}
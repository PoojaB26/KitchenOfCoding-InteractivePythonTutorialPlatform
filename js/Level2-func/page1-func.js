/**
 * Created by pblead26 on 04-Mar-17.
 */
var outputText = document.getElementById("code-output");
var resultText = document.getElementById("code-remark");
function showDivGoNext() {
    document.getElementById('go-next').style.visibility = "visible";
}

function nextPage() {
   location.href="page2.html";
    }

function showRetry(textOnRetry) {
    resultText.innerHTML = textOnRetry;
}

// output functions are configurable.  This one just appends some text
// to a pre element.
function outf(text) {


    var out = outputText.innerHTML + text;
    outputText.innerHTML = out;

    var pattern = /5.25/;
    var output = pattern.test(out);
/*TODO : use case when variable being called is not even present */
    if(output.toString()==="true"){
        resultText.innerHTML = "Great job!";
        showDivGoNext();
    }
    else
    {
        showRetry("Hey! The quantities are fixed for this recipe. Let's keep it that way?");
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
    resultText.innerHTML=" ";
    var userCode = document.getElementById("user-code").value;
    var PreDefinedCode = document.getElementById("predefined").value;
    var finalProg = userCode + "\n" + PreDefinedCode;
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
            showRetry("Did you declare all variables?");
        });
}

function showHint() {
    document.getElementById('hint').style.display = "block";
}

function clearConsole(){
    var outputText = document.getElementById("code-output");
    outputText.innerHTML = " ";
}
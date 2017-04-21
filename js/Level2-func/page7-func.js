/**
 * Created by pblead26 on 05-Mar-17.
 */

function showDivGoNext() {
    document.getElementById('go-next').style.visibility = "visible";
}

function nextPage() {
    location.href="../Level2/page8.html";
}

// output functions are configurable.  This one just appends some text
// to a pre element.
function outf(text) {
    var outputText = document.getElementById("code-output");
    var resultText = document.getElementById("code-remark");

    var out = outputText.innerHTML + text;
    outputText.innerHTML = out;
    // showSection2();
    var pattern = /10/;
    var output = pattern.test(out);

    if(output.toString()==="true"){
        showDivGoNext();
    }
    else
    {
        //hint
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
    var PreDefinedCode1 = document.getElementById("predefined1").value;
    var PreDefinedCode2 = document.getElementById("predefined2").value;

    var finalProg = PreDefinedCode1 + "\n" + userCode + "\n" + PreDefinedCode2;
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
}/**
 * Created by meow on 4/13/2017.
 */
function clearConsole(){
    var outputText = document.getElementById("code-output");
    outputText.innerHTML = " ";
}
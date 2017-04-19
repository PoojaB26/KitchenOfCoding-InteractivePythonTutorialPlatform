/**
 * Created by pblead26 on 05-Mar-17.
 */

function showDivGoNext() {
    document.getElementById('go-next').style.visibility = "visible";
}

function nextPage() {
    location.href = "page6.html";
}

// output functions are configurable.  This one just appends some text
// to a pre element.
function outf(text) {
    var outputText = document.getElementById("code-output");
    var resultText = document.getElementById("code-remark");

    var out = outputText.innerHTML + text;
    outputText.innerHTML = out;
    // showSection2();
    var pattern = /(I am a great cook)/;
    var output = pattern.test(out);

    if(output.toString()==="true"){
        showDivGoNext();
    }
    else
    {
        resultText.innerHTML = "Try Again";
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
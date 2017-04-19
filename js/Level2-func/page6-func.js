/**
 * Created by meow on 4/10/2017.
 */


function nextPage() {
    $(function() {
        $("#page7").load("page7.html");
    });   }

// output functions are configurable.  This one just appends some text
// to a pre element.
function outf(text) {
    var outputText = document.getElementById("code-output");
    var resultText = document.getElementById("code-remark");

    var out = outputText.innerHTML + text;
    outputText.innerHTML = out;

    var pattern = /5/;
    var output = pattern.test(out);

    if(output.toString()==="true"){
        //resultText.innerHTML = "That is right!";
        showSection2();
    }
    else
    {
       // resultText.innerHTML = "Try Again";
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
}

/**
 * Created by pblead26 on 03-Mar-17.
 */
var section2 = document.getElementById('section2');

function showSection2(){
    section2.style.visibility = 'visible';
}
/**
 * Created by meow on 4/12/2017.
 */

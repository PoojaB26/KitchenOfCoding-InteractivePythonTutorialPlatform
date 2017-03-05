/**
 * Created by pblead26 on 04-Mar-17.
 */

function showDiv() {
    document.getElementById('solution').style.display = "block";
}
function showDiv2() {
    document.getElementById('section2').style.display = "block";
}



// output functions are configurable.  This one just appends some text
// to a pre element.
function outf(text) {
    var mypre = document.getElementById("output");
    var pres = document.getElementById("ty");

    var out = mypre.innerHTML + text;
    mypre.innerHTML = out;

    var pattern = /True\nFalse\nTrue/;
    var output = pattern.test(out);
    pres.innerHTML = output;


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
    var userCode = document.getElementById("user_code").value;
    var PreDefinedCode = document.getElementById("predefined").value;
    var finalProg = userCode + "\n" + PreDefinedCode;
    var mypre = document.getElementById("output");
    mypre.innerHTML = '';
    Sk.pre = "output";
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
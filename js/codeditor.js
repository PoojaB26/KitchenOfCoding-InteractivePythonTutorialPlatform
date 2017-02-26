/**
 * Created by pblead26 on 27-Feb-17.
 */
/*
var el = document.getElementById("codeHere");
var range = document.createRange();
var sel = window.getSelection();
range.setStart(el.childNodes[0], 0);
range.collapse(true);
sel.removeAllRanges();
sel.addRange(range);
*/



/*
function getCode(){
    var test=document.getElementById("test").innerHTML;
    var str = 'print "hello"';
    if(test===str){
        alert(test);
    }

}*/


// output functions are configurable.  This one just appends some text
// to a pre element.
function outf(text) {
    var str = "Hello d"
    var mypre = document.getElementById("output");
    var newfile = mypre.innerHTML + text;
    if(newfile===str){
        mypre.innerHTML = newfile;
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
    var prog = document.getElementById("code").innerHTML;
    var mypre = document.getElementById("output");
    mypre.innerHTML = '';
    Sk.pre = "output";
    Sk.configure({output:outf, read:builtinRead});
    (Sk.TurtleGraphics || (Sk.TurtleGraphics = {})).target = 'mycanvas';
    var myPromise = Sk.misceval.asyncToPromise(function() {
        return Sk.importMainWithBody("<stdin>", false, prog, true);
    });
    myPromise.then(function(mod) {
            console.log('success');
        },
        function(err) {
            console.log(err.toString());
        });
}
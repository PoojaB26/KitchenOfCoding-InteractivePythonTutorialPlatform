/**
 * Created by meow on 4/5/2017.
 */
function findSelection(field) {
    var test = document.getElementsByName(field);
    var sizes = test.length;

    //alert(sizes);
    for (i=0; i < sizes; i++) {
        if (test[i].checked==true) {
            //alert(test[i].value + ' you got a value');
            return test[i].value;
        }
    }
}

function submitForm() {


    var selection= findSelection("boil()");
    if(selection=="yes"){
        $(document).ready(function() {
            $('#btnSun').click(myFunction);
        });

        function myFunction() {
            document.getElementById('correct').style.visibility="visible";
        }
            }
    else {
        $(document).ready(function () {
            $('#btnSun').click(incorrect);
        });

        function incorrect() {
            document.getElementById('incorrect').style.visibility = "visible";
        }
    }

}

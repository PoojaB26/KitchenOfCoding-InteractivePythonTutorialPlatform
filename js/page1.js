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


    var selection= findSelection("group1");
    if(selection=="yes")
        alert("Cool!");
    else
        alert("See you next time :)");
    return true;
}
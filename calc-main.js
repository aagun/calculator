function input(num){
    document.form.layar.value = document.form.layar.value+num;
}

function equal(){
    var exp = document.form.layar.value
    if(exp){
        document.form.layar.value = eval(exp);
    }
}

function clr(){
    document.form.layar.value = "";
}

function backSpace(){
    var exp = document.form.layar.value;
    document.form.layar.value = exp.substring(0, exp.length - 1)
}
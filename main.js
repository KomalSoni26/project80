function getpara1(){
    var inputs =[];
    for(i=1; i<=6; i++ )
    {

    inputs.push(document.getElementById("text_input_"+i).value);
}
document.getElementById("showpara1").innerHTML= inputs.join(". ");
}

function getpara2(){
    var inputs =[];
    for(i=7; i<=12; i++ )
    {

    inputs.push(document.getElementById("text_input_"+i).value);
}
document.getElementById("showpara2").innerHTML= inputs.join(". ");
}
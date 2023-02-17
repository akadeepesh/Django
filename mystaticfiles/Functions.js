var a;
function text(){
    if(document.getElementById("para1").style.display == "inline"){
        document.getElementById("para1").style.display="none";
    }
    document.getElementById("para").style.display="inline";
}

function text1(){
    if(document.getElementById("para").style.display == "inline"){
        document.getElementById("para").style.display="none";
    }
    document.getElementById("para1").style.display="inline";
}

function notext(){
    document.getElementById("para1").style.display="none";
    document.getElementById("para").style.display="none";
}
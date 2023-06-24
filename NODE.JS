function changeFont(font){
    //body...
    document.getElementById('text').style.fontFamily=font.
    value;
}
function changeSize(n){
    var s=document.getElementById('text');
    s.style.fontSize=n.value +'px';
}
function Bold(){
    //body...
    var bol=document.getElementById('text').style.fontWeight
    ;
    if(bol=='normal')
    {
         document.getElementById('text').style.fontWeight='bold';
    }
    else{
        document.getElementById('text').style.fontWeight='normal';
    } 
}
function Italic(){
    //body...
    var bol=document.getElementById('text').style.fontStyle
    ;
    if(bol=='normal')
    {
         document.getElementById('text').style.fontStyle='Italic';
    }
    else{
        document.getElementById('text').style.fontStyle='normal';
    } 
}
function underline(){
    //body...
    var bol=document.getElementById('text').style.fontStyle
    ;
    if(bol!='underline')
    {
         document.getElementById('text').style.textDecoration='underline';
    }
    else{
        document.getElementById('text').style.fontStyle='normal';
    } 
}

function reset(){
    //body...
    document.getElementById("text").style.fontStyle= "Normal";
    
    document.getElementById("text").style.textDecoration= 'none';

   document.getElementById("text").style.fontWeight='normal';

}

function remove(){
//body..
document.getElementById("text").value="";
}
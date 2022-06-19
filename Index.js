let PLYR;
let P1 , P2;
let RandomPlayerGenerator=()=>
{
    return Math.floor(Math.random()*2);
}

let GetPlayerNames=()=>
{
    P1=document.querySelector('.P1').value;
    P2=document.querySelector('.P2').value;

    let Form=document.querySelector('.Form').style.display="none";
    let GameBox=document.querySelector('.Game-Box').style.display="grid";
    document.querySelector('.Game-Box').classList.add('Slide');

    PLYR=RandomPlayerGenerator();
    if(PLYR==0)
    {
        document.querySelector('.Turns p').innerHTML=`${P1} Turn`;
    }
    if(PLYR==1)
    {
        document.querySelector('.Turns p').innerHTML=`${P2} Turn`;
    }
}
let Decision=(Sign)=>
{

};
let X=document.querySelectorAll('.Box')

X.forEach(element => {
    element.addEventListener('click' , ()=>
    {
        if(PLYR==0)
        {
            while(document.getElementById(element.id).innerHTML=='')
            {
                document.querySelector('.Turns p').innerHTML=`${P2} Turn`;
                document.getElementById(element.id).innerHTML='X';
                PLYR=1;
            }
        }
        else if(PLYR==1)
        {
            while(document.getElementById(element.id).innerHTML=='')
            {
                document.querySelector('.Turns p').innerHTML=`${P1} Turn`;
                document.getElementById(element.id).innerHTML='O';
                PLYR=0;
            }
        }
    });
});
X.forEach(element => {

    element.addEventListener('click' , ()=>
    {
        if(document.getElementById(element.id).innerHTML=='X')
        {
            document.getElementById(element.id).style.color='#1abc9c'
        }
        else if(document.getElementById(element.id).innerHTML=='O')
        {
            document.getElementById(element.id).style.color='#f1c40f';
        }
    });

});

document.querySelector('.fa-rotate-right').addEventListener('click' , Clear=()=>
{
   X.forEach(Value=>
    {
        document.getElementById(Value.id).innerHTML='';
    });
});
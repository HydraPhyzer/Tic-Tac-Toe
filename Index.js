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
let X=document.querySelectorAll('.Box')

let Decision=(Sign , Player)=>
{
    let Num=0;
    let  Count1=0;
    let  Count2=0;
    let  Count3=0;
    let  Count4=0;
    let Arr=new Array(3);
    for(let k=0 ; k<Arr.length ; k++)
    {
        Arr[k]=new Array(3);
    }

    for(let i=1 ; i<4 ; i++)
    {
        for(let j=1 ; j<4 ; j++)
        {
            Arr[i-1][j-1]=document.getElementById(X[Num].id).innerHTML;
            Num++;
        }
    }
    
    for(let i=1 ; i<4 ; i++)
    {
        for(let j=1 ; j<4 ; j++)
        {
            if(Arr[i-1][j-1]==Sign)
            {
                Count1++;
                if(Count1==3)
                {
                    document.querySelector('.Heading').innerHTML=`Hurray 🎉🥂 ${Player} Won`;
                    document.querySelector('.Heading').style.display="grid";
                    X.forEach(Value=>
                    {
                        Value.classList.add('Make-None');
                    });
                    Count1=0;
                    return;
                }
            }
            if(Arr[j-1][i-1]==Sign)
            {
                Count2++;
                if(Count2==3)
                {
                    document.querySelector('.Heading').innerHTML=`Hurray 🎉🥂 ${Player} Won`;
                    document.querySelector('.Heading').style.display="grid";
                    X.forEach(Value=>
                    {
                        Value.classList.add('Make-None');
                    });
                    Count2=0;
                    return;
                }
            }
        }
        Count1=0;
        Count2=0;
    }
    for(let l=0 ; l<3 ; l++)
    {
        if(Arr[l][l]==Sign)
        {
            Count3++;
            if(Count3==3)
            {
                document.querySelector('.Heading').innerHTML=`Hurray 🎉🥂 ${Player} Won`;
                document.querySelector('.Heading').style.display="grid";
                X.forEach(Value=>
                {
                    Value.classList.add('Make-None');
                });
                Count3=0;
                return;
            }
        }
    }
    let Z=0 , Y=2;
    while(Z<=3 && Y>=0)
    {
        if(Arr[Z][Y]==Sign)
        {
            Count4++;
            if(Count4==3)
            {
                document.querySelector('.Heading').innerHTML=`Hurray 🎉🥂 ${Player} Won`;
                document.querySelector('.Heading').style.display="grid";
                X.forEach(Value=>
                {
                    Value.classList.add('Make-None');
                });
                Count4=0;
                return;
            }
        }
        Z++;Y--;
    }
};

X.forEach(element => {
    element.addEventListener('click' , ()=>
    {
        if(PLYR==0)
        {
            while(document.getElementById(element.id).innerHTML=='')
            {
                document.getElementById(element.id).innerHTML='X';
                Decision('X' , P1);
                document.querySelector('.Turns p').innerHTML=`${P2} Turn`;
                PLYR=1;
            }
        }
        else if(PLYR==1)
        {
            while(document.getElementById(element.id).innerHTML=='')
            {
                document.getElementById(element.id).innerHTML='O';
                Decision('O' , P2);
                document.querySelector('.Turns p').innerHTML=`${P1} Turn`;
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
        document.querySelector('.Heading').style.display="none";
        Value.classList.remove('Make-None');
    });
});
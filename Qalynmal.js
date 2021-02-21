var brideEducation=document.getElementById("Bride's education");
var brideNetWorth=document.getElementById("Bride's family net worth");
var submit=document.getElementById("calculate");
var price=document.querySelector('b');


function education()
{
    s=500;
    if(brideEducation[brideEducation.selectedIndex].text=="Undergraduate degree") {s=s*1.5}
    else if(brideEducation[brideEducation.selectedIndex].text=="College degree") {s=s*1.2;}
    else if(brideEducation[brideEducation.selectedIndex].text=="High school degree") {s=s*1.05;}
    else {s=s*0.9;}
    
    if(brideNetWorth[brideNetWorth.selectedIndex].text=="More than 100,000$") {s=s*2}
    else if(brideNetWorth[brideNetWorth.selectedIndex].text=="Between 50,000$ and 100,000$") {s=s*1.5;}
    else {s=s*1.2;}

    var skill=new Array();
    for(i=0;i<4;i++)
    {
       skill=document.getElementsByName("skill");
       if(skill[i].checked==true)
       {
         s=s+(skill[i].value*1);         
       }
    }
    var age=new Array();
    age=document.getElementsByClassName("age");
    for(i=0;i<3;i++)
    {
        if(age[i].checked==true)
        {
            s=s*(age[i].value*1);
        }
    }
    var reputation=new Array();
    reputation=document.getElementsByName("reputation");
    var reputationcoeff=new Array(0.85,0.9,-200);
    for(i=0;i<3;i++)
    {
      if(i!=2 && reputation[i].checked==true){s=s*reputationcoeff[i];}
      else if(i==2 && reputation[i].checked==true) {s=s+reputationcoeff[i];}
    }
    price.innerText="Bride's price: "+s+"$";
    
}
submit.addEventListener('click',education);


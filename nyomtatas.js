function kalkulal(){
  
    const szelesseg=297;
    const magassag=420;
    const papir=document.getElementById('papirtipus').value;

    let terulet=Math.round((szelesseg*magassag)/10000);    
    let koltseg=terulet*papir;
 
 

    document.getElementById('valasz').style.visibility = "visible";
}


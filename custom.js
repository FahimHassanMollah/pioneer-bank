document.getElementById('login-button').addEventListener('click', event => {
    document.getElementById('full-area').style.display = 'none';
    document.getElementById('trancition-area').style.display = 'block'

});

document.getElementById('deposit').addEventListener('click', event => {
   let depositAmmountString= document.getElementById('deposit-ammount').value;
  let depositAmmount=parseFloat(depositAmmountString);
    document.getElementById('deposit-ammount').value="";
    // console.log(depositAmmount);
    setAmmount('final-deposit-ammount',depositAmmount);
    setAmmount('balance-ammount',depositAmmount);

    
});
document.getElementById('wiidthdrow-button').addEventListener('click', event => {
 let ammount=  parseNumberFloat('wiidthdrow-ammount');

 // setAmmount('final-widthdrow-ammount',ammount,'balance-ammount');
 widthdrow('final-widthdrow-ammount',ammount,'balance-ammount')

});
function widthdrow(id,Ammount,balanceId) {
    let balanceAmmountString=  document.getElementById(balanceId).innerText;
    let balanceAmmount=parseFloat(balanceAmmountString);
    if (Ammount<=balanceAmmount)
    {
        setAmmount(id,Ammount);
        let widthrowAmmountString=  document.getElementById(id).innerText;
        let widthrowAmmount=parseFloat(widthrowAmmountString);
        console.log('hi')
        console.log(balanceAmmount);
        console.log(widthrowAmmount);
        document.getElementById(id).innerText=widthrowAmmount;
        balanceAmmount=balanceAmmount-Ammount;
        document.getElementById(balanceId).innerText=balanceAmmount;
    }

    else {
        alert('not sufficient balance ')
    }


}
function parseNumberFloat(id) {
   let ammountString= document.getElementById(id).value;
    document.getElementById(id).value="";
   return parseFloat(ammountString);


}

function setAmmount(id,depositAmmount) {
    let AmmountString=  document.getElementById(id).innerText;
    let Ammount=parseFloat(AmmountString);
    Ammount+=depositAmmount;
    document.getElementById(id).innerText=Ammount;
}
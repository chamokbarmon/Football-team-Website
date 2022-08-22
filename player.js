const arr = [];
function btnClick(btn) {
 
    const playerName = btn.parentNode.children[0].innerText;
    
    const playerNameId = document.getElementById('orderList');
    playerNameId.innerHTML ="";
   
    const obj = {
        playerName : playerName 
    }
    arr.push(obj);
    for(let i =0; i<arr.length; i++){
        const name  =arr[i].playerName;
        const ol = document.createElement('or');
        ol.innerHTML=`
        <li>${name}</li>
        `;
       playerNameId.appendChild(ol); 
    }
    if(arr.length > 5){
        alert('you selected only five player ');
        return ;
      }    
      else {
         playerNameId.appendChild(arr);

      } 
}

document.getElementById('cal-btn').addEventListener('click',function(){
 const calInput = document.getElementById('cal-input');
 const calInputValue = calInput.value ;
 const calInputValueNumber  = parseFloat(calInputValue);

})



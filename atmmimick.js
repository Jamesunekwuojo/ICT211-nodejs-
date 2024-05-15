let atm_prompt = [1, 2, 3, 4, 5];
for(let i =0; i<atm_prompt.length; i++){
    if(atm_prompt[i]==1){
        console.log(`Press ${atm_prompt[i]} for TRANSFER`);

    } else if(atm_prompt[i]==2){
        console.log(`Press ${atm_prompt[i]} to PURCHASE AIRTIME`);
    }  else if(atm_prompt[i]==3){
        console.log(`Press ${atm_prompt[i]} to CHECK BALANCE`);
    } else if(atm_prompt[i]==4){
        console.log(`Press ${atm_prompt[i]} for SUBSCRIPTION`);
    } else {
        console.log(`Press ${atm_prompt[i]} to WITHDRAW`);
    }
   
    

}



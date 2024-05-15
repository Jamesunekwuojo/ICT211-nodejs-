// let atm_prompt = [1, 2, 3, 4, 5];
// for(let i =0; i<atm_prompt.length; i++){
//     if(atm_prompt[i]==1){
//         console.log(`Press ${atm_prompt[i]} for TRANSFER`);

//     } else if(atm_prompt[i]==2){
//         console.log(`Press ${atm_prompt[i]} to PURCHASE AIRTIME`);
//     }  else if(atm_prompt[i]==3){
//         console.log(`Press ${atm_prompt[i]} to CHECK BALANCE`);
//     } else if(atm_prompt[i]==4){
//         console.log(`Press ${atm_prompt[i]} for SUBSCRIPTION`);
//     } else {
//         console.log(`Press ${atm_prompt[i]} to WITHDRAW`);
//     }
   
    

// }

const readline = require('readline');

const atm_prompt = [1, 2, 3, 4, 5];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
console.log(`Press 1 for Transfers
Press 2 to Purchase Airtime
Press 3 to Check Balance
Press 4 for Subscriptions
Press 5 for Withdrawals

`)

rl.question('Enter Digit for Transactions: ', (answer) => {
  const choice = parseInt(answer);
  if (atm_prompt.includes(choice)) {
    if (choice === 1) {
      console.log(`You pressed ${choice}. TRANSFER`);
    } else if (choice === 2) {
      console.log(`You pressed ${choice}. PURCHASE AIRTIME`);
    } else if (choice === 3) {
      console.log(`You pressed ${choice}. CHECK BALANCE`);
    } else if (choice === 4) {
      console.log(`You pressed ${choice}. SUBSCRIPTION`);
    } else {
      console.log(`You pressed ${choice}. WITHDRAW`);
    }
  } else {
    console.log('Incorrect Digit Entered! Range is between 1-5');
  }
  rl.close();
});




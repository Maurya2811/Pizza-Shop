// Network Call Code

import { URL } from "../utils/constants.js";
async function makeNetworkCall(){
//    const promise = fetch(URL);
//    console.log('Promise is',promise);
//    promise.then(response=>{
//          console.log('response is',response);
//         const promise2 = response.json(); 
//         promise2.then('Data is',data).catch(e=>console.log('JSON parse Error',e))
//    }).catch(function(err){
//       console.log(err);
//    });
//    console.log('Good Bye');
   try{
       const response = await fetch(URL);
       const object = await response.json();
       return object; // Wrap in Promise
   }catch(err){
    console.log('Some Prolem in API CALL',err);
    throw err;
   }
}
export default makeNetworkCall;
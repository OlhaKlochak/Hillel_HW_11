 "use strict";
/**
Перед вами список полів. Це можна сказати пряме посилання на кожне із полів форми.
Якщо ви додасте до змінної .value (fineNumber.value) то отримаєте значення
яке зберігається в цьому полі.
 */
let fineNumber = document.getElementById("fineNumber");
let passport = document.getElementById("passport");
let creditCardNumber = document.getElementById("creditCardNumber");
let cvv = document.getElementById("cvv");
let amount = document.getElementById("amount");
let buttonSubmit = document.getElementById("payFine");

//Ця зміна містить всі дані які в нас зберігаються у файлі data
let DB = data.finesData;

   function payFine(){
    let fineMatch = DB.find(fine=>fine['номер']===fineNumber.value);
    if(!fineMatch){
        alert("Number does not match");
        return;
    }

    if(fineMatch['сума']!==parseInt(amount.value)){
        alert("Amount does not match");
        return;
    }
    let passportRegex = /^[A-Z]{2}\d{6}$/;
    if(!passportRegex.test(passport.value)){
        alert ("Invalid passport number");
        return;
    }
    let creditCardRegex = /^\d{16}$/;
    if(!creditCardRegex.test(creditCardRegex.value)){
        alert("Invalid credit card number");
        return;
    }
    let cvvRegex = /^\d{3}$/;
    if(!cvvRegex.test(cvv.value)){
        alert("Invalid CVV");
        return;
    }
    DB=DB.filter(fine=>fine['сума']!==fineMatch['номер']);
    alert("Fine successfully paid!");
  
   }
   

    
        // Виконати оплату та видалити об'єкт з DB
        // deleteFine();
     
      
      
        buttonSubmit.addEventListener('click', payFine); 
        
       
        function deleteFine(fineNumber) {
            finesData = finesData.filter(item => item.номер !== fineNumber);
        }
buttonSubmit.addEventListener('click',payFine);
function payFine(){

}
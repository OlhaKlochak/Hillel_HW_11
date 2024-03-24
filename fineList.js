"use strict";
window.fineList = {
    searchFines : searchFines
}


let DB = data.finesData;

    function searchFines(searchKey){
        let searchResult;
        if(searchKey=='Перевищення швидкості' ||searchKey=='Невірне паркування'||searchKey=='Їзда у не тверезому стані'){
            
            searchResult = DB.filter(item => item.тип === searchKey);

        }
        else{
            
            searchResult = DB.filter(item => item.номер === searchKey);
        }
        
        return searchResult;
    }
       



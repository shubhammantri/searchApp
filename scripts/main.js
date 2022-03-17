import { setSearchFocus } from "./searchBar";
import {getSearchTerm} from "./dataFunction";

document.addEventListener("readystatechange",(event)=>{
    if(event.target.readyState==="complete"){
        initApp();
    }

});

const initApp=()=>{
    //set focus
    setSearchFocus();
    //3 listener clear text

    const form =document.getElementById("searchBar");
    form.addEventListener("submit",submitThesearch);
};

//procedural function

const submitThesearch=(event)=>{
    event.preventDefault();
    //delete search results
    //process the search
    processTheSearch();
    //set focus
    setSearchFocus();
};
//procedural
const processTheSearch=async()=>{
    //clear stat line
    const searchTerm=getSearchTerm();
    if(searchTerm==="") return;
    const resultArray = await retrieveSearchResults(searchTerm);
}
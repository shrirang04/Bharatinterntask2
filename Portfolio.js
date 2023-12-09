et tabLinks = document.getElementsByClassName("tab-links");
let tabContainers = document.getElementsByClassName("tab-container");
function opentab (tabname){
 for(tabLink of tabLinks){
 tabLink.classList.remove("active-link");
 }
 for(tabContainer of tabContainers){
 tabContainer.classList.remove("active-tab");
 }
 event.currentTarget.classList.add("active-link");
 document.getElementById(tabname).classList.add("active-tab");
}

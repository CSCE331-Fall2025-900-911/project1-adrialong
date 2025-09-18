function toggleStyleSheet(){
    // Task 1
    // Steps
    // 1 (a) Get style element by ID (hint: getElementById)
   var styElem = document.getElementById("styleASheet");

    // 1 (b) Check the current stylesheet file name. (hint: element.getAttribute)
   var currStyleSheet = styElem.getAttribute("href");

    // 1 (c) Determine new stylesheet file name
   var newSheet;
   if (currStyleSheet == "style-a.css"){
      newSheet = "style-b.css";
   }
   else{
      newSheet = "style-a.css";
   }

    // 1 (d) replace stylesheet with new stylesheet (hint: element.setAttribute)
   styElem.setAttribute("href", newSheet);

    // TASK 2
    // 2 (d) For persistence when page is refreshed. save new stylesheet name to localStorage
    // hint: localStorage.setItem(name, value)
    localStorage.setItem("currStyleSheet", newSheet);

}


window.onload = function(){
    // TASK 2
    // TODO: Make the last div color persist even when someone refreshes the page.

    // Steps
    // 2 (a) get stylesheet name from local storage hint: localStorage.getItem(name)
   var saved = localStorage.getItem("currStyleSheet");
    // 2 (b) get html style element by ID
   var styElem = this.document.getElementById("styleASheet");
    // 2 (c) replace href attribute of html element.
   if (saved){
      styElem.setAttribute("href", saved);
   }
}
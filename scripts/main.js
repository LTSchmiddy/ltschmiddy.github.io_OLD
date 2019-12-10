"use strict";

// if (!String.prototype.endsWith) {
//     String.prototype.endsWith = function(searchString, position) {
//         var subjectString = this.toString();
//         if (typeof position !== 'number' || !isFinite(position)
//             || Math.floor(position) !== position || position > subjectString.length) {
//             position = subjectString.length;
//         }
//         position -= searchString.length;
//         var lastIndex = subjectString.indexOf(searchString, position);
//         return lastIndex !== -1 && lastIndex === position;
//     };
// }
//
// console.log("IE Fixes loaded...");



// ============== Global Variables: ==========================
// ****** Header Config: ******
const blinkerCursorUpdateTime = 500;
const blinkerCursorTagName = "blinkingUnderscore";
const blinkerCursorCharacter = "_";
const PageTitleSuffix = " - Alex Schmid";
let blinkerCursorElement = null;

// let pageName = "";
// let pageId = "";


const navbarEntries = {
    // "Home": "old_index.html",
    "Table of Contents": "index.html",
    "About Me": "introduction.html",
    "Contract": "contract.html",
    "My Brand": "my_brand.html",

};


let MarkdownConverter = new showdown.Converter();



// ============== Global Methods: ==========================


function GoToPage(nextPage) {
    window.location.href = nextPage;
}

// Construct Page
function loadHeader(pathToRoot) {
    // $('header').html("<div id=\"headerNameArea\">\n" +
    //     "<h1>&gt;&gt;Trove Media Library Manager<span id=\"blinkingUnderscore\"></span></h1>\n" +
    //     "</div>");

    console.log(pathToRoot + "components/header.html");
    $.get(pathToRoot + "components/header.html", {}, function(data, status){

        // console.log(data);
        $('header').html(data);
    });


}

function loadFooter(pathToRoot) {
    // $('footer').html();
    console.log(pathToRoot + "components/header.html");
    $.get(pathToRoot + "components/footer.html", {}, function(data, status){

        let returnData = data.toString().replace("__ROOT-FOR-HTML-BUTTON__", pathToRoot).replace("__ROOT-FOR-CSS-BUTTON__", pathToRoot);

        // console.log(data);
        $('footer').html(returnData);
    });
}



function assembleNavbar(pageId, pathToRoot) {
    let navbar = $("nav");

    let retVal = "";

    console.log(navbarEntries);

    Object.entries(navbarEntries).forEach(i => {
        console.log(pathToRoot);

        if (pageId === i[0]) {
            retVal += "<a class=\"SelectedPage\" href ='" + pathToRoot + i[1] + "'>" + i[0] + "</a> ";
        }
        else {
            retVal += "<a class=\"UnselectedPage\" href ='" + pathToRoot + i[1] + "'>" + i[0] + "</a> ";
        }

    });

    // console.log("Assembling Navbar");
    // console.log(retVal);

    navbar.html(retVal);
}


// ****** Header Methods: ******
function blinkHandlerOn () {

    if (blinkerCursorElement != null) {
        blinkerCursorElement.innerHTML = blinkerCursorCharacter;
    } else {
        blinkerCursorElement = document.getElementById(blinkerCursorTagName);
    }
    setTimeout(function(){ blinkHandlerOff(); }, blinkerCursorUpdateTime);
}

function blinkHandlerOff () {
    if (blinkerCursorElement != null) {
        blinkerCursorElement.innerHTML = "";
    } else {
        blinkerCursorElement = document.getElementById(blinkerCursorTagName);
    }
    setTimeout(function(){ blinkHandlerOn(); }, blinkerCursorUpdateTime);
}


// ============== Main Execution: ==========================

$(document).ready(function(){
    let pathToRoot = $('meta[name=pathToRoot]').attr("content");
    let pageId = $('meta[name=pageId]').attr("content");


    loadHeader(pathToRoot);
    loadFooter(pathToRoot);

    blinkHandlerOn();
    let mdSections = $(".markdown");

    assembleNavbar(pageId, pathToRoot);

});
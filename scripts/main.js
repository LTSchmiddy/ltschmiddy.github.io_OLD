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
function loadHeader() {
    $('header').html("<div id=\"headerNameArea\">\n" +
        "<h1>&gt;&gt;Trove Media Library Manager<span id=\"blinkingUnderscore\"></span></h1>\n" +
        "</div>");

}

function loadFooter(pathToRoot) {
    $('footer').html("<div id=\"FooterContent\">\n" +
        "© 2019 - designed by LT_Schmiddy (Alex Schmid). <br/><br/>\n" +
        "<a href=\"http://validator.w3.org/check?uri=referer\" target=\"_blank\">\n" +
        "<img src=\"" + pathToRoot + "images/valid_html5.gif\" alt=\"Validate HTML!\"></a>\n" +
        "<a href=\"http://jigsaw.w3.org/css-validator/check/referer\" target=\"_blank\">\n" +
        "<img src=\"" + pathToRoot + "images/vcss-blue.gif\" alt=\"Validate CSS!\"></a>\n" +
        "</div>");


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

    console.log("Assembling Navbar");
    console.log(retVal);

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


    loadHeader();
    loadFooter(pathToRoot);

    blinkHandlerOn();
    let mdSections = $(".markdown");

    assembleNavbar(pageId, pathToRoot);

});
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
const HeaderPath = "global_content/header.htms";
const HeaderSelector = "header";
const blinkerCursorUpdateTime = 500;
const blinkerCursorTagName = "blinkingUnderscore";
const blinkerCursorCharacter = "_";

let blinkerCursorElement = null;

// ****** Navbar Config ******
const NavbarSelector = "nav";
const NavbarEntries = [
    ["Home", "index.htmc"],
    ["Course Contract", "contract.md"],
    ["About Me", "introduction"]
];


// ****** Footer Config: ******
const FooterPath = "global_content/footer.htms";
const FooterSelector = "footer";


// ****** Body Config: ******
const DefaultPagePath = "index.htmc";
const PagePathParam = "page";
const PagesDir = "pages/";
const PagesExtension = ".htmc";
const MDPagesExtension = ".md";
const PageTitleElementID = "PageTitle";
const PageTitleSuffix = " - Alex Schmid";
const PageTitleRecheckTime =  50;
const PageContentElementID = "PageContent";
const PageContentElement = document.getElementById(PageContentElementID);

// Parsing Page Config:
const PageConfig_StartParse = "<!--{";
const PageConfig_EndParse = "}-->";

// Page Config Values:
const PageConfig_TitleKey = "Title";
const PageConfig_BackgroundImageKey = "BackgroundImage";


// Page Config Variable:
let PageTitleElement = document.getElementById(PageTitleElementID);
let DefaultPageConfig = {
    "Title": "Home",
    "BackgroundImage": "url('images/BackgroundLarger.jpg')"

};
let PageConfig = {};



// let PageConfigRaw = null;

let MarkdownConverter = new showdown.Converter();


// ****** Setting Derived Globals: ******
const PageTitleElementSelector = "#" + PageTitleElementID;
const PageContentElementSelector = "#" + PageContentElementID;
let PagePath = DefaultPagePath;



// ============== Global Methods: ==========================
// ****** Generic Methods: ******
function getUrlVars() {
    let vars = {};
    let parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}

function getUrlParam(parameter, defaultvalue){
    let urlparameter = defaultvalue;
    if(window.location.href.indexOf(parameter) > -1){
        urlparameter = getUrlVars()[parameter];
    }
    return urlparameter;
}

function GoToPage(nextPage) {
    window.location.href = "_index.html?page=" + nextPage;
}


// ****** Header Methods: ******
function LoadHeader() {
    $(HeaderSelector).load(HeaderPath);
}

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

// ****** Navbar Methods: ******
function AssembleNavbar() {
    let retVal = "";

    for (let i = 0; i < NavbarEntries.length; i++) {
        if (NavbarEntries[i][1] == PagePath){
            retVal += "<button class=\"SelectedPage\" onclick=\"GoToPage('" + NavbarEntries[i][1] + "')\" >" + NavbarEntries[i][0] + "</button> ";
            // retVal += "<button class=\"SelectedPage\" href=\"_index.html?page=" + NavbarEntries[i][1] +"\">" + NavbarEntries[i][0] + "</button> ";
        } else {
            retVal += "<button class=\"UnselectedPage\" onclick=\"GoToPage('" + NavbarEntries[i][1] + "')\" >" + NavbarEntries[i][0] + "</button> ";
            // retVal += "<button class=\"UnselectedPage\" href=\"_index.html?page=" + NavbarEntries[i][1] +"\">" + NavbarEntries[i][0] + "</button> ";
        }
    }

    $(NavbarSelector).html(retVal);
}


// ****** Footer Methods: ******
function LoadFooter() {
    $(FooterSelector).load(FooterPath);

    // let text = '#### hello, markdown!';
    // $(FooterSelector).html(converter.makeHtml(text));

}


// ****** Page Methods: ******
function DetermineCurrentPage () {
    PagePath = getUrlParam(PagePathParam, DefaultPagePath);
    // alert(PagePath);
}

function LoadCurrentPage(){
    LoadPage(PagePath);
}

function GetPageConfig(key){
    if (PageConfig.hasOwnProperty(key)) {
        return PageConfig[key];
    } else {
        return DefaultPageConfig[key];
    }
}


function LoadPage(pathToPage){
    // $(PageElementSelector).load(PagesDir + pathToPage + PagesExtension);

    let usePagePath = PagesDir + pathToPage;

    let isMD = false;


    if (usePagePath.endsWith(MDPagesExtension)){
        isMD = true;
    } else if (usePagePath.endsWith(PagesExtension)){
        isMD = false;
    } else {
        usePagePath += PagesExtension;
        isMD = false;
    }



    let PageConfigRaw = $.post(usePagePath, function(data, status){

        // if (status != "success") {
        //     alert("Something went wrong in loading your page. Check the Javascript console for more information.")
        // }
        console.log("JQ executed");

        let rawConfig = data.substring(data.indexOf(PageConfig_StartParse) + PageConfig_StartParse.length - 1, data.indexOf(PageConfig_EndParse) + 1);
        PageConfig = JSON.parse(rawConfig);
        // console.log(status);
        // console.log(PageConfig);

        ConfigCurrentPage();

        if (isMD){
            $(PageContentElementSelector).html(MarkdownConverter.makeHtml(data));
        } else {
            $(PageContentElementSelector).html(data);
        }

        // alert("Data: " + rawConfig + "\nStatus: " + status);
    });
    console.log("JQ should have executed...");

}

function ConfigCurrentPage() {

    let useTitle = GetPageConfig(PageConfig_TitleKey);
    document.title = useTitle + PageTitleSuffix;
    updateOnScreenTitle(useTitle);

    document.body.style.backgroundImage = GetPageConfig(PageConfig_BackgroundImageKey);

}




function updateOnScreenTitle(newTitle) {
    let PageTitleElement = document.getElementById(PageTitleElementID);

    if (PageTitleElement == null) {
        setTimeout(function(){ updateOnScreenTitle(newTitle); }, PageTitleRecheckTime);
    } else {
        $(PageTitleElementSelector).html(newTitle);
    }

}




// ============== Main Execution: ==========================

$(document).ready(function(){
    DetermineCurrentPage();
    // LoadHeader();
    blinkHandlerOn();
    AssembleNavbar();
    // LoadFooter();

    if (PageContentElement != null) {
        // DetermineCurrentPage();
        LoadCurrentPage();
        // console.log("Page should have loaded...");
    } else {
        updateOnScreenTitle($(HeaderSelector).html());
    }


});
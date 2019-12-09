<?php
require ("NavbarEntry.php");

$pages = array(
    new NavbarEntry("home", "Home", "_index.php"),
    new NavbarEntry("contract", "Contract","contract.php"),
    new NavbarEntry("about me", "About Me","introduction.php"),
    new NavbarEntry("my brand", "My Brand", "my_brand.php"),
    new NavbarEntry("table of contents", "Table of Contents", "table_of_contents.php")
);


//function assembleNavbar($thisPageId) {
function assembleNavbar($thisPageId, $pathToRoot) {
    global $pages;

    $retVal = "";

    for ($i = 0; $i < count($pages) ; $i++) {

        if ($pages[$i]->pageId == $thisPageId){
            $retVal = $retVal . "<a class=\"SelectedPage\" href ='" . $pathToRoot . "/" . $pages[$i]->path . "'>" . $pages[$i]->navbarName . "</a> ";
//            $retVal = $retVal . "<button class=\"SelectedPage\" onclick=\"GoToPage('" . $pages[$i]->path ."')\" >" . $pages[$i]->navbarName . "</button> ";
            // retVal += "<button class=\"SelectedPage\" href=\"_index.html?page=" + NavbarEntries[i][1] +"\">" + NavbarEntries[i][0] + "</button> ";
        } else {
            $retVal = $retVal . "<a class=\"UnselectedPage\" href ='" . $pathToRoot . "/" . $pages[$i]->path . "'>" . $pages[$i]->navbarName . "</a> ";
//            $retVal = $retVal . "<button class=\"UnselectedPage\" onclick=\"GoToPage('" . $pages[$i]->path . "')\" >" . $pages[$i]->navbarName . "</button> ";
            // retVal += "<button class=\"UnselectedPage\" href=\"_index.html?page=" + NavbarEntries[i][1] +"\">" + NavbarEntries[i][0] + "</button> ";
        }
    }



    return $retVal;
}

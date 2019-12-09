<?php

require ("AssignmentEntry.php");

$assignmentsArray = array(
    new AssignmentEntry("codeplay", "Codeplay - JS Console", "code_play-js_console"),
    new AssignmentEntry("swtl_1_10", "Smarter Way to Learn: Chapeters 1 - 10", "swtl/swtl_1_10")
);

function makeTocList() {
    global $assignmentsArray;
    $retVal = "";

    for ($i = 0; $i < count($assignmentsArray); $i++){
        $retVal .= "<li><a href=\"assignment_view.php?path=" . $assignmentsArray[$i]->assignmentPath . "\">". $assignmentsArray[$i]->assignmentName . "</a></li>\n";
    }

    return $retVal;
}

function getAssignmentByPath($parPath){
    global $assignmentsArray;

    for ($i = 0; $i < count($assignmentsArray); $i++) {
        if ($assignmentsArray[$i]->assignmentPath == $parPath){
            return $assignmentsArray[$i];
        }

    }

    return null;
}
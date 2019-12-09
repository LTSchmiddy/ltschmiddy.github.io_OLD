<?php
require("global_content/master.php");
require("global_content/assignment_repo.php");

$assignment = $_GET['path'];
//echo $assignment;

$thisAssignment = getAssignmentByPath($assignment);
if ($thisAssignment != null){
    beginPage($thisAssignment->assignmentName, $thisAssignment->assignmentId, ".");
}

else {
    beginPage("Assignment", "assignment", ".");
}




require("assignments/" . $assignment . ".php");
?>



<?php
endPage(".");
?>

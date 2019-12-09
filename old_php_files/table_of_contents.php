<?php
    require("global_content/master.php");
    beginPage("Table of Contents", "table of contents", ".");
require("global_content/assignment_repo.php")
?>

<h2>
    Alex's Web115 Assignments - Table of Contents:
</h2>

<ol id="assignment-toc-list">
<!--    <li><a href="assignments/code_play-js_console.php">Code Play - JS Console</a></li>-->
<!--    <li><a href="assignment_view.php?path=code_play-js_console">Code Play - JS Console</a></li>-->
<?php
    echo makeTocList();
?>
</ol>


<?php
    endPage(".");
?>

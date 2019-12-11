"use strict";


function checkForPHP() {
    $.get("cgi-bin/php_version_info.php", {}, function(data, status) {
        console.log(data);
    });
}


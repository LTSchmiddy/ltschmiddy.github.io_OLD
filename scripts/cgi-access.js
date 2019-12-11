"use strict";



function checkForPHP(successFunction, failFunction) {
    console.log("Starting PHP Check...");
    return $.get("cgi-bin/php_version_info.php", {}, function(data, status) {
        if (status !== 'success'){
            return false;
        }

        console.log(data);

        if (data.toString().startsWith("<!DOCTYPE html PUBLIC")) {
            successFunction();
        } else {
            failFunction();
        }


    }).then(result => {
        console.log("PHP Check Succeeded");
    }, result => {
        console.log('PHP Check Failed');
    });
}


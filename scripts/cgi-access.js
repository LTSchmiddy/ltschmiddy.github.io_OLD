"use strict";



function checkForPHP(pathToRoot, successFunction, failFunction) {
    console.log("Starting PHP Check...");
    return $.get(pathToRoot + "php_version_info.php", {}, function(data, status) {
        if (status !== 'success'){
            return false;
        }

        // console.log(data);

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


function cgi_ListRootDir(pathToRoot, callback) {
    $.get(pathToRoot + "ls_root.php", {}, function(rawData, status) {
        let data = JSON.parse(rawData);
        console.log(data);
        callback(data);
    });
}

function assembleRootFileList(pathToRoot, data, fileListId) {
    let linkList = $("#" + fileListId);
    let retVal = "";

    for (let i = 0; i < data["files"].length; i++) {
        let addr = data["files"][i];

        retVal += "<li><a href='" + pathToRoot + addr + "'>" + addr + "</a></li>";
    }


    linkList.html(retVal);
}

function assembleRootDirList(pathToRoot, data, dirListId) {
    let linkList = $("#" + dirListId);
    let retVal = "";

    for (let i = 0; i < data["dirs"].length; i++) {
        let addr = data["dirs"][i];

        retVal += "<li><a href='" + pathToRoot + addr + "'>" + addr + "</a></li>";
    }


    linkList.html(retVal);
}



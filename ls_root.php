<?php

$pathToRoot = "./";

$dirCont = scandir($pathToRoot);

$retVal = [
    "dirs" => [],
    "files" => []
];

for ($i = 0; $i < count($dirCont); $i++) {

    if (is_dir($pathToRoot . $dirCont[$i])){

        array_push($retVal["dirs"], $dirCont[$i]);
    }
    else {
        array_push($retVal["files"], $dirCont[$i]);
    }

}



echo json_encode($retVal);
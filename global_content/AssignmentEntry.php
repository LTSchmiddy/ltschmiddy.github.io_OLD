<?php


class AssignmentEntry {
    public $assignmentName;
    public $assignmentId;
    public $assignmentPath;
    function __construct($parId, $parName, $parPath) {
        $this->assignmentId = $parId;
        $this->assignmentName = $parName;
        $this->assignmentPath = $parPath;
    }

    public function getPageId(){
        return $this->assignmentId;
    }
}
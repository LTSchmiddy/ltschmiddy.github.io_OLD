<?php


class NavbarEntry {
    public $navbarName;
    public $pageId;
    public $path;
    function __construct($parPageId, $parNavbarName, $parPath) {
        $this->pageId = $parPageId;
        $this->navbarName = $parNavbarName;
        $this->path = $parPath;
    }

    public function getPageId(){
        return $this->pageId;
    }
}
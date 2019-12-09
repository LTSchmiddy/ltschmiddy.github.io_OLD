<?php
require("navbar.php");

function beginPage($pageName, $pageId, $pathToRoot) {
    echo "
<!DOCTYPE html>
<html lang=\"en\">
<head>
    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">

    <!--Setting Main Stylesheet:-->
    <link href=\"https://fonts.googleapis.com/css?family=Ubuntu&display=swap\" rel=\"stylesheet\">
    <link rel=\"stylesheet\" type=\"text/css\" href=\"" . $pathToRoot . "/styles/default.css\">
    <!--Loading JS Libraries:-->
    
    
    <!-- <script src=\"" . $pathToRoot . "/scripts/lib/jquery-3.3.1.js\"></script> -->    
    <!-- <script src=\"" . $pathToRoot . "/scripts/lib/showdown/dist/showdown.js\"></script> -->
    
    <script src=\"" . $pathToRoot . "/scripts/bower_components/showdown/dist/showdown.js\"></script>
    <script src=\"" . $pathToRoot . "/scripts/bower_components/jquery/dist/jquery.js\"></script>
    <script src=\"" . $pathToRoot . "/scripts/cgi-access.js\"></script>
    <script src=\"" . $pathToRoot . "/scripts/ie_fixes.js\"></script>

    <!--Page Title:-->
    <title>" . $pageName . " - Alexander Paul Schmid</title>


</head>

<body>
    
    <!--<header class=\"contBox\"> 
        <div id=\"headerNameArea\">
            <h1>&gt;&gt; Alexander Paul Schmid - " . $pageName . "<span id=\"PageTitle\"></span><span id=\"blinkingUnderscore\"></span></h1>
    </div> -->

    <header class=\"contBox\"> 
        <div id=\"headerNameArea\">
            <!-- <h1>&gt;&gt;Trove - " . $pageName . "<span id=\"PageTitle\"></span><span id=\"blinkingUnderscore\"></span></h1> -->
            <h1>&gt;&gt;Trove Media Library Manager<span id=\"blinkingUnderscore\"></span></h1>
        
        </div>   
    
    </header>
    <nav class=\"contBox\">" . assembleNavbar($pageId, $pathToRoot) . "</nav>
    <main class=\"contBox\">
    <!-- <h2>" . $pageName . "</h2> -->
    
    ";
}

function endPage($pathToRoot) {
    echo "
    </main>
    <footer class=\"contBox\">
    
    <div id=\"footerLinks\">
        
            <a href=\"http://students.cpcc.edu/~aschmid3/\">CPCC Webspace</a> || 
            <a href=\"https://github.com/LTSchmiddy/web-115-repo/\">Github</a> || 
            <a href=\"https://ltschmiddy.github.io/\">GitHub Pages</a> || 
            <a href=\"https://www.codecademy.com/profiles/arcPro89767\">Codeacademy</a> || 
            <a href=\"https://www.khanacademy.org/profile/kaid_321518681698777589320894/courses\">Khan Academy</a> || 
            <a href=\"https://jsfiddle.net/user/LT_Schmiddy/fiddles/\">JSFiddle</a> || 
            <a href=\"http://angelfishlabs.net\">Personal Website</a>
        
    </div>
    
        <div id=\"FooterContent\">
            © 2019 - designed by LT_Schmiddy (Alex Schmid). <br/><br/>
        
            <a href=\"http://validator.w3.org/check?uri=referer\" target=\"_blank\">
                <img src=\"" . $pathToRoot . "/images/valid_html5.gif\" alt=\"Validate HTML!\"></a>
            <a href=\"http://jigsaw.w3.org/css-validator/check/referer\" target=\"_blank\">
                <img src=\"" . $pathToRoot . "/images/vcss-blue.gif\" alt=\"Validate CSS!\"></a>
        </div>
    </footer>
    
    <script src=\"" . $pathToRoot . "/scripts/main.js\"></script>

</body>
</html>
";
}

function endPageMD($pathToRoot) {
    echo "
    </main>
    <footer class=\"contBox\">
        <div id=\"FooterContent\">
            © 2019 - designed by LT_Schmiddy (Alex Schmid). <br/><br/>
        
            <a href=\"http://validator.w3.org/check?uri=referer\" target=\"_blank\">
                <img src=\"../images/valid_html5.gif\" alt=\"Validate HTML!\"></a>
            <a href=\"http://jigsaw.w3.org/css-validator/check/referer\" target=\"_blank\">
                <img src=\"../images/vcss-blue.gif\" alt=\"Validate CSS!\"></a>
        </div>
    </footer>
    
    <script src=\"scripts/main.js\"></script>
    <script>
        $('main').html(MarkdownConverter.makeHtml($('main').html()));
    </script>

</body>
</html>
";
}

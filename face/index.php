<?php

$page = "login";
$popup = "";

if(assert($_GET[$page]))
{
    $page = $_GET["page"];
};

switch ($page){
    
    case "profile":
        include "./assets/php/profile_head.php";
        include "./assets/php/profile.php";
        include "./assets/php/popups/change_info.php";
        include "./assets/php/popups/submit_post.php";
        include "./assets/php/profile_footer.php";
        break;
    
    default:
        include "./assets/php/login_head.php";
        include "./assets/php/login.php";
        break;
};
?>
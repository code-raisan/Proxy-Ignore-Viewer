<?php
header("text/plain");
header("Access-Control-Allow-Origin: *");
echo base64_encode(file_get_contents($_GET["url"]));
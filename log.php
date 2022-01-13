<?php

header('Access-Control-Allow-Origin: *');

$loggerFile = "logs.txt";

$data = $_POST['data'];

// Open and append to file
$file = fopen($loggerFile, 'a');
fwrite($file, "$data\n");

fwrite($file, "-----------------------------------------------------\n");
fclose($file);

<?php
function fibonacci($num) {
    
    if($num == 0 or $num == 1) {
        $output = $num;
    } else {
        $output = fibonacci($num-1) + fibonacci($num-2);
    }
    return $output;
}

echo "Please input a number: ";
$input = readline();

if($input > 0 and $input < 21){
    for($i = 0; $i < $input; $i++) {
    echo fibonacci($i) . ', ';
    };
} else {
    echo "Number out of range";
}
?>
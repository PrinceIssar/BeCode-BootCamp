<?php
$buttons = [
    'easy' => [
        2 => [3, 6],
        3 => [2, 3],
        4 => [2, 5],
        5 => [2, 5]
    ],
    'medium' => [
        5 => [6, 11],
        6 => [4, 12]
    ],
    'chapter 7' => [7 => [1, 7]],
    'hard' => [
        8 => [2, 9],
        9 => [2, 5],
    ]
];
foreach ($buttons AS $label => $inner) {
    echo '<a href="?button='. $label .'">'. $label .'</a><br />';

    if($_GET['button'] === $label) {
        $chapter = array_rand($inner);
        $excercise = rand($inner[$chapter][0], $inner[$chapter][array_key_last($inner[$chapter])]);
        $randomItem = $chapter . '.'. $excercise;
    }
}
if(isset($randomItem)) {
    echo '<h3>'. $randomItem .'</h3>';
}

?>
<script>

    [1, 2].find()

</script>

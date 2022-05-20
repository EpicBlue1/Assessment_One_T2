<?php

    include 'db_connection.php';

    header( "Access-Control-Allow-Origin: * " );
    header( "Access-Control-Allow-Headers: * ");
    // header('Access-Control-Allow-Origin', 'localhost:3000');
    // header(
    //     'Access-Control-Allow-Headers',
    //     'Origin, X-Requested-With, Content-Type, Accept'
    //   );

    $request_body = file_get_contents( 'php://input' );
    $data = json_decode( $request_body );

    $pet_name = $data->pet_name;
    $species = $data->species;
    $gender = $data->gender;
    $age = $data->age;
    $chip_id = $data->chip_id;
    $owner_name = $data->owner_name;
    $owner_id= $data->owner_id;
    $export_origin = $data->export_origin;
    $export_destination = $data->export_destination;



    $sql = "INSERT INTO `pets` (`id`, `pet_name`, `species`, `gender`, `age`, `chip_id`, `owner_name`, `owner_id`, `export_Origin`, `export_Destination`) VALUES (NULL, '$pet_name', '$species', '$gender', '$age', '$chip_id', '$owner_name', '$owner_id', '$export_origin', '$export_destination');";
    $result = mysqli_query($conn, $sql);

    if( !$result ) {
        echo ("Error Description: " . mysqli_error($conn));
    } else {
        echo ("Pet Added!");
    }

?>
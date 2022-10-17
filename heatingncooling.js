let actualTemp = 60;

let desiredTemp = 75;

if(actualTemp > desiredTemp) {
    console.log('Run A/C');
}
else if(actualTemp === desiredTemp) {
    console.log('Standby');
}

else{
    console.log('Run heat');
}
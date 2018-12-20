
var condition = true;

if(condition){
    //  Do something
    console.log("Bedingung ist wahr");
}
else if(condition && true){

}
else{
    // Do Something else
    console.log("Bedingung ist falsch");
}

var color = "green";

/**
 * switches through the value of a given variable and
 * executes only if it matches
 */
switch (color) {
    case 'red':
            console.log('Color is red');
        break;

    case 'blue':
        console.log('Color is blue');
        break;

    default:
        console.log('Color is something else');
        break;
}
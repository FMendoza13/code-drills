var userConfirm;

document.onkeyup = function(input){

    var userKey = input.key.toLocaleLowerCase();
    console.log(userKey);

    if (userKey === "h") {

        userConfirm = confirm("Would you like to change the behavior of the 'k' button?");
    }

    if (userKey === "k") {
        alert("Hello");
    
    if (userConfirm === true) {
    } else {
        alert("No Thanks");
    }
}
}


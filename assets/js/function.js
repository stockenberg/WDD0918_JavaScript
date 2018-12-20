/**
 * Example Function with optional age parameter
 * @param firstname
 * @param lastname
 * @param age
 */
function sayFirstname (firstname, lastname, age) {
    age = (age === "undefined") ? null : age;

    console.log("Du bist " + firstname + " " + lastname + " und ist " + age + " Jahre alt");
}

/**
 * Function Call
 */
sayFirstname('Hans', 'Müller', 12);

/**
 * Example function with n parameters
 * @param param
 */
function hasManyArgs(...param) {
    console.log(param);
}

/** function call */
hasManyArgs(1,2,3,4,5,6,7,8,9,123,123,123,123,123,123);

/**
 * Anonymous function
 */
var anonymous_func = function () {

};

anonymous_func();
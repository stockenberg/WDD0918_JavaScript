/**
 * The object is capable of having properties and methods
 * @type {{firstname: string, lastname: string, sayHello: obj.sayHello}}
 */
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
var obj = {
    firstname: "Marten",
    lastname: "Stockenberg",
    sayYourName: function () {
        console.log("My Name is: " + this.firstname + " " + this.lastname);
    },
    showMeThis: function () {
        console.log(this);
    }
};

/**
 * To retrieve a Value from an object, select the key with the dot syntax
 * arr.key --> value
 */
console.log(
    obj.firstname
);

obj.sayYourName();
obj.showMeThis();

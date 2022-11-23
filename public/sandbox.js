"use strict";
const c = (input) => {
    console.log(input);
};
const logDetails = (uid, item) => {
    c(`${item} has a uid of ${uid}`);
};
const greet = (user) => {
    c(`${user.name} says hello`);
};
const greetAgain = (user) => {
    c(`${user.name} says hello`);
};
logDetails(1234, 'playing card');
greet({ name: 'alie', uid: 1234 });
greetAgain({ name: 'alie', uid: 1234 });

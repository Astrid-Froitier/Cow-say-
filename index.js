const mySelf = require("./information");
const cowsay = require("cowsay");
console.log(cowsay.say({
    text : `I'm ${mySelf.name}, I come from ${mySelf.school} campus`,
    e : "oO",
    T : "u",
}));
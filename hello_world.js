var Constants = require("./constants"); // we import this file

var message = Constants.HELLO_WORLD;

// module.exports means that we export this to the file that "require"´s this file
module.exports = {
  sayHelloToTheWorld: function() {
    var element = document.createElement("h1");
    element.textContent = message;
    document.body.appendChild(element);
  }
};
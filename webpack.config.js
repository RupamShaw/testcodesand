/**
 * ###########################################################################
 * # Webpack is a bundler that will let you import scripts into other files. #
 * # The cool part about this is that you can have as many files as you want #
 * # and webpack will bundle them together into a single file.               #
 * ###########################################################################
 */

// __dirname is a special variable that will always be the path to the directory
// you are currently running this file from

module.exports = {
    context: __dirname, // context means the path to your project directory
    entry: "./examples.js", // entry is the file where your program starts
    output: {
      path: __dirname, // this is where your compiled file will be created
      filename: "bundle.js" // this is the name of the file with all your javascript
    }
  };
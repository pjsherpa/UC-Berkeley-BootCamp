const path = require('path');

module.exports = {
  mode: 'development',
  // entry is out index file
  entry: './src/js/index.js',
  // this is what is being sent to front end and being run on the dist folder
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};

module.exports = {
 entry: './app/index.js',
 output: {
   filename: 'bundle.js',
   path: './compiled'
 },
 devtool: '#inline-source-map',
 module: {
   rules: [
     {
       test: /\.(js|jsx)?$/,
       loader: 'babel-loader', // npm install --save-dev babel-loader
       exclude: /node_modules/,
     },
   ]
 }
}
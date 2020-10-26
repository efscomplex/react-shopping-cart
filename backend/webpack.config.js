const path = require('path')

module.exports = {
   entry: './src',
   output: {
      filename: '[main].boundle.js',
      path: path.resolve(__dirname, './dist'),
   },
   module: {
      rules: [
         {
            test: /\.ts$/,
            use: {
               loader: 'babel-loader',
               options: {
                  presets: ['@babel/preset-env', '@babel/preset-typescript'],
               },
            },
         },
      ],
   },
}

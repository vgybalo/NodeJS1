const path=require('path');
module.exports = {
    entry:{
        app: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname,'build'),
        filename: 'bundle.js'
    },
    module:{
        rules: [{
            test: /\.js?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets:['env']
            }
        }]
    },
}

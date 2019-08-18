const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
const dotenv = require('dotenv');

module.exports = (env) =>{
    const isProduction = env === "production";
    const CSSExtract = new ExtractTextPlugin('style.css');
    const envs = dotenv.config().parsed;

    const envKeys = Object.keys(envs).reduce((prev,next)=>{
        prev[`process.env.${next}`] = JSON.stringify(envs[next]);
        return prev;
    },{});

    return{
      entry: './src/app.js',
      output: {
    	path: path.join(__dirname,'public'),
    	filename: 'bundle.js'
     },
     module: {
      rules: [{
    	loader: 'babel-loader',
    	test: /\.js$/,
    	exclude: /node_modules/
      },{
    	test: /\.s?css$/,
    	use: CSSExtract.extract({
            use: [
                {
                    loader: 'css-loader',
                    options:{
                        sourceMap: true
                    }
                },
                {
                    loader: 'sass-loader',
                    options:{
                        sourceMap: true
                    }
                }
            ]
        })
      }]
     },
     plugins:[
         CSSExtract,
         new webpack.DefinePlugin(envKeys)
     ],
     devtool: isProduction?'source-map':'inline-source-map',
     devServer: {
     	contentBase: path.join(__dirname,'public'),
        historyApiFallback:true,
     }
    };
};

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: './src/index.js',
    mode: 'development',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },
    resolve: {
        alias: {
            "@src": path.resolve(__dirname, "src"),
            "@assets": path.resolve(__dirname, "src/assets"),
            "@fonts": path.resolve(__dirname, "src/assets/fonts"),
            "@modules": path.resolve(__dirname, "src/modules"),
            "@styles": path.resolve(__dirname, "src/styles"),
       }
    },
    devServer: {
        open: true,
        static: [ path.resolve(__dirname, 'build'),
        path.resolve(__dirname, 'bombButton')
        ],
        historyApiFallback: {
            rewrites: [
              { from: /^\/buttons\.html$/, to: '/bombButton/buttons.html' }
            ]
          }
        },
    plugins: [
        new HtmlWebpackPlugin({
            inject: 'body',
            template: './public/index.html'
        }),
        new HtmlWebpackPlugin({
            inject: 'body',
            template: './modules/bombButtons/buttons.html', 
            filename: 'buttons.html',
            //chunks: ['bombButton'], не работает с chanks!!!
            // в конце localhost дописать http://localhost:8080/buttons.html
          }),
          new HtmlWebpackPlugin({
            inject: 'body',
            template: './modules/RockScissorsPaper/rspGame.html', 
            filename: 'rspGame.html',
            //не работает с chanks!!!
            // в конце localhost дописать http://localhost:8080/rspGame.html
          }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            }, 
            {
                test: /\.s[ac]ss$/i,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(png|svg|jpg|gif)$/i,
                use: 
                {
                    loader: 'file-loader'
                }
            
            },

            {
                test: /\.ttf$/i,
                use: 
                [
                    {
                        loader: 'file-loader',
                    }
                ]
            }
        ]
    }
};


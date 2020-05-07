const path = require('path')

const {
    NODE_ENV = 'production'
} = process.env

module.exports = {
    entry: './src/index.ts',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'build')
    },
    mode: NODE_ENV,
    target: 'node',
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: [
                    'ts-loader'
                ]
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.ts']
    }
}
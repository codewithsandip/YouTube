const path = require("path");

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "./dist")
    },
    mode: "none",
    module: {
        rules: [
            {
                test: /\.(jpg|png)$/,
                type: 'asset',
                parser: {
                    dataUrlCondition: {
                        maxSize: 900 * 1024 // 900KB
                    }
                }
            },
            {
                test: /\.txt/,
                type: 'asset/source'
            }
            
        ]
    }
}
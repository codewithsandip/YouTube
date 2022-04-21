# What's Webpack
Webpack is Module Bundler which takes a file as an input and produces a Single or Multiple files as an output.
Example: A page binder.

## Why Webpack?
- Programs are collection of variables, functions and objects.
- Variables, functions and objects are dependent on each other.
- Traditionally we manage dependencies manually.
- Large applications can have several files that needs to be loaded.
> Webpack helps in managing these dependencies automatically and produces fewer number of files as an output.
- Installing webpack: webpack, webpack-cli.
- Run npx webpack command to generate the output.
- You can configure webpack by creating a config file (webpack.config.js).
```
const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist')
    },
    mode: 'none'
};
```

# Loading assets (images, fonts & text files) using Webpack
- You can load different assets like images, fonts & text files using webpack.
- You dont need to download any dependency for that as its built into webpack.
- There are 4 types of assets modules:
1. **asset/resource**: Use to import large files (images) and export them to dist folder by poiting it to the url.
2. **asset/inline**: Use to import small files (svgs) and embed them into the code as data uri.
3. **asset**: Asset type will be decided based on file size. If the file size > 8KB, asset type will be asset/resource else asset/inline. 8KB can be changed too.
4. **asset/source**: Use to import text files and converts it into a JS string.

## Loading images
- We can use asset/resource module.
- Use module array in webpack config:
```
module: {
    rules: [
        {
            test: /\.(png|jpg)$/,
            type: 'asset/resource'
        }
    ]
}
```
- You can use publicPath property to specify the location of resources.
```
const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist'),
        publicPath: 'dist/'
    },
    mode: 'none',
    module: {
        rules: [
            {
                test: /\.(png|jpg)$/,
                type: 'asset/resource'
            }
        ]
    }
};
```

## Loading assets inline as base 64 representation
- Use to load small asset files.
- If bigger files are used it will increase the js bundle size.
```
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
               type: 'asset/inline'
           }
       ]
    }
}
```
- General asset type will swap assets to resource/inline based on file size (8KB).
- File size > 8KB: resource, File size < 8KB: inline.
- Change the default size:
```
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
                       maxSize: 900 * 1024 // 900 KB
                   }
               }
           }
       ]
    }
}
```

## Loading text files as JS strings
```
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
                       maxSize: 900 * 1024 // 900 KB
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
```

# Loading other files (css, sass & handlebar templates) using Webpack Loaders
- Loader like css-loader and style-loader needs be installed using npm
- Loaders are used in reverse order from the array
- Loading css:
```
const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist'),
        publicPath: 'dist/'
    },
    mode: 'none',
    module: {
        rules: [
            {
                test: /\.(png|jpg)$/,
                type: 'asset',
                parser: {
                    dataUrlCondition: {
                        maxSize: 900 * 1024
                    }
                }
            },
            {
                test: /\.txt/,
                type: 'asset/source'
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader', 'css-loader'
                ]
            }
        ]
    }
};
```
- Loading sass:
```
const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist'),
        publicPath: 'dist/'
    },
    mode: 'none',
    module: {
        rules: [
            {
                test: /\.(png|jpg)$/,
                type: 'asset',
                parser: {
                    dataUrlCondition: {
                        maxSize: 900 * 1024
                    }
                }
            },
            {
                test: /\.txt/,
                type: 'asset/source'
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader', 'css-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader', 'css-loader', 'sass-loader'
                ]
            }
        ]
    }
};
```
- Using latest JS features:
```
const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist'),
        publicPath: 'dist/'
    },
    mode: 'none',
    module: {
        rules: [
            {
                test: /\.(png|jpg)$/,
                type: 'asset',
                parser: {
                    dataUrlCondition: {
                        maxSize: 900 * 1024
                    }
                }
            },
            {
                test: /\.txt/,
                type: 'asset/source'
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader', 'css-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader', 'css-loader', 'sass-loader'
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/env'],
                        plugins: ['@babel/plugin-proposal-class-properties']
                    }
                }
            }
        ]
    }
};
```

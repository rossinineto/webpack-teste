## Tutorial
[Freecodecamp](https://www.freecodecamp.org/portuguese/news/como-usar-o-webpack-com-o-react-um-tutorial-detalhado/)

## Detalhe sobre o hot reload

As of React 18, the recommended way to implement hot reloading is by using react-refresh, which works with the ReactDOM.createRoot API and is officially supported by the React team.

Steps to Migrate to react-refresh with Webpack:

1. Uninstall react-hot-loader:

```bash
npm uninstall react-hot-loader
```

2. Install Required Packages:

You need to install react-refresh, @pmmmwh/react-refresh-webpack-plugin, and make sure you have the latest version of react-dom and webpack-dev-server.

```bash
npm install --save-dev @pmmmwh/react-refresh-webpack-plugin react-refresh
```

3. Update webpack.config.js:

Modify your Webpack configuration to use react-refresh:

```javascript
const path = require('path');
const webpack = require('webpack');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  mode: isDevelopment ? 'development' : 'production',
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    hot: true,
    port: 3000,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: [
              isDevelopment && require.resolve('react-refresh/babel')
            ].filter(Boolean),
          },
        },
      },
    ],
  },
  plugins: [
    isDevelopment && new ReactRefreshWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ].filter(Boolean),
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
```

4. Update Your React Entry Point (index.js):

The React entry point should use the ReactDOM.createRoot API as follows:

```javascript
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

const render = (Component) => {
  root.render(
    <React.StrictMode>
      <Component />
    </React.StrictMode>
  );
};

render(App);

if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default;
    render(NextApp);
  });
}
```

Explanation:

React Refresh: This is the modern solution for hot reloading in React and works well with the React 18 createRoot API.
ReactRefreshWebpackPlugin: This Webpack plugin integrates React Refresh into your Webpack build, enabling hot reloading.
isDevelopment: This checks if you're in development mode to conditionally apply hot reloading and related plugins.

Conclusion:

Switching to react-refresh with the ReactRefreshWebpackPlugin is the best way to enable hot reloading in a React project using Webpack, especially if you are using React 18 or later. This approach eliminates the compatibility issues that arise with react-hot-loader.
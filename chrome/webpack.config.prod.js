const { CheckerPlugin } = require('awesome-typescript-loader');
const { join } = require('path');
const { optimize } = require('webpack');

module.exports = {
  mode: 'production',
  entry: {
    contentPage: join(__dirname, 'src/contentPage.ts'),
    serviceWorker: join(__dirname, 'src/serviceWorker.ts'),
    boModal: join(__dirname, 'src/bo-modal.ts'),
  },
  output: {
    path: join(__dirname, '../angular/dist'),
    filename: '[name].js'
  },
  plugins: [new CheckerPlugin(), new optimize.AggressiveMergingPlugin()],
  resolve: {
    extensions: ['.ts', '.js']
  }
};

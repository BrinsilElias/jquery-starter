import { rspack } from '@rsbuild/core';
import { defineConfig } from '@rsbuild/core';

export default defineConfig({
  html: {
    template: './src/app/template.html'
  },
  tools: {
    rspack: {
      plugins: [
        new rspack.ProvidePlugin({
          jQuery: 'jquery'
        })
      ],
      module: {
        rules: [
          {
            test: /\.html$/,
            use: ['html-loader']
          }
        ]
      }
    }
  },
  source: {
    alias: {
      '@': './src',
      '@app': './src/app',
      '@assets': './src/assets'
    }
  }
});

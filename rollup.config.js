import { eslint } from 'rollup-plugin-eslint';
import minify from 'rollup-plugin-babel-minify';

const plugins = [eslint(), minify()];

export default [
  {
    input: 'index.js',
    output: [
      {
        file: 'dist/eslint-config-react.esm.js',
        format: 'esm'
      },
      {
        file: 'dist/eslint-config-react.cjs.js',
        format: 'cjs'
      }
    ],
    plugins
  }
];

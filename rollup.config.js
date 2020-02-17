import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';
import sourcemaps from 'rollup-plugin-sourcemaps';

export default {
  input: 'src/index.tsx',
  output: {
    external: ['apprun'],
    globals: { apprun: 'apprun' },
    file: 'public/index.js',
    format: 'iife',
    sourcemap: true
  },
  plugins: [
    typescript({ tsconfig: "src/tsconfig.json" }),
    terser({warnings: true, module: true, mangle: { properties: { regex: /^__/ }}}),
    sourcemaps(),
  ]
};

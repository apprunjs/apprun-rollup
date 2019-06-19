import { terser } from 'rollup-plugin-terser';
import sourcemaps from 'rollup-plugin-sourcemaps';
import nodeResolve from "rollup-plugin-node-resolve";
import typescript from 'rollup-plugin-typescript2';

export default {
  input: 'src/index.tsx',
  output: {
    file: 'public/index.js',
    format: 'esm',
    sourcemap: true
  },
  plugins: [
    nodeResolve(),
    typescript({ tsconfig: "src/tsconfig.json" }),
    terser({warnings: true, module: true, mangle: { properties: { regex: /^__/ }}}),
    sourcemaps(),
  ]
};

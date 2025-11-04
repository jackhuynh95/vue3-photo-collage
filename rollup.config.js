import vue from "rollup-plugin-vue";
import scss from "rollup-plugin-scss";
import commonjs from "@rollup/plugin-commonjs";

export default [
  {
    input: "src/index.js",
    output: {
      format: "esm",
      file: "dist/library.esm.js",
    },
    plugins: [
      vue(),
      scss({ outputStyle: "compressed" }),
      commonjs(),
    ],
  },
  {
    input: "src/wrapper.js",
    output: {
      format: "iife",
      file: "dist/library.browser.js",
    },
    plugins: [
      vue(),
      scss({ outputStyle: "compressed" }),
      commonjs(),
    ],
  },
  {
    input: "src/index.js",
    output: {
      format: "cjs",
      file: "dist/library.common.js",
    },
    plugins: [
      vue({ template: { optimizeSSR: true } }),
      scss({ outputStyle: "compressed" }),
      commonjs(),
    ],
  },
];

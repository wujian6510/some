module.exports = {
    extends: 'airbnb',
    globals: {
      // 全局变量 document 的报错, false 表示属性不可以被重写
      document: false,
      window: false
    },
    plugins: [
      "react-hooks"
    ],
    rules: {
      'linebreak-style': [0,"error", "windows"],
      'react/jsx-filename-extension': [1, { extensions: ['.jsx', '.js'] }], // 解决 index.js 中不能使用 JSX
      "no-underscore-dangle": [0],//标识符能以_开头或结尾
      'operator-linebreak': [
        'error',
        'after',
        {
          overrides: {
            ':': 'before'
          }
        }
      ],
      'no-tabs':'off',
      'no-debugger':'off',
      'no-mixed-spaces-and-tabs':'off',
      'react/no-array-index-key': [0], //允许使用index作为key
      'react/prefer-stateless-function': [0],
      'max-len': [2, { "code": 150 }], //单行代码最长长度
      "react/prop-types": [0],
      'jsx-a11y/click-events-have-key-events': [0],
      'jsx-a11y/no-static-element-interactions': [0],
      'jsx-a11y/anchor-is-valid': [0],
      'react/destructuring-assignment': [0],
      'react/no-multi-comp': [0], //允许多个组件定义
      'import/no-unresolved': [0],
      "camelcase": [0],
      'no-param-reassign': [0],
      "no-unused-vars": 'off', //关闭模块引入了没有调用的警告
      "import/prefer-default-export":[0],
      "react-hooks/rules-of-hooks": "error",
    },
    parser: 'babel-eslint',
  }

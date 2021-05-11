module.exports = {
  printWidth: 80, // 超过最大值换行
  tabWidth: 2, // 缩进字节数
  useTabs: false,
  semi: false,
  singleQuote: true, // 使用单引号代替双引号
  quoteProps: 'as-needed',
  jsxSingleQuote: false,
  trailingComma: 'none', // 对象最后一项默认格式化会加逗号, 这里取消 none ,  all加上
  bracketSpacing: false,
  jsxBracketSameLine: false,
  arrowParens: 'always',
  htmlWhitespaceSensitivity: 'strict',
  vueIndentScriptAndStyle: true,
  endOfLine: 'auto' // 结尾是 \n \r \n\r auto
}

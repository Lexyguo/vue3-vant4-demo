import antfu from '@antfu/eslint-config'

export default antfu({
  ignores: [
    '.github',
  ],
  formatters: {
    css: true,
  },
})

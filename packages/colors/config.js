const StyleDictionary = require('style-dictionary')

StyleDictionary.registerTransformGroup({
  name: 'js',
  transforms: [
    'attribute/cti',
    'name/cti/kebab',
    'time/seconds',
    'content/icon',
    'size/rem',
    'color/hex',
  ],
})

StyleDictionary.registerTransform({
  name: 'name/remove-prefix',
  type: 'name',
  transformer: (prop) => {
    return prop.name.replace(/^(color-)/, '').replace(/-/g, '')
  },
})

module.exports = {
  source: ['src/**/*.json'],
  platforms: {
    js: {
      header: '',
      transformGroup: 'js',
      transforms: ['name/cti/kebab', 'color/hex', 'name/remove-prefix'],
      files: [
        {
          destination: 'src/colors.ts',
          format: 'javascript/es6',
        },
      ],
      options: {
        showFileHeader: false,
        outputReferences: false,
      },
    },
  },
}

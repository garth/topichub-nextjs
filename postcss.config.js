/* eslint-disable @typescript-eslint/no-var-requires */

module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    ...(process.env.NODE_ENV === 'production'
      ? {
          '@fullhuman/postcss-purgecss': {
            content: ['./pages/**/*.tsx', './src/components/**/*.tsx'],
            whitelist: ['html', 'head', 'body'],
            defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
          },
        }
      : []),
  },
}

const purgecss = require('@fullhuman/postcss-purgecss')({
  // Especifique os caminhos para todos os arquivos de modelo em seu projeto
  content: [
    './src/**/*.html',
    './src/**/*.vue',
    './src/**/*.jsx',
    // etc.
  ],

  // Inclua quaisquer caracteres especiais que você esteja usando nesta expressão regular
  defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
});

module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    ...(process.env.NODE_ENV === 'production' ? [purgecss] : []),
  ],
};

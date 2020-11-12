const path = require('path');
const fs = require('fs');

let ROOT = process.env.PWD;

if (!ROOT) {
  ROOT = process.cwd();
}

const config = {
  // Your website's name, used for favicon meta tags
  site_name: 'Юридические услуги',

  // Your website's description, used for favicon meta tags
  site_description: 'Юридические услуги - мы предоставляем квалифицированные юридические консультации как в офисе так и в телефонном режиме и onlinе.',

  // Your website's URL, used for sitemap
  site_url: 'https://yurist.bachmut.ua',

  // Google Analytics tracking ID (leave blank to disable)
  googleAnalyticsUA: '',

  // The viewport meta tag added to your HTML page's <head> tag
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no, viewport-fit=cover',

  // Source file for favicon generation. 512x512px recommended.
  favicon: path.join(ROOT, '/src/images/favicon.png'),

  // Local development URL
  dev_host: 'localhost',

  // Local development port
  port: process.env.PORT || 8000,

  // Advanced configuration, edit with caution!
  env: process.env.NODE_ENV,
  root: ROOT,
  paths: {
    config: 'config',
    src: 'src',
    dist: 'dist',
  },
  package: JSON.parse(
    fs.readFileSync(path.join(ROOT, '/package.json'), { encoding: 'utf-8' }),
  ),
};

module.exports = config;

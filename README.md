# Sitio web usando WP-Api :sunrise_over_mountains:

Boilerplate de desarrollo ligero, simple, potente y escalable para la creación de sitios web 100% desde el Front-End usando Wordpress únicamente como una API para el Back-End y los contenidos.

![Screenshot](./screenshot.jpg)

#### Manifiesto

Aunque en un principio utilice ReactJs para aprender, la idea es usar sólo Estándares web y javascript crudo. Especialmente en un mundo en el que las herramientas cambian rápidamente es importante no atarse a las modas y centrarse en la base sobre la que todo está construído.

#### Entorno local

- CSS preprocesado en SASS
- NodeJs, NPM y Gulp
  - BrowserSync `gulp.task('watch', ['browser-sync'], function () {...}`
  - Watchify, Babel, Browserify...
- ES6 Module Pattern
- MAMP Pro + Wordpress + WP-Api Plugin

#### Hosting

a) La web puede ser embebida dentro de la carpeta `wp-content/themes` de una instalación y consumir el Json desde "dentro" de Wordpress.

b) La web puede estar alojada estáticamente por ejemplo en gh-pages y hacer las peticiones XMLHttpRequest a la instalación de Wordpress de otro servidor.

#### Performance matters
- Pensada como una Single Page Web App, de manera que reducimos las requests a las mínimas imprescindibles.
- El build incluye minificación, concatenación de js y css.

## Ramas

#### react
(ReactJs sólo para aprender...)

#### raw
Absolutamente todo el código debe estar escrito en JavaScript, cumpliendo el estándar ECMAScript 2015.


## Recursos

- [JavaScript for WordPress Master Course](https://javascriptforwp.com/)
- [WP REST API](http://v2.wp-api.org/)
- [Vanillapress](http://zgordon.github.io/vanillapress/)







*Sergio Forés*

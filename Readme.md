# docdoc

is a tool and work principle designed by precious.

It helps people to document their design process.

Learn more about [docdoc](https://github.com/preciousforever/docdoc-generator)

----------

# docdoc-theme

This repository contains the default theme for the docdoc-generator.
It is based on bootstrap and uses ejs as template language.

## Usage
To use this theme, copy the content of `/theme` folder to your docdoc `/_theme`
folder

## Development

**Disclaimer**: docdoc is under heavy development. All APIs about to change.

### Prerequisites
- [Node.js + npm](http://nodejs.org/)
- [Bower](http://bower.io/)
- [grunt](http://gruntjs.com/) (for Development Helpers)

### Installation
- run `npm install`
- run `bower install`

### Helpers
- `grunt build` 
build the template files

- `grunt watch`  
will build the template files if the content of the src folder changes

### Testing
- Install docdoc-boilerplate  
docdoc-boilerplate and docdoc-theme should be living next to each other on your
filesystem.  
Follow the installation instruction of docdoc-boilerplate.

Then link your local docdoc-theme as node_module to docdoc-boilerplate
```
cd docdoc-boilerplate/node_modules/
rm -R docdoc-theme/
ln -s ../../../docdoc-theme/ docdoc-theme
```
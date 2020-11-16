const fs = require('fs-extra');
const concat  = require('concat');

(async function build() {
    const files = [
        './dist/corteva-client-sandbox/runtime.js',
        './dist/corteva-client-sandbox/polyfills.js',
        './dist/corteva-client-sandbox/scripts.js',
        './dist/corteva-client-sandbox/main.js',
    ]
    await fs.ensureDir('angular-elements')
    console.log('files')
    await concat(files,'angular-elements/hello-world-angular-element.js')
})()
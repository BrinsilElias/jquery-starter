require('./main.scss');
window.jQuery = window.$ = require('jquery'); // eslint-disable-line no-multi-assign

const run = require('./app/scripts/utilities/run');
const app = require('./app/scripts/app');

$(() => {
    run(app);
});

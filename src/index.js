import '@/main.css';
import '@app/template.html';

import hello from '@app/scripts/app';
import counter from '@app/scripts/counter';
import run from '@app/scripts/utilities/run';

window.$ = window.jQuery = jQuery;

(() => {
  run(hello);
  run(counter);
})();

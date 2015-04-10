# Angular 2 Minimal Bundle Setup
This repo shows how to consume an angular2 system.js dev mode bundle along with
an app written in TS.

Until system.js supports TS hooks in the browsers, one has to manually run:
tsc main.ts -m amd -t ES5

## To update the bundle dir with current head
* rm -rf bundle
* clone angular/angular repo on your drive
* gulp build
* ln -s /dist/bundle bundle

import {bootstrap} from 'angular2/platform/browser';

import {AppComponent} from './app/app.component';

function main() {	
	return bootstrap(AppComponent)
		.catch(err => console.error(err));
}

document.addEventListener('DOMContentLoaded', main);
/**
 * R Stuff
 * 
 * @module rstuff
 */

import { WebR } from 'https://webr.r-wasm.org/latest/webr.mjs'

globalThis.webR = new WebR({
	WEBR_URL: "/webr/",
	SW_URL: "/webr/"
});

await globalThis.webR.init();

export const webR = globalThis.webR;

export const source = await webR.evalR('source')
export const library = await webR.evalR('library')
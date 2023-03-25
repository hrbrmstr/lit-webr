/**
 * @module status-message
 */

import { LitElement, html, css } from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';

export class StatusMessage extends LitElement {

  static properties = {
    text: {type: String},
  };

	static styles = [
		css`
			:host {
				display: block;
			}
		`
	];

	constructor() {
    super()
    this.text = ''
  }


	render() {
		return html`<div>${crossOriginIsolated ? '🔵' : '🌕'} ${this.text}</div>`;
	}

}

customElements.define('status-message', StatusMessage);

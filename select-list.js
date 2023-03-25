/**
 * @module status-message
 */

import { LitElement, html, css } from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';

export class SelectList extends LitElement {

	static properties = {
		id: { type: String },
		label: { type: String },
		options: { type: Array }
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
		this.options = []
	}
	
	render() {
		const selectId = `select-list-${this.id}`;
		return html`
		<label for="${selectId}">${this.label} 
		  <select id="${selectId}" @change=${this._dispatch}>
			  ${this.options.map(option => html`<option>${option}</option>`)}
		  </select>
	  </label>
		`;
	}

	_dispatch(e) {
		const options = {
			detail: e.target,
			bubbles: true,
			composed: true,
		};
		this.dispatchEvent(new CustomEvent(`regionChanged`, options));
  }

}

customElements.define('select-list', SelectList);

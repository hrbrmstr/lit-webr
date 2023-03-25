import { LitElement, html, css } from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';
import { unsafeSVG } from 'https://unpkg.com/lit/directives/unsafe-svg.js?module';

class RegionPlot extends LitElement {

	static properties = {
		region: { type: String },
		asyncSvg: { type: String },
		svgId: { type: String },
		renderFunction: { type: Function }
	};
	
	static styles = [
		css`
			:host div {
	      margin-top: 2rem;
	      margin-bottom: 2rem;
			}
		`
	];

	async connectedCallback() {
    super.connectedCallback();
		this.asyncSvg = await this.renderFunction(this.region, this.svgId);
		
		this.addEventListener('regionChanged', async (e) => {
			this.region = e.detail.value;
			const res = await this.renderFunction(this.region, this.svgId);
			if (res.values) this.asyncSvg = res.values[ 0 ] ;
		});
		
	}

	performUpdate() {
    super.performUpdate();
		const options = {
			detail: { value: this.region },
			bubbles: true,
			composed: true,
		};
		this.dispatchEvent(new CustomEvent(`regionChanged`, options));
	}
	
	constructor() {
		super();
		this.region = '';
		this.asyncSvg = ''
		this.svgId = ''
		this.renderFunction = async () => `<svg></svg>`
	}
		
	render() {
		return html`
		<div>
		<slot></slot>
		${unsafeSVG(this.asyncSvg)}
		</div>`;
	}
		
}

customElements.define('region-plot', RegionPlot);

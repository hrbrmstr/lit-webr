/**
 * @module utils
 */

/**
 * Slugify a string
 * 
 * @param {string} str a JS string
 * @returns {string} a slugified string
 */
export function slugify(str) {
	return str
		.toLowerCase()
		.trim()
		.replace(/[^\w\s-]/g, '')
		.replace(/[\s_-]+/g, '-')
		.replace(/^-+|-+$/g, '')
}

export const queryParams = new URLSearchParams(window.location.search);

/**
 * Returns a filled-in meta tag node
 * 
 * @param {string} property 
 * @param {string} content 
 * @returns {HTMLElement}
 */
export function createMetaTag(property, content) {
	const meta = document.createElement("meta");
	meta.setAttribute("property", property);
	meta.content = content
	return(meta)
}
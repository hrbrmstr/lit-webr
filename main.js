/**
 * @module main
 */
import { renderIndex } from "./renderers.js";
import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";

await renderIndex(
	`main`,
	"ayu-dark",
	[ 'javascript', 'r', 'json', 'md', 'xml' ],
	false
)

let message = document.getElementById("status");
message.text = "WebR Loading…"

import * as R from "./r.js";

message.text = "Web R Initialized!"

await R.webR.installPackages([ "svglite" ])

await R.library(`svglite`)
await R.library(`datasets`)

const regionRender = await globalThis.webR.evalR(await d3.text("r-code/region-plot.R"))

message.text = "{svglite} installed"

const regions = document.getElementById("regionsInput")
const plotOutput = document.getElementById("regionsOutput")

regions.options = await (await R.webR.evalR(`colnames(WorldPhones)`)).toArray()
plotOutput.region = regions.options[ 0 ]
plotOutput.renderFunction = regionRender
plotOutput.render()

message.text = "Ready"

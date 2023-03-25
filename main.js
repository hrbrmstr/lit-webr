/**
 * @module main
 */

// we need to render the markdown as quickly as possible
import { renderMarkdownInBody } from "./renderers.js";

await renderMarkdownInBody(
	`main`,
	"ayu-dark",
	[ 'javascript', 'r', 'json', 'md', 'xml', 'console' ],
	false
)

// update our status component
let message = document.getElementById("status");
message.text = "WebR Loading…"

// crank up WebR
import * as R from "./r.js";

message.text = "Web R Initialized!"

// install necessary pacakges
await R.webR.installPackages([ "svglite" ])

await R.library(`svglite`)
await R.library(`datasets`)

message.text = "{svglite} installed"

// get on with the app; start by loading up the R code we moved to an external file
import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";

// explained in the rendered `main.md`
const regionRender = await globalThis.webR.evalR(await d3.text("r-code/region-plot.R"))

// find our other components
const regions = document.getElementById("regionsInput")
const plotOutput = document.getElementById("regionsOutput")

// get them initialized
regions.options = await (await R.webR.evalR(`colnames(WorldPhones)`)).toArray()
plotOutput.region = regions.options[ 0 ]
plotOutput.renderFunction = regionRender
plotOutput.render()

// it's all in the hands of the user now
message.text = "Ready"

---
{
	"title": "Telephones by region (Lit + WebR)",
	"og" : {
		"site_name": "WebR Exeriments",
  	"url": "https://rud.is/w/lit-phones-by-region",
		"description": "Lit + WebR version of one of the original Shiny demo apps",
		"image": {
			"url": "https://rud.is/w/phones-by-region/img/preview.png",
			"height": "768",
			"width": "1536",
			"alt": "Base R bar plot"
		}
	},
	"twitter": {
    "site": "@hrbrmstr",
		"domain": "rud.is"
	}
}
---

# Lit + WebR

## I am such a gadfly

<status-message id="status"></status-message>

<region-plot id="regionsOutput" svgId="lit-regions">

  <select-list label="Select a region:" id="regionsInput"></select-list>

</region-plot>
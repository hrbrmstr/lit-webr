renderRegions <- function(region, id = "region-plot") {

  # our base plot theme

	list(
		panel.fill = "#001e38",
		bar.fill = "#4a6d88",
		axis.color = "#c6cdd7",
		label.color = "#c6cdd7",
		subtitle.color = "#c6cdd7",
		title.color = "#c6cdd7",
		ticks.color = "#c6cdd7",
		axis.color = "#c6cdd7"
	) -> theme

  # get our svg graphics device amp'd
  s <- svgstring(width = 8, height = 4, pointsize = 8, id = id, standalone = FALSE)

  # setup theme stuff we can't do in barplot()
  par(
    bg = theme$panel.fill,
    fg = theme$label.color
  )

  # um, it's a barplot
  barplot(
    WorldPhones[, region],
    main = region,
    col = theme$bar.fill,
    sub = "Data from AT&T (1961) The World's Telephones",
    ylab = "Number of Telephones (K)",
    xlab = "Year",
    border = NA,
    col.axis = theme$axis.color,
    col.lab = theme$label.color,
    col.sub = theme$subtitle.color,
    col.main = theme$title.color
  )

  dev.off()

  # get the stringified SVG
  plot_svg <- s()

  # make it responsive
  plot_svg <- sub("width='\\d+(\\.\\d+)?pt'", "width='100%'", plot_svg)
  plot_svg <- sub("height='\\d+(\\.\\d+)?pt'", "", plot_svg)

  # return it
  plot_svg
  
}
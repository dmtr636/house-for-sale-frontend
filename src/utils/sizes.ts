export const getSizes = (width: number) => {
	return (
		`(min-width: 700px) ${width}vw,` +
		"100vw"
	)
}
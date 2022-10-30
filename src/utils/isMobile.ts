import {useWindowDimension} from "../hooks/useWindowDimensions";

export const isMobile = () => {
	const [width, _] = useWindowDimension()
	return width < 700
}
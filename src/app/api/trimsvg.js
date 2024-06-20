/**
 * `trimSvg` returns a svg string without any XML element at the beginning that mess up 
 *  use of `map` with the Canvas Svg Editor
 *  @param `map` SVG string to be trimmed
*/

const trimSvg = (map) => {
    return map.substring(map.indexOf("<svg "));
}

export default trimSvg;
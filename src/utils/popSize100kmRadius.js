import fixedCalcultions from "hooks/fixedCalculations";

const popSize100kmRadius = (isRegion, popDensity2060, country_region) => {
    const { general } = fixedCalcultions(country_region)
    const { densityPopulationalRegionNorth2060 } = general
    //const densityPopulationalRegionNorth2060 = 6.00696;
    const rAoQuadrado = Math.pow(100, 2)
    const popSize100kmRadius = isRegion ? (popDensity2060 * (Math.PI * rAoQuadrado)) : (densityPopulationalRegionNorth2060 * (Math.PI * rAoQuadrado));
    
    return popSize100kmRadius
}

export default popSize100kmRadius
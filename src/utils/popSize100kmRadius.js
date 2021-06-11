const popSize100kmRadius = (isRegion, popDensity2060) => {
    const densityPopulationalRegionNorth2060 = 6.00696;
    const rAoQuadrado = Math.pow(100, 2)
    const popSize100kmRadius = isRegion ? (popDensity2060 * (Math.PI * rAoQuadrado)) : (densityPopulationalRegionNorth2060 * (Math.PI * rAoQuadrado));
    
    return popSize100kmRadius
}

export default popSize100kmRadius
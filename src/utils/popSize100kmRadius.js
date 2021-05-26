const popSize100kmRadius = (isRegion, popDensity2060) => {
    const densityPopulationalRegionNorth2060 = 6.00696;
    const popSize100kmRadius = isRegion ? (popDensity2060 * Math.pow((Math.PI * 100), 2)) : (densityPopulationalRegionNorth2060 * Math.pow((Math.PI * 100), 2));
    return popSize100kmRadius
}

export default popSize100kmRadius
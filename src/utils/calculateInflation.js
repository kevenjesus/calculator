const calculateInflation = (inflation, total) => {
    const inflationNumber = Number(inflation)
    if(inflationNumber) {
        return (inflationNumber/100) * total
    }
    return 0
}

export default calculateInflation
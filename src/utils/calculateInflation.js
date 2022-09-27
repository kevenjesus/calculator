const calculateInflation = (inflation, total) => {
    if(inflation) {
        return (inflation/100) * total
    }
    return 0
}

export default calculateInflation
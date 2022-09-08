const toUSD = (value) => {
    return (Math.round(value * 100) / 100).toLocaleString("en-US", { style: 'currency', currency: 'USD' })
}

export default toUSD
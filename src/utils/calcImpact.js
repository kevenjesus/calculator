const calcImpact = (valor, price) => {
        const toHectare = (valor * 12) * 0.0001907;
        return toHectare * price
}

export default calcImpact
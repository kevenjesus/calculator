const ToBRL = (value) => {
    return (Math.round(value * 100) / 100).toLocaleString("pt-BR", { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' })
}

export default ToBRL
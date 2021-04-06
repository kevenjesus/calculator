
const recreation = (hectare, densidadePop2010, riquezaEspecie) => {
    
    
    const PIBpercapitaBrasil2019USD = 8717.18;
    const temperaturaCelsius = 26.8;
    const txCambio = 5;

    const calcRecreacao1 = 0.562 * Math.log(densidadePop2010);
    const calcRecreacao2 = 0.566 * Math.log(PIBpercapitaBrasil2019USD);
    const calcRecreacao3 = 0.0178 * temperaturaCelsius;
    const calcRecreacao4 = 1.133 * Math.log(riquezaEspecie);
    const calcRecreacao5 = calcRecreacao1 + calcRecreacao2 + calcRecreacao3 + calcRecreacao4;
    const calcRecreacao6 = calcRecreacao5 - 8.375;
    const custoRecreacaoporHaUSD = Math.exp(calcRecreacao6);
    const custoRecreacaoporHaBRL = custoRecreacaoporHaUSD * txCambio;
    const custoTotalRecreacaoBRL = custoRecreacaoporHaBRL * hectare * 12;
    return custoTotalRecreacaoBRL
}

export default recreation
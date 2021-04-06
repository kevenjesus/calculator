const culturedAndSpecies = (hectare, densidadePop2010, riquezaEspecie ) => {

        const PIBpercapitaBrasil2019USD = 8717.18;
        const temperaturaCelsius = 26.8;
        const txCambio = 5;

        const calc1 = 0.643 * Math.log(densidadePop2010);
        const calc2 = 1.655 * Math.log(PIBpercapitaBrasil2019USD);
        const calc3 = 0.234 * temperaturaCelsius;
        const calc4 = 2.145 * Math.log(riquezaEspecie);
        const calc5 = calc1 + calc2 - calc3 + calc4;
        const calc6 = calc5 - 20.85;
        const custoEspeciesporHaUSD = Math.exp(calc6);
        const custoEspeciesporHaBRL = custoEspeciesporHaUSD * txCambio;
        const custoTotalEspeciesBRL = custoEspeciesporHaBRL * hectare * 12;

        return custoTotalEspeciesBRL  
}

export default culturedAndSpecies

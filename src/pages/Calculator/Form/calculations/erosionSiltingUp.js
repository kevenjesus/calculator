const CONSERVATIVE = 0.29

const erosionSiltingUp = (hectare, txPrevalence) => {

  const PIBpercapitaBrasil2019USD = 8717.18

    if(txPrevalence === CONSERVATIVE) {
      const CustoAssoreamentoporHaBRL = 66.42;
      const CustoTotalAssoreamentoBRL = CustoAssoreamentoporHaBRL * hectare * 12;
      return CustoTotalAssoreamentoBRL

    } else {
      const txCambio = 5
      const calc1 = Math.log(PIBpercapitaBrasil2019USD);
      const calc2 = Math.pow(calc1, 2);
      const calc3 = 13.32 * calc1
      const calc4 = 0.623 * calc2;
      const calc5 = calc3 - 65.64 - calc4;
      const CustoAssoreamentoporHaUSD = Math.exp(calc5);
      const CustoAssoreamentoporHaBRL = CustoAssoreamentoporHaUSD * txCambio;
      const CustoTotalAssoreamentoBRL = CustoAssoreamentoporHaBRL * hectare * 12;
      return CustoTotalAssoreamentoBRL;
    }
}

export default erosionSiltingUp






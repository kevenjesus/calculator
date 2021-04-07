const CONSERVATIVE = 0.29

const erosionSiltingUp = (hectare, valueHypothesis) => {

  const PIBpercapitaBrasil2019USD = 8717.18

    //Se "Princípio da Precaução" (antes chamávamos de "valor máximo")

    if(valueHypothesis === CONSERVATIVE) {
      const CustoAssoreamentoporHaBRL = 66.42;
      const CustoTotalAssoreamentoBRL = CustoAssoreamentoporHaBRL * hectare * 12;

      return CustoTotalAssoreamentoBRL
    }else {

      const txCambio = 5
      const calc1 = Math.log(PIBpercapitaBrasil2019USD);
      const calc2 = 13.32 * calc1;
      const calc3 = 0.623 * calc2;
      const calc4 = calc2 - 65.64 - calc3;
      const calc5 = Math.pow(calc4, 2);
      const CustoAssoreamentoporHaUSD = Math.exp(calc5);

      const CustoAssoreamentoporHaBRL = CustoAssoreamentoporHaUSD * txCambio;

      const CustoTotalAssoreamentoBRL = CustoAssoreamentoporHaBRL * hectare * 12;

      return CustoTotalAssoreamentoBRL;
      
    }

}

export default erosionSiltingUp

//Se "Conservador" (antes chamávamos de "valor médio")




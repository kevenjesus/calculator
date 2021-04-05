const erosionSiltingUp = (qtdAnalysis, overflow, PIBpercapitaBrasil2019USD) => {

  export  const principleOfPricing = () => {
    //Se "Princípio da Precaução" (antes chamávamos de "valor máximo")

    const txCambio = 5;

    const calc1 = Math.log(PIBpercapitaBrasil2019USD);
    const calc2 = 13.32 * calc1;
    const calc3 = 0.623 * calc1;
    const calc4 = calc2 - 65.64 - calc3;
    const calc5 = Math.pow(calc4, 2);
    const CustoAssoreamentoporHaUSD = Math.exp(CustoAssoreamentoporHaUSD);

    const CustoAssoreamentoporHaBRL = CustoAssoreamentoporHaUSD * txCambio;

    const CustoTotalAssoreamentoBRL = CustoAssoreamentoporHaBRL * qtdAnalysis * overflow;

    return CustoTotalAssoreamentoBRL;
    }

  export  const conservative = () => {

        //Se "Conservador" (antes chamávamos de "valor médio")

        const CustoAssoreamentoporHaBRL = 66.42;
        const CustoTotalAssoreamentoBRL = CustoAssoreamentoporHaBRL * qtdAnalysis * overflow;

        return CustoTotalAssoreamentoBRL
    }



}

//Se "Conservador" (antes chamávamos de "valor médio")




const carbon = (hectare) => {
    const CustocarbonoporHaUSD = 10.00
    const TxCambio = 5
    const CustoCarbonoporHaBRL = TxCambio * CustocarbonoporHaUSD
    const CustoTotalCarbonoBRL = CustoCarbonoporHaBRL * hectare * 12 * 348
    return CustoTotalCarbonoBRL;
} 

export default carbon



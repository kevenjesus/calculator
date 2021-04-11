const CONSERVATIVE = 0.29

const bioprospecting = (hectare, valueHypothesis) => { 
   const CustoBioprospeccaoporHaBRL = valueHypothesis === CONSERVATIVE ? 68.19 : 116.95
   const CustoTotalBioprospeccaoBRL = CustoBioprospeccaoporHaBRL * hectare * 12 * 1
   return CustoTotalBioprospeccaoBRL;
}

export default bioprospecting



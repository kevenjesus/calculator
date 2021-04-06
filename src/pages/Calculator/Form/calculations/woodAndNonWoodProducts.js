
import calcImpact from 'utils/calcImpact'

const woodAndNonWoodProducts = (hectare) => {
    const CustoPMNMporHaAnoBRL = 764.00
    const CustoTotalPMNMURLANO = CustoPMNMporHaAnoBRL * hectare * 12 * 1
    return CustoTotalPMNMURLANO;
}

export default woodAndNonWoodProducts


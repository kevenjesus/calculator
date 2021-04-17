
import calcMontante from 'utils/calcMontante'
import vpl from 'utils/vpl'
import { FERRY, PIT } from '../consts'

const woodAndNonWoodProducts = (hectare, tipoGarimpo, tempoGarimpo) => {
    const CustoPMNMporHaAnoBRL = 764.00

    const TxDesconto = 0.03;

    const montantes = calcMontante(CustoPMNMporHaAnoBRL)
    const VPLwoodAndNonWoodProducts = vpl(TxDesconto, montantes)

    let toWoodAndNonWoodProducts;
      if(tipoGarimpo === FERRY) {
        toWoodAndNonWoodProducts = 0
      }else if (tipoGarimpo === PIT && hectare) {
        toWoodAndNonWoodProducts = VPLwoodAndNonWoodProducts * 0.31 * 12
      }else if (tipoGarimpo === PIT && tempoGarimpo) {
        toWoodAndNonWoodProducts = VPLwoodAndNonWoodProducts * 0.31 * 12
      }
      else {
        toWoodAndNonWoodProducts = VPLwoodAndNonWoodProducts * hectare * 12
      }
      return toWoodAndNonWoodProducts
}

export default woodAndNonWoodProducts


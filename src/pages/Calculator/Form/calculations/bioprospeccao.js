import calcMontante from "utils/calcMontante";
import vpl from "utils/vpl";
import { FERRY, PIT } from "../consts";

const CONSERVATIVE = 0.29

const bioprospecting = (hectare, valueHypothesis, tipoGarimpo, tempoGarimpo) => { 
   const CustoBioprospeccaoporHaBRL = valueHypothesis === CONSERVATIVE ? 68.19 : 116.95

   const TxDesconto = 0.03;

   const montantes = calcMontante(CustoBioprospeccaoporHaBRL)
      const VPLBioprospeccao = vpl(TxDesconto, montantes)

      let toBioprospeccao;
        if(tipoGarimpo === FERRY) {
          toBioprospeccao = 0
        }else if (tipoGarimpo === PIT && hectare) {
          toBioprospeccao = VPLBioprospeccao * 0.31 * 12
        }else if (tipoGarimpo === PIT && tempoGarimpo)
          toBioprospeccao = VPLBioprospeccao * 0.31 * 12
        else {
          toBioprospeccao = VPLBioprospeccao * hectare * 12
        }
        return toBioprospeccao
}

export default bioprospecting



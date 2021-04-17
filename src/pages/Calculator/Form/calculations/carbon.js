import calcMontante from "utils/calcMontante"
import vpl from "utils/vpl"
import { FERRY, PIT } from "../consts"

const carbon = (hectare, tipoGarimpo, tempoGarimpo) => {


    const TxDesconto = 0.03;
    const CustoCarbonoporHaBRL = 887.74;
    
    const montantes = calcMontante(CustoCarbonoporHaBRL)
      const VPLCarbono = vpl(TxDesconto, montantes)


      let toCarbon;
        if(tipoGarimpo === FERRY) {
          toCarbon = 0
        }else if (tipoGarimpo === PIT && tempoGarimpo) {
          toCarbon = VPLCarbono * 0.31 * 12
        }else if (tipoGarimpo === PIT && hectare) {
          toCarbon = VPLCarbono * 0.31 * 12
        }
        else {
          toCarbon = VPLCarbono * hectare * 12
        }
        return toCarbon

} 

export default carbon



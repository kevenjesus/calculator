import calcMontante from "utils/calcMontante"
import vpl from "utils/vpl"
import { FERRY, PIT } from "../consts"

const carbon = (hectare, tipoGarimpo) => {


    const TxDesconto = 0.03;
    const CustoCarbonoporHaUSD = 10.00
    const TxCambio = 5
    const CustoCarbonoporHaBRL = TxCambio * CustoCarbonoporHaUSD
    
    const montantes = calcMontante(CustoCarbonoporHaBRL)
      const VPLCarbono = vpl(TxDesconto, montantes)
      console.log('VPLCarbono',VPLCarbono)

      let toCarbon;
        if(tipoGarimpo === FERRY) {
          toCarbon = 0
        }else if (tipoGarimpo === PIT) {
          toCarbon = VPLCarbono * 0.31 * 12
        }else {
          toCarbon = VPLCarbono * hectare * 12
        }
        return toCarbon

} 

export default carbon



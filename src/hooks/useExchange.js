import { useLayoutEffect, useCallback, useState} from 'react'

export const BRAZIL_UNIQ = 'BRL'
export const PERU_UNIQ = 'PEN'
export const COLOMBIA_UNIQ = 'COP'

const useExchange = () => {
    const [USDtoBRL, setValue] = useState(null) 
    
    const convertUSDToBRL = useCallback(async () => {
        try {
            const request = await fetch('https://economia.awesomeapi.com.br/json/last/USD-BRL')
            const response = await request.json()
            const { USDBRL } = response
            setValue(USDBRL)  
        } catch (err) {
            console.log(err)
        }
        
    }, [])

    useLayoutEffect(() => {
        convertUSDToBRL()
    }, [])

    return {
        convertUSDToBRL,
        USDtoBRL
    }

}

export default useExchange
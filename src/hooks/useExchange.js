import { useLayoutEffect, useCallback, useState} from 'react'

export const BRAZIL_UNIQ = 'BRL'
export const PERU_UNIQ = 'PEN'
export const COLOMBIA_UNIQ = 'COP'

const useExchange = () => {
    const [USDtoBRL, setValue] = useState(null) 
    
    const convertUSDToBRL = useCallback(async () => {
        // try {
        //     const request = await fetch('https://economia.awesomeapi.com.br/json/last/USD-BRL')
        //     const response = await request.json()
        //     const { USDBRL } = response
        //     setValue(USDBRL)  
        // } catch (err) {
        //     console.log(err)
        // }
        setValue({
            high: '5.33'
        })
        
    }, [])

    useLayoutEffect(() => {
        convertUSDToBRL()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return {
        convertUSDToBRL,
        USDtoBRL
    }

}

export default useExchange
import { Headline, Text } from 'pages/Introduction/style'
import { useContext } from 'react';
import { AppContext } from 'utils/AppContext';

const HowUseCalculator = () => {
    const { state } = useContext(AppContext)
    const { language } = state
    const { introduction } = language 
    return (
        <>
            <Headline>{introduction.howUseCalculator.headline}</Headline>
            <Text>
                {introduction.howUseCalculator.paragraphy_01}            
            </Text>
            <Text>
                {introduction.howUseCalculator.paragraphy_02}   
            </Text>
            <Text>
                <strong>{introduction.howUseCalculator.paragraphy_03}</strong>
            </Text>
            <Text>
                <strong>{introduction.howUseCalculator.paragraphy_04}</strong>
            </Text>
            <Text>
                <strong>{introduction.howUseCalculator.paragraphy_05}</strong>
            </Text>
            <Text>
                {introduction.howUseCalculator.paragraphy_06}
            </Text>
            <Text>
                {introduction.howUseCalculator.paragraphy_07}
            </Text>
            <Text>
                {introduction.howUseCalculator.paragraphy_08}
            </Text>
        </>
    )
}

export default HowUseCalculator;
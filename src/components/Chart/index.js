import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import CustomTooltip from './CustomTooltip'
import { colors } from 'theme/colors'
import ToBRL from 'utils/toBRL';
import { WrapperPrint } from './style';
import { useContext } from 'react';
import { AppContext } from 'utils/AppContext';
import { BRAZIL, countries_region } from 'components/CountrySelect';
import toUSD from 'utils/toUSD';

const CustomizedLabel = ({x, y, width, value }) => {
  const { state } = useContext(AppContext)
  const { country_region } = state
  const isBrazil = country_region.country === countries_region[BRAZIL].country
  const totalConverted = isBrazil ? ToBRL(value) : toUSD(value)
  return (
          <text 
            x={x + width - (window.innerWidth > 768 ? 25 : 15)} 
            y={y - 10}
            dy={-6} 
            fontSize={window.innerWidth > 768 ? 14 : 10} 
            fontFamily='sans-serif'
            fontWeight='bold'
            margin={100}
            fill={colors.primary}
            textAnchor="middle">{totalConverted}</text>
  )
}
  

const Chart = ({data}) => {
    const items = data.map(d => {
      return {...d, value: Math.round(d.value * 100) / 100}
    })

    const size = window.innerWidth;

    return (
      <WrapperPrint>
      <ResponsiveContainer width="100%" height={window.innerWidth >= 1366 ? 500 : 300}>
        <BarChart
          width={500}
          height={window.innerWidth >= 1366 ? 500 : 300}
          data={items}
          margin={{
            top: 50,
            right: 0,
            left: 0,
            bottom: 50,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label"  fontSize={12} interval={0} />
          <YAxis width={150} domain={[0, 'dataMax']} allowDecimals tickFormatter={ToBRL} hide={size < 768} />
          
          <Tooltip content={CustomTooltip} />
          <Bar barSize={window.innerWidth >= 1366 ? 50 : (window.innerWidth >= 768 ? 30 : 20)} dataKey="value" label={<CustomizedLabel />} fill={colors.primary}>
          {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill= {colors.primary} />
            ))}
          </Bar>
          
        </BarChart>
      </ResponsiveContainer>
      </WrapperPrint>
    );
}

export default Chart
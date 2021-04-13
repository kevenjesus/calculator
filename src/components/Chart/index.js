import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CustomTooltip from './CustomTooltip'
import { colors } from 'theme/colors'
import ToBRL from 'utils/toBRL';

const Chart = ({data}) => {
    const items = data.map(d => {
      return {...d, value: Math.round(d.value * 100) / 100}
    })

    return (
      <div style={{width: '100%', height: window.innerWidth >= 1366 ? 500 : 300, marginTop: 50}}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={window.innerWidth >= 1366 ? 500 : 300}
          data={items}
          margin={{
            top: 5,
            right: 0,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" fontSize={12} interval={0} />
          <YAxis width={150} domain={['dataMin', 'dataMax']} allowDecimals tickFormatter={ToBRL} />
          <Tooltip content={CustomTooltip} />
          <Bar barSize={window.innerWidth >= 1366 ? 50 : (window.innerWidth >= 768 ? 30 : 20)} dataKey="value" fill={colors.primary} />
        </BarChart>
      </ResponsiveContainer>
      </div>
    );
}

export default Chart
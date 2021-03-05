import { useEffect } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { colors } from 'theme/colors'

let data = [
  {
    name: 'Impacto 01',
    valor: 700000,
    amt: 500000,
  },
  {
    name: 'Impacto 02',
    valor: 1000000,
    amt: 1000000,
  },
  {
    name: 'Impacto 03',
    valor: 1500000,
    amt: 2500000,
  },
  {
    name: 'Impacto 04',
    valor: 700000,
    amt: 2500000,
  }
];

const Chart = () => {

    useEffect(() => {
  
      if(window.innerWidth >= 768 && data.length === 4) {
        data.push({
          name: 'Impacto 05',
          valor: 700000,
          amt: 2500000,
        })
        data.push({
          name: 'Impacto 06',
          valor: 700000,
          amt: 2500000,
        })
      }else if (window.innerWidth >= 1366 && data.length <= 6) {
        data.push({
          name: 'Impacto 07',
          valor: 700000,
          amt: 2500000,
        })
        data.push({
          name: 'Impacto 08',
          valor: 700000,
          amt: 2500000,
        })
      }else {
        data.splice(5, 1);
        data.splice(4, 1);
      }
    }, [])

    return (
      <div style={{width: '100%', height: window.innerWidth >= 1366 ? 500 : 300, marginTop: 30}}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={window.innerWidth >= 1366 ? 500 : 300}
          data={data}
          margin={{
            top: 5,
            right: 0,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" fontSize={10} interval={0} />
          <YAxis />
          <Tooltip />
          <Bar barSize={window.innerWidth >= 1366 ? 50 : (window.innerWidth >= 768 ? 30 : 20)} dataKey="valor" fill={colors.primary} />
        </BarChart>
      </ResponsiveContainer>
      </div>
    );
}

export default Chart
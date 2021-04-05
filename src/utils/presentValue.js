// taxa, periodo,

const presentValue = (rate, nper, pmt) => {
        rate = rate / 100.0;
        return pmt / rate * (1 - Math.pow(1 + rate, -nper));
}

export default presentValue
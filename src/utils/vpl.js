const vpl =(TxDesconto, montantes) => {    
    {
        var ret = montantes[0];
        
        for (var i=1; i<montantes.length; i++)
            ret += montantes[i] / Math.pow( (1.0 + TxDesconto), i);
        return ret;
    }
}

export default vpl
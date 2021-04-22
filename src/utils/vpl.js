const vpl =(discountRate, amounts) => {    
    {
        var ret = amounts[0];
        
        for (var i=1; i<amounts.length; i++)
            ret += amounts[i] / Math.pow( (1.0 + discountRate), i);
        return ret;
    }
}

export default vpl
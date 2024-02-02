L = (n , L0 , L1 , add) => {
    let ret = [L0, L1];
    
    for(let i = 2; i < n; i++)
      ret.push(ret[i - 1] + ret[i - 2] + add);
    
    return ret;
}
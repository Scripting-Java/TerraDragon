export function formatMoney(amount:number){
    const decimal = amount %1
    let digits = 2;
    if(decimal===0)
        digits=0
    return new Intl.NumberFormat("en-US", {
        notation:"compact",
        minimumFractionDigits:digits,
        maximumFractionDigits:2,
    }).format(amount)
}

export function formatNumber(amount:number){
    return new Intl.NumberFormat("en-US", {
        notation:"compact",
        maximumFractionDigits:0
    }).format(amount)
}
export const currencyFormat = currency => {
    return currency.toLocaleString('en-MX', {
        style: 'currency',
        currency: 'MXN'
    })
}
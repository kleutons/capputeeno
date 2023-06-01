export function formatPrice(valueCents: number){
    const formattedValue = valueCents / 100;
    return formattedValue.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'})
}
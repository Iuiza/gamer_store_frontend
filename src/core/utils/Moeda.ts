export default class Moeda {
    static formatar(
        valor: number,
        localixacao: string = "pt-BR",
        moeda: string = "BRL",
    ) : string {
        return (valor ?? 0).toLocaleString(localixacao, {
            style: "currency",
            currency: moeda,
        })
    }
}
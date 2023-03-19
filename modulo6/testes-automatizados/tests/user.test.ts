import { performPurchase } from "../src/funcs/funcUser"

describe("Testando compra do usuário",() => {
    const user = {
        name: "Morcelli",
        balance: 58
    }

    test("Usuário com saldo superior ao da compra!",() => {
        expect(performPurchase(user,10)).toEqual(
            {
                name: "Morcelli",
                balance: 100
            }  
        )
    })

    test("Usuário com o mesmo saldo ao da compra!",() => {
        expect(performPurchase(user,110)).toEqual(
            {
                name: "Morcelli",
                balance: 50
            }  
        )
    })

    test("usuário com o saldo menor do que o valor de compra",() => {
        expect(performPurchase(user,120)).toBeUndefined()
    })
}) 
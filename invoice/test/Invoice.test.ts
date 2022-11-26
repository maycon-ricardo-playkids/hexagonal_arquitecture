import Invoice from "../src/Invoice"

test("Deve criar uma fatura", function () {
  const transactions= [
    {amount: 100, currency: "BRL"},
    {amount: 600, currency: "USD"},
    {amount: 1000, currency: "BRL"},
  ]
  const currencies = {
    usd: 2
  }
  const invoice = new Invoice(transactions, currencies)
  const total = invoice.getTotal();
  expect(total).toBe(2300)
})
const faturamentoMensal = 
{
  SP: 67836.43,
  RJ: 36678.66,
  MG: 29229.88,
  ES: 27165.48,
  Outros: 19849.53,
};

//calculando o total de faturamento
const totalFaturamento = Object.values(faturamentoMensal).reduce(
  (total, valor) => total + valor
)

//Iterando sobre as chaves (estados) do objeto para calcular o percentual de representação de cada um.
Object.keys(faturamentoMensal).forEach((estado) => {
  let percentual = (faturamentoMensal[estado] / totalFaturamento) * 100
  console.log(`${estado}: ${percentual.toFixed(2)}%`)
});

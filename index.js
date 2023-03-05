document.getElementById("verificar").addEventListener("click", () => {
  const numeroInformado = document.getElementById("numeroInformado").value
  let resultado = calculaSequenciaFibonacci(numeroInformado)
  const respostaTxt = document.getElementById("resultado")
  
  if (resultado === numeroInformado) 
  {
    console.log(`O número ${numeroInformado} pertence à sequência de Fibonacci.`)
    respostaTxt.innerText =`O número ${numeroInformado} pertence à sequência de Fibonacci.`
  }
   else
  {
    console.log(
      `O número ${numeroInformado} não pertence à sequência de Fibonacci.`)
      respostaTxt.innerText = `O número ${numeroInformado} pertence à sequência de Fibonacci.`;
  }
 

  
})

function calculaSequenciaFibonacci(num)
{
  let a = 0, b = 1, c

  for (let i = 2; i <= num; i++)
  {
    c = a + b;
    a = b;
    b = c;
  }
    return c;
}

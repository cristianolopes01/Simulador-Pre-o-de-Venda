document.addEventListener("DOMContentLoaded", () => {
  const compraInput = document.getElementById("compra");
  const margemInput = document.getElementById("margemBruta");
  const precoDesejadoInput = document.getElementById("precoDesejado");
  const resultadoDiv = document.getElementById("resultado");
  const botao = document.getElementById("calcular");

  botao.addEventListener("click", () => {
    const compra = parseFloat(compraInput.value);
    const margem = parseFloat(margemInput.value);
    const precoDesejado = parseFloat(precoDesejadoInput.value);

    if (isNaN(compra) || isNaN(margem)) {
      alert("Preencha pelo menos Preço de Compra e Margem de Lucro Bruto.");
      return;
    }

    const precoSugerido = compra / (1 - margem / 100);
    const impostoPercent = 8;
    const impostoSugerido = precoSugerido * (impostoPercent / 100);
    const lucroBruto = precoSugerido - compra;
    const lucroLiquido = precoSugerido - compra - impostoSugerido;
    const margemLiquida = precoSugerido ? (lucroLiquido / precoSugerido) * 100 : 0;

    resultadoDiv.style.display = "block";
    resultadoDiv.innerHTML = `
      <h2>📊 Resultados</h2>
      <p><strong>Preço de Venda Sugerido:</strong> R$ ${precoSugerido.toFixed(2)}</p>
      <p><strong>Lucro Bruto:</strong> R$ ${lucroBruto.toFixed(2)}</p>
      <p><strong>Margem de Lucro Bruto:</strong> ${margem.toFixed(2)}%</p>
      <p><strong>Impostos sobre Vendas (8%):</strong> R$ ${impostoSugerido.toFixed(2)}</p>
      <p><strong>Lucro Líquido:</strong> R$ ${lucroLiquido.toFixed(2)}</p>
      <p><strong>Margem de Lucro Líquida:</strong> ${margemLiquida.toFixed(2)}%</p>
      <p><strong>Margem de Contribuição:</strong> ${margemLiquida.toFixed(2)}%</p>
      ${!isNaN(precoDesejado) ? `<p><strong>Comparação com preço desejado:</strong> R$ ${precoDesejado.toFixed(2)}</p>` : ""}
    `;
  });
});

function calculateProfit() {
  const sellingPrice = parseFloat(document.getElementById("sellingPrice").value) || 0;
  const materialCost = parseFloat(document.getElementById("materialCost").value) || 0;
  const shippingCost = parseFloat(document.getElementById("shippingCost").value) || 0;

  const etsyFee = sellingPrice * 0.065;
  const totalCost = materialCost + shippingCost + etsyFee;
  const profit = sellingPrice - totalCost;
  const profitPercent = ((profit / sellingPrice) * 100).toFixed(2);

  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = `
    Etsy Fee: $${etsyFee.toFixed(2)}<br>
    Total Cost: $${totalCost.toFixed(2)}<br>
    <strong>Profit: $${profit.toFixed(2)} (${profitPercent}%)</strong>
  `;
}

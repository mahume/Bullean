const purchaseName = $('#purchaseName');
const purchaseSymbol = $('#purchaseSymbol');
const purchasePrice = $('#purchasePrice');
const purchaseQuantity = $('#purchaseQuantity');
const purchaseDate = $('#purchaseDate');
const purchaseBtn = $('#purchaseBtn');

const sellName = $('#sellName');
const sellSymbol = $('#sellSymbol');
const sellPrice = $('#sellPrice');
const sellQuantity = $('#sellQuantity');
const sellID = $('#sellID');
const sellDate = $('#sellDate');
const sellBtn = $('#sellBtn');

const API = {
  save(stock) {
    return $.ajax({
      headers: {
        'Content-Type': 'application/json',
      },
      type: 'POST',
      url: 'api/stocks',
      data: JSON.stringify(stock),
    });
  },
  get() {
    return $.ajax({
      url: 'api/stocks',
      type: 'GET',
    });
  },
  delete(id) {
    return $.ajax({
      url: `api/stocks/${id}`,
      type: 'DELETE',
    });
  },
};

const purchaseStock = () => {
  const purchaseData = {
    date: purchaseDate[0].value,
    transaction: 'Purchase',
    category: 'Stock',
    name: purchaseName.val().trim(),
    symbol: purchaseSymbol.val().trim(),
    price: parseInt(purchasePrice.val().trim()),
    quantity: parseInt(purchaseQuantity.val().trim()),
  };

  API.save(purchaseData);
  window.location.reload();
};

const sellStock = () => {
  const sellData = {
    id: parseInt(sellID.val().trim()),
    date: sellDate[0].value,
    transaction: 'Sale',
    category: 'Stock',
    name: sellName.val().trim(),
    symbol: sellSymbol.val().trim(),
    price: parseInt(sellPrice.val().trim()),
    quantity: parseInt(sellQuantity.val().trim()),
  };

  API.delete(sellData.id);
  window.location.reload();
};

purchaseBtn.on('click', purchaseStock);
sellBtn.on('click', sellStock);

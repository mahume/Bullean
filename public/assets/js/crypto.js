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
  save(crypto) {
    return $.ajax({
      headers: {
        'Content-Type': 'application/json',
      },
      type: 'POST',
      url: 'api/crypto',
      data: JSON.stringify(crypto),
    });
  },
  get() {
    return $.ajax({
      url: 'api/crypto',
      type: 'GET',
    });
  },
  delete(id) {
    return $.ajax({
      url: `api/crypto/${id}`,
      type: 'DELETE',
    });
  },
};

const purchaseCrypto = () => {
  const purchaseData = {
    date: purchaseDate[0].value,
    transaction: 'purchase',
    category: 'Crypto',
    name: purchaseName.val().trim(),
    symbol: purchaseSymbol.val().trim(),
    price: parseInt(purchasePrice.val().trim()),
    quantity: parseInt(purchaseQuantity.val().trim()),
  };

  API.save(purchaseData);
  window.location.reload();
};

const sellCrypto = () => {
  const sellData = {
    id: parseInt(sellID.val().trim()),
    date: sellDate[0].value,
    transaction: 'sell',
    category: 'Crypto',
    name: sellName.val().trim(),
    symbol: sellSymbol.val().trim(),
    price: parseInt(sellPrice.val().trim()),
    quantity: parseInt(sellQuantity.val().trim()),
  };

  API.delete(sellData.id);
  window.location.reload();
};

purchaseBtn.on('click', purchaseCrypto);
sellBtn.on('click', sellCrypto);

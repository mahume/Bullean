const cryptoTransactionType = $('#cryptoTransactionType');
const cryptoDate = $('#cryptoDate');
const cryptoName = $('#cryptoName');
const cryptoSymbol = $('#cryptoSymbol');
const cryptoPrice = $('#cryptoPrice');
const cryptoQuantity = $('#cryptoQuantity');
const cryptoSubmitBtn = $('#cryptoSubmitBtn');

const cryptoAPI = {
  save: crypto =>
    $.ajax({
      headers: {
        'Content-Type': 'application/json',
      },
      type: 'POST',
      url: 'api/crypto',
      data: JSON.stringify(crypto),
    }),
  get: () =>
    $.ajax({
      url: 'api/crypto',
      type: 'GET',
    }),
  delete: id => {
    $.ajax({
      url: `api/crypto/${id}`,
      type: 'DELETE',
    });
  },
};

const submitCrypto = event => {
  event.preventDefault();

  const cryptoData = {
    transaction_date: cryptoDate,
    coin_name: cryptoName.val().trim(),
    coin_symbol: cryptoSymbol.val().trim(),
    coin_price: cryptoPrice.val().trim(),
    coin_quantity: cryptoQuantity.val().trim(),
  };

  cryptoAPI.save(cryptoData).then(() => {});
};

$(cryptoSubmitBtn).on('submit', submitCrypto);

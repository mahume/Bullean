const cryptoTransactionType = $('#cryptoTransactionType');
const cryptoDate = $('#cryptoDate');
const cryptoName = $('#cryptoName');
const cryptoSymbol = $('#cryptoSymbol');
const cryptoPrice = $('#cryptoPrice');
const cryptoQuantity = $('#cryptoQuantity');
const cryptoSubmitBtn = $('#cryptoSubmitBtn');

const cryptoAPI = {
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

const submitCrypto = event => {
  event.preventDefault();

  const transaction = cryptoTransactionType[0].value;
  const cryptoData = {
    transaction_date: cryptoDate[0].value,
    coin_name: cryptoName.val().trim(),
    coin_symbol: cryptoSymbol.val().trim(),
    coin_price: parseInt(cryptoPrice.val().trim()),
    coin_quantity: parseInt(cryptoQuantity.val().trim()),
  };

  console.log(cryptoData);

  switch (transaction) {
    case 'purchase':
      cryptoAPI.save(cryptoData).then(() => {
        console.log('submitted');
      });
      break;
    case 'sale':
      break;
    default:
      break;
  }
};

cryptoSubmitBtn.on('click', submitCrypto);

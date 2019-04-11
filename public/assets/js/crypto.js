const transactionType = document.getElementById('transactionType');
const date = $('#date');
const cryptoName = $('#cryptoName');
const cryptoSymbol = $('#cryptoSymbol');
const price = $('#price');
const quantity = $('#quantity');
const submit = $('#cryptoSubmit');

const API = {
  getCrypto: () => {},
  saveCrypto: crypto =>
    $.ajax({
      headers: {
        'Content-Type': 'application/json',
      },
      type: 'POST',
      url: 'api/crypto',
      data: JSON.stringify(crypto),
    }),
  deleteCrypto: () => {},
};

const handleFormSubmit = event => {
  event.preventDefault();

  const crypto = {
    coin_name: cryptoName.val().trim(),
    coin_symbol: cryptoSymbol.val().trim(),
    purch_date: date,
    purch_price: price.val().trim(),
    purch_quantity: quantity.val().trim(),
  };

  if (!(example.text && example.description)) {
    alert('You must enter an example text and description!');
    return;
  }

  API.saveExample(example).then(function() {
    refreshExamples();
  });

  $exampleText.val('');
  $exampleDescription.val('');
};

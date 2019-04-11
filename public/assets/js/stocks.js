const stockTransactionType = $('#stockTransactionType');
const stockDate = $('#stockDate');
const stockName = $('#stockName');
const stockSymbol = $('#stockSymbol');
const stockPrice = $('#stockPrice');
const stockQuantity = $('#stockQuantity');
const stockSubmitBtn = $('#stockSubmitBtn');

const stockAPI = {
  save: stock =>
    $.ajax({
      headers: {
        'Content-Type': 'application/json',
      },
      type: 'POST',
      url: 'api/stocks',
      data: JSON.stringify(stock),
    }),
  get: () =>
    $.ajax({
      url: 'api/stocks',
      type: 'GET',
    }),
  delete: id => {
    $.ajax({
      url: `api/stocks/${id}`,
      type: 'DELETE',
    });
  },
};

const submitStock = event => {
  event.preventDefault();

  const stockData = {
    transaction_date: stockDate,
    stock_name: stockName.val().trim(),
    stock_symbol: stockSymbol.val().trim(),
    stock_price: stockPrice.val().trim(),
    stock_quantity: stockQuantity.val().trim(),
  };

  stockAPI.save(stockData).then(() => {});
};

$(stockSubmitBtn).on('submit', submitStock);

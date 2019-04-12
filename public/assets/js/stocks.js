const stockTransactionType = $('#stockTransactionType');
const stockDate = $('#stockDate');
const stockName = $('#stockName');
const stockSymbol = $('#stockSymbol');
const stockPrice = $('#stockPrice');
const stockQuantity = $('#stockQuantity');
const stockSubmitBtn = $('#stockSubmitBtn');

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

const submitStock = () => {
  const stocksTransaction = stockTransactionType[0].value;
  const stockData = {
    transaction_date: stockDate[0].value,
    stock_name: stockName.val().trim(),
    stock_symbol: stockSymbol.val().trim(),
    stock_price: parseInt(stockPrice.val().trim()),
    stock_quantity: parseInt(stockQuantity.val().trim()),
  };

  switch (stocksTransaction) {
    case 'purchase':
      API.save(stockData);
      break;
    case 'sale':
      break;
    default:
      break;
  }
};

stockSubmitBtn.on('click', submitStock);

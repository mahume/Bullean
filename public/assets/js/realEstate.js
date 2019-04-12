const realEstateTransactionType = $('#realEstateTransactionType');
const realEstateDate = $('#realEstateDate');
const realEstateAddress1 = $('#realEstateAddress1');
const realEstateAddress2 = $('#realEstateAddress2');
const realEstateCity = $('#realEstateCity');
const realEstateState = $('#realEstateState');
const realEstateZip = $('#realEstateZip');
const realEstatePrice = $('#realEstatePrice');
const realEstateSubmitBtn = $('#realEstateSubmitBtn');

const API = {
  save(realEstate) {
    return $.ajax({
      headers: {
        'Content-Type': 'application/json',
      },
      type: 'POST',
      url: 'api/realestate',
      data: JSON.stringify(realEstate),
    });
  },
  get() {
    return $.ajax({
      url: 'api/realestate',
      type: 'GET',
    });
  },
  delete(id) {
    return $.ajax({
      url: `api/realestate/${id}`,
      type: 'DELETE',
    });
  },
};

const submitRealEstate = () => {
  const realEstateTransaction = realEstateTransactionType[0].value;
  const realEstateData = {
    transaction_date: realEstateDate[0].value,
    prop_address1: realEstateAddress1.val().trim(),
    prop_address2: realEstateAddress2.val().trim(),
    prop_city: realEstateCity.val().trim(),
    prop_state: realEstateState.val().trim(),
    prop_zip: parseInt(realEstateZip.val().trim()),
    prop_price: parseInt(realEstatePrice.val().trim()),
  };

  console.log(realEstateData);

  switch (realEstateTransaction) {
    case 'purchase':
      API.save(realEstateData);
      break;
    case 'sale':
      break;
    default:
      break;
  }
};

realEstateSubmitBtn.on('click', submitRealEstate);

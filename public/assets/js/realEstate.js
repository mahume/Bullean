const realEstateTransactionType = $('#realEstateTransactionType');
const realEstateDate = $('#realEstateDate');
const realEstateAddress1 = $('#realEstateAddress1');
const realEstateAddress2 = $('#realEstateAddress2');
const realEstateCity = $('#realEstateCity');
const realEstateState = $('#realEstateState');
const realEstateZip = $('#realEstateZip');
const realEstatePrice = $('#realEstatePrice');
const realEstateSubmitBtn = $('#realEstateSubmitBtn');

const realEstateAPI = {
  save: realEstate =>
    $.ajax({
      headers: {
        'Content-Type': 'application/json',
      },
      type: 'POST',
      url: 'api/realestate',
      data: JSON.stringify(realEstate),
    }),
  get: () =>
    $.ajax({
      url: 'api/realestate',
      type: 'GET',
    }),
  delete: id => {
    $.ajax({
      url: `api/realestate/${id}`,
      type: 'DELETE',
    });
  },
};

const submitRealEstate = event => {
  event.preventDefault();

  const realEstateData = {
    transaction_date: realEstateDate,
    prop_address1: realEstateAddress1.val().trim(),
    prop_address2: realEstateAddress2.val().trim(),
    prop_city: realEstateCity.val().trim(),
    prop_state: realEstateState.val().trim(),
    prop_zip: realEstateZip.val().trim(),
    prop_price: realEstatePrice.val().trim(),
  };

  realEstateAPI.save(realEstateData).then(() => {});
};

$(realEstateSubmitBtn).on('submit', submitRealEstate);

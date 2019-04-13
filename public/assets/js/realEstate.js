const purchaseAddress1 = $('#purchaseAddress1');
const purchaseAddress2 = $('#purchaseAddress2');
const purchaseCity = $('#purchaseCity');
const purchaseState = $('#purchaseState');
const purchaseZip = $('#purchaseZip');
const purchasePrice = $('#purchasePrice');
const purchaseDate = $('#purchaseDate');
const purchaseBtn = $('#purchaseBtn');

const sellAddress1 = $('#sellAddress1');
const sellAddress2 = $('#sellAddress2');
const sellCity = $('#sellCity');
const sellState = $('#sellState');
const sellZip = $('#sellZip');
const sellPrice = $('#sellPrice');
const sellID = $('#sellID');
const sellDate = $('#sellDate');
const sellBtn = $('#sellBtn');

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

const purchaseRealEstate = () => {
  const purchaseData = {
    date: purchaseDate[0].value,
    address1: purchaseAddress1.val().trim(),
    address2: purchaseAddress2.val().trim(),
    city: purchaseCity.val().trim(),
    state: purchaseState.val().trim(),
    zip: parseInt(purchaseZip.val().trim()),
    price: parseInt(purchasePrice.val().trim()),
  };

  API.save(purchaseData);
  window.location.reload();
};

const sellRealEstate = () => {
  const sellData = {
    id: parseInt(sellID.val().trim()),
    date: sellDate[0].value,
    address1: sellAddress1.val().trim(),
    address2: sellAddress2.val().trim(),
    city: sellCity.val().trim(),
    state: sellState.val().trim(),
    zip: parseInt(sellZip.val().trim()),
    price: parseInt(sellPrice.val().trim()),
  };

  API.delete(sellData.id);
  window.location.reload();
};

purchaseBtn.on('click', purchaseRealEstate);
sellBtn.on('click', sellRealEstate);

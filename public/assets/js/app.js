const API = {
  saveExample(example) {
    return $.ajax({
      headers: {
        'Content-Type': 'application/json',
      },
      type: 'POST',
      url: 'api/examples',
      data: JSON.stringify(example),
    });
  },
  getExamples() {
    return $.ajax({
      url: 'api/crypto',
      type: 'GET',
    });
  },
  deleteExample(id) {
    return $.ajax({
      url: `api/examples/${id}`,
      type: 'DELETE',
    });
  },
};

module.exports = API;

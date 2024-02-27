const mongoose = require('mongoose');

// Connection URL
const url = 'mongodb://localhost:27017/mernproject';

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

  module.exports = mongoose;

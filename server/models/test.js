const models = require('./models');

models.User.create({ displayName: 'Test User' });

models.Session.create({ userID: '62b215e4ac4609ab9ddae550'});
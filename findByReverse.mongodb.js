const database = 'BD3-BRUNO-AULA';

const collection = 'MENSAGENS';

use(database);

db[collection].find().sort({ data: -1, hora: -1 })
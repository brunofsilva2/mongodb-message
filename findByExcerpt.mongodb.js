const database = 'BD3-BRUNO-AULA';

const collection = 'MENSAGENS';

use(database);

db[collection].find({ message: /uminha/i });

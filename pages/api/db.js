import db from '../../db.json';

export default function dbHandler(request, response) {
  response.json(db);
}

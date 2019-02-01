import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com/users';

async function fetchUsers() {
  const users = await axios.get(API_URL);
  return users.data;
}
export default fetchUsers;

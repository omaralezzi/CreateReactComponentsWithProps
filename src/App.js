import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import UserList from './components/UserList/UserList'

import {users} from './listUsers';

function App() {
  return (
    <div className="container mt-3">
       <h1>My Users</h1>
       <UserList users={users} />
    </div>
  );
}

export default App;

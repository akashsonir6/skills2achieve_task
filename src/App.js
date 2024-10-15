import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from './redux/actions/userActions';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import UserDetailsModal from './Components/UserDetailsModal';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const dispatch = useDispatch();
  const { users, error } = useSelector((state) => state.users);
  const [searchTerm, setSearchTerm] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleShow = (user) => {
    setSelectedUser(user);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setSelectedUser(null);
  };

 
  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="mt-5">
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      
      {error && <p className="text-danger">{error}</p>}
      <div className="container">
<div className="row" >
        {filteredUsers.map((user) => (
          <div key={user.id} className="col-md-4 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h2 className="card-title">{user.name}</h2>
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>Phone:</strong> {user.phone}</p>

                <button
                  className="btn btn-primary mt-3"
                  onClick={() => handleShow(user)}
                >
                  Show More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
      

   
      {selectedUser && (
        <UserDetailsModal 
          show={showModal} 
          handleClose={handleClose} 
          user={selectedUser} 
        />
      )}
    </div>
  );
};

export default App;

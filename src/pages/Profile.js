import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link, useParams } from 'react-router-dom';

const Profile = () => {
  const [user, setUser] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => setUser(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title className='user-name'>{user.name}</Card.Title>
          <Card.Text>
            <strong>Username:</strong> {user.username}<br />
            <strong>Email:</strong> {user.email}<br />
            <strong>Phone:</strong> {user.phone}<br />
            <strong>Website:</strong> {user.website}<br />
            <strong>Address:</strong> {user.address && `${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}`}<br />
            <strong>Company:</strong> {user.company && `${user.company.name} - ${user.company.catchPhrase}`}
          </Card.Text>
          <Button variant="primary" className="details-link">
            <Link to="/users" className="link">Go Back</Link>
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Profile;

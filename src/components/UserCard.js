import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import '../App.css'

const UserCard = ({user}) => {
  return (
    <div className='profile'>
    <Card className="card">
        <Card.Body>
          <Card.Title className="user-name">{user.name}</Card.Title>
          <Card.Text>
            <strong>Username:</strong> {user.username}<br />
            <strong>Email:</strong> {user.email}<br />
            <strong>Website:</strong> {user.website}
          </Card.Text>
          <Button variant="primary" className="details-link">
            <Link to={`/profile/${user.id}`} className="link">
              See details
            </Link>
          </Button>
        </Card.Body>
      </Card>
  </div>
  )
}

export default UserCard
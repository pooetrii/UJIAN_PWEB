import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';

import Header from './Header';
import Table from './Table';
import Add from './Add';
import Edit from './Edit';

import { VisitorsData } from '../../data';

const Dashboard = ({ setIsAuthenticated }) => {
  const [Visitors, setVisitors] = useState(VisitorsData);
  const [selectedVisitor, setSelectedVisitor] = useState(null);
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('Visitors_data'));
    if (data !== null && Object.keys(data).length !== 0) setVisitors(data);
  }, []);

  const handleEdit = id => {
    const [Visitor] = Visitors.filter(Visitor => Visitor.id === id);

    setSelectedVisitor(Visitor);
    setIsEditing(true);
  };

  const handleDelete = id => {
    Swal.fire({
      icon: 'warning',
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
    }).then(result => {
      if (result.value) {
        const [Visitor] = Visitors.filter(Visitor => Visitor.id === id);

        Swal.fire({
          icon: 'success',
          title: 'Deleted!',
          text: `${Visitor.Name} ${Visitor.Email}'s data has been deleted.`,
          showConfirmButton: false,
          timer: 1500,
        });

        const VisitorsCopy = Visitors.filter(Visitor => Visitor.id !== id);
        localStorage.setItem('Visitors_data', JSON.stringify(VisitorsCopy));
        setVisitors(VisitorsCopy);
      }
    });
  };

  return (
    <div className="container">
      {!isAdding && !isEditing && (
        <>
          <Header
            setIsAdding={setIsAdding}
            setIsAuthenticated={setIsAuthenticated}
          />
          <Table
            Visitors={Visitors}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        </>
      )}
      {isAdding && (
        <Add
          Visitors={Visitors}
          setVisitors={setVisitors}
          setIsAdding={setIsAdding}
        />
      )}
      {isEditing && (
        <Edit
          Visitors={Visitors}
          selectedVisitor={selectedVisitor}
          setVisitors={setVisitors}
          setIsEditing={setIsEditing}
        />
      )}
    </div>
  );
};

export default Dashboard;

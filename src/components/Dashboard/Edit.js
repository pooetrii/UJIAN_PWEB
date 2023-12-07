import React, { useState } from 'react';
import Swal from 'sweetalert2';

const Edit = ({ Visitors, selectedVisitor, setVisitors, setIsEditing }) => {
  const id = selectedVisitor.id;

  const [Name, setName] = useState(selectedVisitor.Name);
  const [IdMember, setIdMember] = useState(selectedVisitor.IdMember);
  const [email, setEmail] = useState(selectedVisitor.email);
  const [code, setcode] = useState(selectedVisitor.code);
  const [date, setDate] = useState(selectedVisitor.date);
  const [duedate, setduedate] = useState(selectedVisitor.duedate);

  const handleUpdate = e => {
    e.preventDefault();

    if (!Name || !IdMember || !email || !code || !date || !duedate) {
      return Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'All fields are required.',
        showConfirmButton: true,
      });
    }

    const Visitor = {
      id,
      Name,
      IdMember,
      email,
      code,
      date,
      duedate,
    };

    for (let i = 0; i < Visitors.length; i++) {
      if (Visitors[i].id === id) {
        Visitors.splice(i, 1, Visitor);
        break;
      }
    }

    localStorage.setItem('Visitors_data', JSON.stringify(Visitors));
    setVisitors(Visitors);
    setIsEditing(false);

    Swal.fire({
      icon: 'success',
      title: 'Updated!',
      text: `${Visitor.Name} ${Visitor.IdMember}'s data has been updated.`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className="small-container">
      <form onSubmit={handleUpdate}>
        <h1>Edit Visitor</h1>
        <label htmlFor="Name">Name</label>
        <input
          id="Name"
          type="text"
          name="Name"
          value={Name}
          onChange={e => setName(e.target.value)}
        />
        <label htmlFor="IdMember">Id Member</label>
        <input
          id="IdMember"
          type="text"
          name="IdMember"
          value={IdMember}
          onChange={e => setIdMember(e.target.value)}
        />
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <label htmlFor="code">Code</label>
        <input
          id="code"
          type="text"
          name="code"
          value={code}
          onChange={e => setcode(e.target.value)}
        />
        <label htmlFor="date">Date</label>
        <input
          id="date"
          type="date"
          name="date"
          value={date}
          onChange={e => setDate(e.target.value)}
        />
        <label htmlFor="date">Due Date</label>
        <input
          id="duedate"
          type="date"
          name="duedate"
          value={duedate}
          onChange={e => setduedate(e.target.value)}
        />
        <div style={{ marginTop: '30px' }}>
          <input type="submit" value="Update" />
          <input
            style={{ marginLeft: '12px' }}
            className="muted-button"
            type="button"
            value="Cancel"
            onClick={() => setIsEditing(false)}
          />
        </div>
      </form>
    </div>
  );
};

export default Edit;

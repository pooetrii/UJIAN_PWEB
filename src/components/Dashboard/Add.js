import React, { useState } from 'react';
import Swal from 'sweetalert2';

const Add = ({ Visitors, setVisitors, setIsAdding }) => {
  const [Name, setName] = useState('');
  const [IdMember, setIdMember] = useState('');
  const [email, setEmail] = useState('');
  const [code, setcode] = useState('');
  const [date, setDate] = useState('');
  const [duedate, setduedate] = useState('');

  const handleAdd = e => {
    e.preventDefault();

    if (!Name || !IdMember || !email || !code || !date || !duedate) {
      return Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'All fields are required.',
        showConfirmButton: true,
      });
    }

    const id = Visitors.length + 1;
    const newVisitor = {
      id,
      Name,
      IdMember,
      email,
      code,
      date,
      duedate,
    };

    Visitors.push(newVisitor);
    localStorage.setItem('Visitors_data', JSON.stringify(Visitors));
    setVisitors(Visitors);
    setIsAdding(false);

    Swal.fire({
      icon: 'success',
      title: 'Added!',
      text: `${Name} ${IdMember}'s data has been Added.`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className="small-container">
      <form onSubmit={handleAdd}>
        <h1>Add Visitor</h1>
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
          <input type="submit" value="Add" />
          <input
            style={{ marginLeft: '12px' }}
            className="muted-button"
            type="button"
            value="Cancel"
            onClick={() => setIsAdding(false)}
          />
        </div>
      </form>
    </div>
  );
};

export default Add;

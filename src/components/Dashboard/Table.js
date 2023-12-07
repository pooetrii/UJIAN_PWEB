import React from 'react';

const Table = ({ Visitors, handleEdit, handleDelete }) => {
  Visitors.forEach((Visitor, i) => {
    Visitor.id = i + 1;
  });

  return (
    <div className="contain-table">
      <table className="striped-table">
        <thead>
          <tr>
            <th>No.</th>
            <th>Name</th>
            <th>Id Member</th>
            <th>Email</th>
            <th>Code</th>
            <th>Date</th>
            <th>Due Date</th>
            <th colSpan={2} className="text-center">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {Visitors.length > 0 ? (
            Visitors.map((Visitor, i) => (
              <tr key={Visitor.id}>
                <td>{i + 1}</td>
                <td>{Visitor.Name}</td>
                <td>{Visitor.IdMember}</td>
                <td>{Visitor.email}</td>
                <td>{Visitor.code}</td>
                <td>{Visitor.date} </td>
                <td>{Visitor.duedate} </td>
                <td className="text-right">
                  <button
                    onClick={() => handleEdit(Visitor.id)}
                    className="button muted-button"
                    style={{ backgroundColor: "bisque" }}
                  >
                    Edit
                  </button>
                </td>
                <td className="text-left">
                  <button
                    onClick={() => handleDelete(Visitor.id)}
                    className="button muted-button"
                    style={{ backgroundColor: "white" }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={7}>No Visitors</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;

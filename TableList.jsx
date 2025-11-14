import React from 'react';
import livres from './components/Data';

const TableList = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h2>Tableau des Livres</h2>
      <table border="1" style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ background: '#ddd' }}>
            <th style={{ padding: '10px' }}>Titre</th>
            <th style={{ padding: '10px' }}>Auteur</th>
            <th style={{ padding: '10px' }}>Année</th>
            <th style={{ padding: '10px' }}>Genre</th>
            <th style={{ padding: '10px' }}>Note</th>
          </tr>
        </thead>
        <tbody>
          {Livres.map((livre, index) => (
            <tr key={index}>
              <td style={{ padding: '8px' }}>{livre.title}</td>
              <td style={{ padding: '8px' }}>{livre.author}</td>
              <td style={{ padding: '8px' }}>{livre.publicationYear}</td>
              <td style={{ padding: '8px' }}>{livre.genre}</td>
              <td style={{ padding: '8px' }}>{livre.rating}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableList;

import React from 'react';
import livres from './components/Data.jsx';


const DashedList = () => {
     const livres = Data;
  return (
    <div style={{ padding: '20px' }}>
      <h2>Liste des Livres</h2>
      <ul>
        {livres.map((livre, index) => (
          <li key={index}>
            {livre.title} ({livre.author} – {livre.publicationYear})
          </li>
        ))}
      </ul>
    </div>
  );
};
export default DashedList;
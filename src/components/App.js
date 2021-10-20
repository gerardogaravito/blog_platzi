import React from 'react';

const App = () => {
  return (
    <div className='margen'>
      <table className='tabla'>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Enlace</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Gerardo</td>
            <td>gerardo@garavito.com</td>
            <td>gerardo.com</td>
          </tr>
          <tr>
            <td>Platzi</td>
            <td>platzi@garavito.com</td>
            <td>platzi.com</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default App;

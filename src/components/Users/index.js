import React, { useState, useEffect } from 'react';

import { connect } from 'react-redux';
import * as usuariosActions from '../../actions/usuariosActions';

const Users = (props) => {
  useEffect(() => {
    props.traerTodos();
  }, []);

  const ponerFilas = () =>
    props.usuarios.map((user) => (
      <tr key={user.id}>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.website}</td>
      </tr>
    ));

  return (
    <div>
      <table className='tabla'>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Enlace</th>
          </tr>
        </thead>
        <tbody>{ponerFilas()}</tbody>
      </table>
    </div>
  );
};

const mapStateToProps = (reducers) => {
  return reducers.usuariosReducer;
};

export default connect(mapStateToProps, usuariosActions)(Users);

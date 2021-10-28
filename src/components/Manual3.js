import React from 'react';

// class App extends React.Component {
//   state = {
//     name: this.props.name || 'Anonymous',
//   };

//   render() {
//     return <p>Hello {this.state.name}</p>;
//   }
// }

const App = ({ name = 'Anonymous' }) => {
  return <p>Hello {name}</p>;
};

export default App;

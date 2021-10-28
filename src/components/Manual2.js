import React from 'react';

const App = () => {
  const [variable, setVariable] = React.useState(1);

  React.useEffect(() => {
    setTimeout(async () => {
      await setVariable(2);
    }, 3000);

    return doSomethingWithData(variable);
  }, [variable]);

  return (
    <div>
      <h1>Hello, world {variable}!</h1>
    </div>
  );
};

const doSomethingWithData = (variable) => {
  //report e-commerce data to our server here..

  console.log('Variable value is: ' + variable);
};

export default App;

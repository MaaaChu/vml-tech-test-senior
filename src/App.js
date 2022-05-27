import React from 'react'
import Button from './components/button/Button'

const alertUser = () => {
  alert('here')
}

function App() {
  return (
    <div>
      <Button btnDisabled={true} btnText="Test" onClick={alertUser}></Button>
    </div>
  );
}

export default App;

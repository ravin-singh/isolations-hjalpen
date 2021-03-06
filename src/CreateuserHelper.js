import React from 'react'
import Button from '@material-ui/core/Button';

function CreateuserHelper(props) {
  const { setView, createuser } = props
  return (
    <header className="App-header">
      <img src='images/grannleveransen-logo.png' className="App-logo" alt="logo" />
      <h1>Skapa användare - <span className="helper">HJÄLPARE</span></h1>
      <h3>CREATEUSER-HELPER</h3>
      <p>Tryck här för att skapa</p>
      <div className="button-holder">
        <Button variant="contained" color="primary" onClick={() => setView('WELCOME')}>
          Gå tillbaka
        </Button>
        <Button variant="contained" color="primary" onClick={() => createuser('HELPER')}>
          Skapa användare (kaka) - Hjälpare
        </Button>
      </div>
    </header>
  )
}

export default CreateuserHelper
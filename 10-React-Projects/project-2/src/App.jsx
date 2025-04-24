import React from 'react'
import Navigation from './components/Navigation/Navigation'
import ContactHeader from './components/Contact-header/ContactHeader'
import ContactForm from './components/ContactForm/ContactForm'


const App = () => {
  return (
    <>
    <Navigation />
<main className="main_container">
<ContactHeader />
<ContactForm />
</main>
    </>
  )
}

export default App
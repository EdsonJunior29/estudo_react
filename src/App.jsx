import './App.css'
import EventsComponent from './components/EventsComponent';
import FirstComponent from './components/FirstComponent';

function App() {

  const name = 'Edson Junior';
  const data = {
    age : 34,
    job: 'Programmer'
  }

  return (
    <>
      <h1>Hello {name}</h1>
      <h4>I have {data.age} years old</h4>
      <h4>I am {data.job}</h4>

      <FirstComponent/>
      <EventsComponent/>
    </>
  )
}

export default App

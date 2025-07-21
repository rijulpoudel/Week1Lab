import './App.css';
import Calendar from './components/Calendar'

const App = () => {
  return(
    <div className = "App">
      <h1>Itinerary for 7 Days in Chicago</h1>
      <h4>Welcome to Chicago, Natalia! Check our this calendar to get to know the city and see all the sights during your stay.</h4>
      <Calendar />

    </div>
  )
}

export default App
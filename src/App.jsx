
import { Suspense } from 'react'
import './App.css'
import DaisyNav from './components/DaisyNav/DaisyNav'
import NavBar from './components/NAvBar/NavBar'
import PricingOptions from './components/PricingOptions/PricingOptions'
import ResultCharts from './components/ResultsChart/ResultCharts'
import axios from 'axios'
import MarksChart from './components/MarksChart/MarksChart'


const pricingPromise = fetch('pricingData.json').then(res => res.json());
const marksPromise = axios.get('marksData.json')

function App() {
  

  return (
    <>
      <header>
        <NavBar></NavBar>
        {/* <DaisyNav></DaisyNav> */}
      </header>
      <main>
        <Suspense fallback={<span className="loading loading-infinity loading-lg"></span>}>
          <PricingOptions pricingPromise={pricingPromise}></PricingOptions>
        </Suspense>

        <Suspense fallback={<span className="loading loading-infinity loading-lg"></span>}>

          <MarksChart marksPromise={marksPromise}></MarksChart>

        </Suspense>

        <ResultCharts></ResultCharts>
        
      </main>


    
      
      
    </>
  )
}

export default App

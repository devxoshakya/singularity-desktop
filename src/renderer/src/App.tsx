/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import MAC from './hooks/MacComp'
<<<<<<< HEAD
import { Dashboard } from './pages/dashboard'
import ResultExtraction from './pages/ResultExtraction'
import { Records } from './pages/Records'
=======
import Page from './pages/page'
>>>>>>> 70895407abfbc1ab4160418203bee91cb89f25c3
function App(): JSX.Element {
  // const ipcHandle = (): void => window.electron.ipcRenderer.send('ping')
  const [counter, setCounter] = useState(0)

  const increase = () => {
    setCounter(counter + 1)
  }

  const decrease = () => {
    setCounter(counter - 1)
  }

  function Hello(): JSX.Element {
    return <h1>Hello World</h1>
  }

  function Main(): JSX.Element {
    
    return(
      <div className="flex flex-row items-center my-auto justify-center h-screen p-16">
      <Card className="w-[350px] my-auto">
        <CardHeader>
          <CardTitle>Counter: {counter}</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Click on increase / decrease to check the state changes</p>
          <Link to="/hello">
          <p>Click Here To goto Hello page</p>
          </Link>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button onClick={decrease} variant="outline">
            Decrease --
          </Button>
          <Button onClick={increase}>Increase ++</Button>
        </CardFooter>
      </Card>
    </div>
    
    );
  }


  return (
    <Router>
      <Routes>
<<<<<<< HEAD
        <Route path="/" element={<Records />} />
=======
        <Route path="/" element={<Page />} />
>>>>>>> 70895407abfbc1ab4160418203bee91cb89f25c3
        <Route path="/hello" element={<Hello />} />
      </Routes>
    </Router>
  )
}

export default App

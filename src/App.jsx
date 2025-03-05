import Header from "./components/header/Header"
import Main from "./components/main/Main"
import {GlobalProvider} from "./contexts/GlobalContext"

function App() {
  

  return (
    <>

    <GlobalProvider>
      <Header />
      <Main />
    </GlobalProvider>
     
    </>
  )
}

export default App

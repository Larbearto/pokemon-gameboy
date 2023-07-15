import Gameboy from './components/Gameboy'
import GrassField from './public/images/grassfield.png'

function App() {
  return (
    <div className="">
      <img
        src={GrassField}
        alt="background"
        className="fixed bottom-0 left-0 flex w-full min-w-screen h-1/2 -z-50"
      />
      <Gameboy />
    </div>
  )
}

export default App

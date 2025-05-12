import { TreasureChest } from './components/icons'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div className="divide-y divide-gray-200">
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <h1 className="text-3xl font-bold text-center mb-8">Gamification Icons</h1>
                <div className="flex justify-center items-center space-x-4">
                  <TreasureChest className="w-12 h-12 text-blue-500" />
                  <TreasureChest className="w-12 h-12 text-green-500" />
                  <TreasureChest className="w-12 h-12 text-purple-500" />
                </div>
                <p className="text-center mt-8">Your icon library is ready to use!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App 
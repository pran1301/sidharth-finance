// Our first page. The words inside className="..." are Tailwind styles.
function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow-md text-center">
        <h1 className="text-2xl font-bold text-blue-600">Sidharth Finance App</h1>
        <p className="text-gray-500 mt-2">React + Tailwind is working!</p>
      </div>
    </div>
  )
}

export default App
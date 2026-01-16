import './index.css' // <--- Ajoute cette ligne impérativement

function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-green-500/30">
      {/* Barre de navigation */}
      <nav className="flex justify-between items-center p-6 border-b border-white/10 backdrop-blur-md sticky top-0 z-50">
        <div className="text-xl font-black tracking-tighter text-green-500">DANS LA ZONE</div>
        <div className="space-x-8 text-sm font-medium text-gray-400">
          <a href="#" className="hover:text-white transition-colors">ACCUEIL</a>
          <a href="#" className="hover:text-white transition-colors">PROJETS</a>
          <a href="#" className="hover:text-white transition-colors">CONTACT</a>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="max-w-6xl mx-auto px-6 pt-32 pb-20 text-center">
        <h1 className="text-7xl md:text-9xl font-black tracking-tighter mb-8 bg-gradient-to-b from-white to-gray-800 bg-clip-text text-transparent">
          BIENVENUE <br/> DANS LA ZONE.
        </h1>
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-12">
          Ceci est ta nouvelle base. On va constr uire quelque chose d'incroyable ici. 
          Dis-moi ce que tu veux ajouter pour commencer.
        </p>
        <button className="bg-white text-black px-10 py-4 rounded-full font-bold hover:bg-green-500 hover:text-white transition-all transform hover:scale-105">
          DÉCOUVRIR LE PROJET
        </button>
      </main>
    </div>
  )
}

export default App
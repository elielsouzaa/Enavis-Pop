import { useNavigate } from 'react-router-dom'

export default function Menu() {
  const navigate = useNavigate()

  const categorias = [
    { nome: 'Aviários', cor: '#49a44b', caminho: '/aviarios', icone: '🐔' },
    { nome: 'Cria e Recria', cor: '#3b66c5', caminho: '/aviarios', icone: '🐣' },
    { nome: 'CPO', cor: '#4db9ce', caminho: '/aviarios', icone: '🥚' },
    { nome: 'Esterco', cor: '#b03060', caminho: '/aviarios', icone: '💩' },
  ]

  return (
    <div style={{
      background: 'linear-gradient(to bottom, #d5f0c1, #b6e08f)',
      minHeight: '100vh',
      padding: 20
    }}>
      <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <img src="/logo.png" alt="Logo" style={{ width: 50 }} />
          <h2 style={{ margin: 0 }}>Eliel Souza</h2>
          <p style={{ margin: 0, fontSize: 12 }}>Procedimento Operacional Padrão Enavis</p>
        </div>
        <img 
          src="https://via.placeholder.com/40" 
          alt="Avatar" 
          style={{ borderRadius: '50%' }} 
        />
      </header>

      <input 
        type="text" 
        placeholder="Procurar" 
        style={{
          width: '100%',
          padding: 10,
          margin: '20px 0',
          borderRadius: 20,
          border: '1px solid #ccc'
        }}
      />

      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        {categorias.map((cat, index) => (
          <div 
            key={index}
            onClick={() => navigate(cat.caminho)}
            style={{
              background: cat.cor,
              color: 'white',
              fontWeight: 'bold',
              padding: 20,
              borderRadius: 20,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              fontSize: 22,
              cursor: 'pointer',
              boxShadow: '0 4px 8px rgba(0,0,0,0.2)'
            }}
          >
            {cat.nome}
            <span style={{ fontSize: 30 }}>{cat.icone}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

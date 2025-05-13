import { useNavigate } from 'react-router-dom'

interface Procedimento {
  titulo: string
  caminho: string
}

interface ListaProps {
  titulo: string
  procedimentos: Procedimento[]
  corFundo?: string
  corTopo?: string
}

export const ListaProcedimentos = ({ titulo, procedimentos, corFundo = '#d5f0c1', corTopo = '#49a44b' }: ListaProps) => {
  const navigate = useNavigate()

  return (
    <div style={{
      background: `linear-gradient(to bottom, ${corFundo}, #ffffff)`,
      minHeight: '100vh',
      padding: 20
    }}>
      <h1 style={{
        fontWeight: 'bold',
        fontSize: 30,
        textAlign: 'center',
        color: '#ffffff',
        backgroundColor: corTopo,
        padding: 10,
        borderRadius: 10
      }}>
        {titulo}
      </h1>

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

      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {procedimentos.map((item, index) => (
          <div
            key={index}
            onClick={() => navigate(item.caminho)}
            style={{
              backgroundColor: '#0c3d2f',
              color: '#ffffff',
              padding: '15px 20px',
              borderRadius: 20,
              fontWeight: 'bold',
              fontSize: 18,
              cursor: 'pointer',
              boxShadow: '0 4px 6px rgba(0,0,0,0.2)',
              textAlign: 'center'
            }}
          >
            {item.titulo}
          </div>
        ))}
      </div>
    </div>
  )
}

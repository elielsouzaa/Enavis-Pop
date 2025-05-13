// src/pages/Home.tsx
import { useNavigate } from 'react-router-dom'

export default function Home() {
  const navigate = useNavigate()

  return (
    <div style={{
      backgroundColor: '#03391f',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
      color: 'white',
      textAlign: 'center'
    }}>
      <img src="/logo.png" alt="Logo Ovos Enavis" style={{ width: 150, marginBottom: 20 }} />
      <h1 style={{ fontWeight: 'bold' }}>BEM VINDO (A)</h1>
      <p style={{ maxWidth: 300 }}>
        Portal de Procedimentos Operacionais Padrão – o POP Enavis.
        Aqui você encontra manuais simples e diretos para te ajudar a seguir os procedimentos do dia a dia.
        Tudo em um só lugar, fácil de acessar e entender.
      </p>
      <button 
        onClick={() => navigate('/menu')}
        style={{
          marginTop: 20,
          padding: '10px 20px',
          borderRadius: 20,
          border: 'none',
          backgroundColor: 'white',
          color: '#03391f',
          fontWeight: 'bold',
          cursor: 'pointer'
        }}>
        Entrar na Plataforma
      </button>
    </div>
  )
}

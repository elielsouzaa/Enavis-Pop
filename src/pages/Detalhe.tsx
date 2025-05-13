interface DetalheProps {
  titulo: string
}

export default function Detalhe({ titulo }: DetalheProps) {
  return (
    <div style={{
      background: 'linear-gradient(to bottom, #d5f0c1, #b6e08f)',
      minHeight: '100vh',
      padding: 20
    }}>
      <div style={{
        backgroundColor: '#49a44b',
        borderRadius: 10,
        padding: 10,
        marginBottom: 10
      }}>
        <h1 style={{
          fontWeight: 'bold',
          fontSize: 24,
          textAlign: 'center',
          color: '#ffffff'
        }}>
          Aviários
        </h1>
        <p style={{
          textAlign: 'center',
          fontWeight: 'bold',
          color: '#ffffff',
          marginTop: -5
        }}>
          {titulo}
        </p>
      </div>

      <input
        type="text"
        placeholder="Procurar"
        style={{
          width: '100%',
          padding: 10,
          borderRadius: 20,
          border: '1px solid #ccc',
          marginBottom: 20
        }}
      />

      <div style={{
        backgroundColor: '#0c3d2f',
        color: '#ffffff',
        borderRadius: 20,
        padding: 20,
        fontSize: 16,
        lineHeight: 1.5,
        boxShadow: '0 4px 6px rgba(0,0,0,0.2)'
      }}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled it to make a type 
        specimen book. It has survived not only five centuries, but also the leap into 
        electronic typesetting, remaining essentially unchanged.
      </div>
    </div>
  )
}

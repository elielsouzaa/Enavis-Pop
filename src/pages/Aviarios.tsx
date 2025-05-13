import { ListaProcedimentos } from '../components/ListaProcedimentos'
import data from '../data/procedimentos.json'

export default function Aviarios() {
  return (
    <ListaProcedimentos 
      titulo="Aviários" 
      procedimentos={data.aviarios} 
      corFundo="#b6e08f" 
      corTopo="#49a44b"
    />
  )
}

import { ListaProcedimentos } from '../components/ListaProcedimentos'
import data from '../data/procedimentos.json'

export default function Cpo() {
  return (
    <ListaProcedimentos 
      titulo="CPO"
      procedimentos={data.cpo}
      corFundo="#f0d9ff"
      corTopo="#9c4dcc"
    />
  )
}

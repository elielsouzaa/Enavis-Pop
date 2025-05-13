import { ListaProcedimentos } from '../components/ListaProcedimentos'
import data from '../data/procedimentos.json'

export default function Esterco() {
  return (
    <ListaProcedimentos 
      titulo="Esterco"
      procedimentos={data.esterco}
      corFundo="#e8f3d6"
      corTopo="#5a8f1b"
    />
  )
}

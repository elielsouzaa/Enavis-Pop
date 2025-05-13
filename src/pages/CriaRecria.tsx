import { ListaProcedimentos } from '../components/ListaProcedimentos'
import data from '../data/procedimentos.json'

export default function CriaRecria() {
  return (
    <ListaProcedimentos 
      titulo="Cria e Recria"
      procedimentos={data.criaRecria}
      corFundo="#fbeec1"
      corTopo="#e4a84f"
    />
  )
}

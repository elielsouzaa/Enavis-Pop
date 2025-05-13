// src/routes/index.tsx ou AppRoutes.tsx
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from '../pages/Home'
import Menu from '../pages/Menu'
import Aviarios from '../pages/Aviarios'
import CriaRecria from '../pages/CriaRecria'
import CPO from '../pages/CPO'
import Esterco from '../pages/Esterco'
import Detalhe from '../pages/Detalhe'

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />

        {/* Categorias principais */}
        <Route path="/aviarios" element={<Aviarios />} />
        <Route path="/cria-recria" element={<CriaRecria />} />
        <Route path="/cpo" element={<CPO/>} />
        <Route path="/esterco" element={<Esterco />} />

        {/* Detalhes dos Aviários */}
        <Route path="/aviarios/colcho" element={<Detalhe titulo="LIMPEZA DO COLCHO" />} />
        <Route path="/aviarios/esteira" element={<Detalhe titulo="LIMPEZA DA ESTEIRA" />} />
        <Route path="/aviarios/alimentacao" element={<Detalhe titulo="ALIMENTAÇÃO" />} />
        <Route path="/aviarios/ventilacao" element={<Detalhe titulo="VENTILAÇÃO" />} />
        <Route path="/aviarios/coleta" element={<Detalhe titulo="COLETA DE OVOS" />} />
        <Route path="/aviarios/higienizacao" element={<Detalhe titulo="HIGIENIZAÇÃO" />} />

   <Route path="/cria-recria/densidade" element={<Detalhe titulo="DENSIDADE" />} />
<Route path="/cria-recria/alimentacao" element={<Detalhe titulo="ALIMENTAÇÃO" />} />
<Route path="/cria-recria/pesagem" element={<Detalhe titulo="PESAGEM" />} />

<Route path="/cpo/descarte" element={<Detalhe titulo="DESCARTE" />} />
<Route path="/cpo/classificacao" element={<Detalhe titulo="CLASSIFICAÇÃO" />} />

<Route path="/esterco/limpeza" element={<Detalhe titulo="LIMPEZA" />} />
<Route path="/esterco/armazenamento" element={<Detalhe titulo="ARMAZENAMENTO" />} />


        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  )
}

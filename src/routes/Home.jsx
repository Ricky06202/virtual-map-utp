import BarraDeNavegacion from '../components/BarraDeTitulo.jsx'
import MapaDeUTP from '../components/MapaDeUTP.jsx'
import AsistenteChat from '../components/AsistenteChat.jsx'

export default function Home() {
	return (
		<>
		<BarraDeNavegacion />
		<div className='flex flex-row h-auto'>
		<MapaDeUTP/>
		<AsistenteChat />
		</div>
		</>
	)
}

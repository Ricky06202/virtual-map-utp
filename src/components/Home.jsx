import BarraDeNavegacion from './BarraDeTitulo.jsx'
import MapaDeUTP from './MapaDeUTP.jsx'
import AsistenteChat from './AsistenteChat.jsx'

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

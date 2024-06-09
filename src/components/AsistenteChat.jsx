import { Card} from '@tremor/react';
import Campo from '../components/Campo'

export default function AsistenteChat() {
	return (
		<nav className='w-auto m-auto mt-6'>
		<Card className="w-full max-w-xs mx-auto border-2 form-input text-1x" decoration="top">
      <p className="text-3xl font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">Buenos días, ¿cómo puedo asistirte hoy?</p>
    </Card>
	<Campo placeholder="Introduce una petición aqui"/>
		</nav>
	)
}
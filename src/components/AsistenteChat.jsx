import { Card } from '@tremor/react';
import { TextInput } from '@tremor/react';

export default function AsistenteChat() {
	return (
		<nav className='mt-6'>
		<Card className="max-w-xs mx-auto" decoration="top" decorationColor="indigo">
      <p className="text-3xl font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">Buenos días, ¿cómo puedo asistirte hoy?</p>
    </Card>
	<TextInput className="max-w-xs mx-auto" value="Introduce una petición aqui"/>


		</nav>
	)
}
import React from 'https://esm.sh/react';
import {renderToString} from 'https://esm.sh/react-dom/server';
import {serve} from 'https://deno.land/std@0.157.0/http/server.ts';

export default function App() {
	return (
	<>
	<style dangerouslySetInnerHTML={{
		__html: `
		body {
			font-family: system-ui;
			display: grid;
			place-content: center;
			height: 100vh;
			margin 0;
		}

		`
	}}>
		
	</style>
	<h1>Hola mundo!!!!</h1>
	<button>hola</button>
	</>
	
	);
}

serve(
	(req) => {
		const app = renderToString(<App />);

		return new Response(app, {
			headers: {
				'content-type': 'text/html; charset=utf-8',
			},
		});
	},
	{port: 8000},
);

console.log();

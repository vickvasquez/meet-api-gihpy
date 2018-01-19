(()=> {

	const BASE_API = 'https://api.giphy.com'

	const PATH = '/v1/gifs/search'

	const API_KEY = 'n6MCeQ7AzxyAvdcGYndkHoTb3AET7tYF'

	const $container = document.getElementById('container')

	const $form =  document.getElementById('form-busqueda')

	$form.addEventListener('submit', e => {
		e.preventDefault()

		const formData = new FormData($form)

		const busqueda =  formData.get('busqueda')
		$container.innerHTML=''

		pedirDatos(busqueda)
	})


	const pedirDatos = (gif = 'goku') => {
		fetch(`${BASE_API}${PATH}?api_key=${API_KEY}&q=${gif}`)
		.then(data=>data.json())
		.then(dibujarGifs)
		.catch(err=> {
			console.log(err)
		})
	}

	const dibujarGifs = (gifs) => {
		if(gifs.data.length) {

			gifs.data.forEach(gif => {

				const $template = document.getElementById('template').content

				const clone = document.importNode($template, true)

				clone.querySelector('img').src = gif.images.fixed_width.url

				$container.appendChild(clone)
			})


		}
	}

	pedirDatos()

})()
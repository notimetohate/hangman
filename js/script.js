
window.onload = jugar();
function jugar(event){
	// Palabras
	var words = ['abacanado', 'abrochadora', 'abrojo', 'aguinaldo', 'alambre',
		'bicisenda', 'bordeadora', 'botin', 'bruja', 'bulto', 
		'canalla', 'caripela', 'cascarudo', 'chatarra', 'comedor', 
		'defensor', 'dealer' , 'delivery' , 'dietetica', 'dupla',
		'entrecasa', 'encamada', 'enfierrado', 'empleado', 'empate',
		'fibra', 'fibron', 'fideos', 'fitness', 'frigorifico',
		'gasolero', 'gatillar', 'gato', 'globo', 'guion',
		'harina', 'hierba', 'huevo', 'handball', 'hervido',
		'ilicito', 'incendio', 'incineracion', 'inteligencia', 'intencion',
		'jaguar', 'junta', 'jovato', 'jogging', 'jazz',
		'kerosen', 'lamparita', 'lenteja', 'maicena', 'malaria',
		'mazo', 'negro', 'negar', 'nariz', 'notebook',
		'opositor', 'palito', 'pandulce', 'skate', 'quebrado',
		'racista', 'rascalomos', 'rabona', 'rollo', 'reventado',
		'salsa']
	// Se obtiene una palabra de 'words' al azar
	var word = words[Math.floor(Math.random()*words.length)];
	var wordDiv = document.getElementById('word');
	var intentosDiv = document.getElementById('intentos');
	var gameStatus = document.getElementById('status');
		gameStatus.innerHTML = 'Adivina la palabra!';
	var tecla = 'abcdefghijklmnñopqrstuvwxyz';
	// Se crea arreglo respuesta "_ _ _ _ _ _"
	respuesta = [];
	for(var i = 0; i <= word.length -1; i++){ //-1
		respuesta[i] = '_';
	}
	wordDiv.innerHTML = respuesta.join(' ')

	// Intentos restantes
	var intentos = 10;
	// Se toma la letra del usuario
	intentosDiv.innerHTML = 'Intentos restantes: ' + intentos;
	document.onkeyup = function(event){
		if(intentos == 0){
			gameStatus.innerHTML = 'Oops, perdiste!';
			wordDiv.innerHTML = 'La palabra era: ' + "\"" + word + "\"";
			intentosDiv.innerHTML = ':C';
			return;
		}
		var key = event.key;
		// Si la letra introducida esta en la palabra
		for(var z = 0; z < tecla.length; z++){
			if(tecla[z] == key){
					if(word.indexOf(key) > -1){
						for(var x = 0; x <= word.length; x++){
							if(key == word[x]){
								respuesta[x] = word[x];
								wordDiv.innerHTML = respuesta.join(' ');
							} else if(word == respuesta.join('')){
								gameStatus.innerHTML = 'Ganaste!';
							}
						}
					// Si la letra no esta en la palabra
					} else if (word.indexOf(key) == -1 && intentos != 0){
						intentosDiv.innerHTML = 'Intentos restantes: ' + intentos;
						intentos--;
					}			 
			}
		}
	};
}
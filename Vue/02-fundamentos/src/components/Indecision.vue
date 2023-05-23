<script>
export default {
	name: 'Indecision',
};
</script>

<template>
	<img src="https://picsum.photos/2500" alt="bg" />
	<div class="bg-dark"></div>

	<div class="indecision-container">
		<input type="text" placeholder="Hazme una pregunta" />
		<p>Recuerda terminar con un signo de interrogacion (?)</p>
	</div>

	<div>
		<h1>Sere millonario?</h1>
		<h2>Si, No, ....Pensando</h2>
	</div>
</template>

<style>
img,
.bg-dark {
	height: 100vh;
	left: 0;
	max-width: 100%;
	max-height: 100%;
	position: fixed;
	top: 0;
	width: 100vw;
}

.bg-dark {
	background-color: rgba(0, 0, 0, 0.4);
}

.indecision-container {
	position: relative;
	z-index: 1;
}

input {
	width: 15.625rem;
	padding: 0.625rem 0.938rem;
  border-radius: 0.313rem;
  border: none;
}

input:focus {
  outline: none;
}

p {
  color: #FFF;
  font-size: 1.25rem;
  margin-top: 0.625rem;
}

h1, h2 {
  color: #FFF;
  position: relative;
}

h1 {
  margin-top: 9.375rem;
  font-size: 1.25rem;
}
</style>

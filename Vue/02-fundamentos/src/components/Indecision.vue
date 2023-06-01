<script>
export default {
	name: 'Indecision',

	data() {
		return {
			question: null,
			answer: null,
			img: null,
			isValidQuestion: false,
		};
	},

	methods: {
		async getAnswer() {
			this.answer = 'Pensando...';

			const {answer, image} = await fetch('https://yesno.wtf/api').then(
				(resp) => resp.json(),
			);

			this.answer = answer === 'yes' ? 'Si!' : 'No!';
			this.img = image;
		},
	},
	watch: {
		question(value, oldValue) {
			this.isValidQuestion = false;

			if (!value.includes('?')) return;

			this.isValidQuestion = true;

			this.getAnswer();
		},
	},
};
</script>

<template>
	<img v-if="img" :src="img" alt="bg" loading="lazy" />
	<div class="bg-dark"></div>

	<div class="indecision-container">
		<input type="text" v-model="question" placeholder="Hazme una pregunta" />
		<p>Recuerda terminar con un signo de interrogacion (?)</p>
	</div>

	<div v-if="isValidQuestion">
		<h1>{{ question }}</h1>
		<h2>{{ answer }}</h2>
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
	color: #fff;
	font-size: 1.25rem;
	margin-top: 0.625rem;
}

h1,
h2 {
	color: #fff;
	position: relative;
}

h1 {
	margin-top: 9.375rem;
	font-size: 1.5rem;
	font-weight: 600;
}
</style>

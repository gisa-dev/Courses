const app = Vue.createApp({
	// template: `
	// <h1>Hello World</h1>
	// <p>From app.js</p>
	// `,

	data() {
		return {
			quote: "I'm Batman",
			author: 'Bruce Wayne',
		};
	},
	methods: {
		changeQuote() {
			this.author = 'Robin';
      this.capitalize()
		},
		capitalize() {
			this.quote = this.quote.toUpperCase();
		},
	},
});

app.mount('#myApp');

<template>
	<div class="options-container">
		<ul>
			<li>1</li>
			<li>2</li>
			<li>3</li>
			<li>4</li>
		</ul>
	</div>
</template>

<script>
export default {};
</script>

<style scoped>
ul {
	list-style-type: none;
	margin: 0;
	padding: 0;
}
li {
	background-color: #ffff;
	border-radius: 0.3125rem;
	border: 0.0625rem solid rgba(0, 0, 0, 0.2);
	cursor: pointer;
	margin-bottom: 0.625rem;
	width: 15.625rem;
	display: flex;
	justify-content: center;
	align-items: center;
}

li:hover {
	background-color: rgba(0, 0, 0, 0.05);
}

.options-container {
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 1.25rem;
}
</style>

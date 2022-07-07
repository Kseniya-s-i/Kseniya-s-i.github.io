<script lang="ts">
	import IP from '$lib/IP.svelte';
</script>

<div class="main">
	<div class="navbar">
		<a href="/" style="padding:0;margin:0;display:inline-block;padding-right:30px">
			<img src="/assets/logos/logo2.png" style="max-height: 50px;" /></a
		>
		<a href="about">About</a>
		<a href="job">Job</a>
		<a href="contacts">Contacts</a>
	</div>

	<slot />
	<footer>
		<div class="foot">
			<div class="nav">
				<p style="float: left;display: block;margin-top: 29px;font-size: 12px;">Kazan</p>
				<IP />
				<img
					src="/assets/logos/logo2.png"
					style="max-height: 30px;display:block;float: right;margin-top: 23px;margin-right: -20px;"
				/>
			</div>
		</div>
	</footer>
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,400;0,700;1,400;1,700&display=swap');
	body {
		margin: 0 auto 0 auto;
		padding: 0;
		font-family: 'Montserrat', sans-serif;
		width: 100%;
		height: 100%;
		color: white;
		background-color: #2d2d2d;

		-ms-user-select: none;
		-moz-user-select: none;
		-webkit-user-select: none;
		user-select: none;
	}
	html {
		scroll-behavior: smooth;
	}
	.nav {
		max-width: 900px;
		margin: auto;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		margin-top: 100px;
	}
	.navbar {
		overflow: hidden;
		background-color: #2d2d2d;
		position: fixed;
		top: 0;
		width: 100%;
		height: 50px;
		display: flex;
		padding-top: 15px;
		max-width: 900px;
		margin: auto;
	}

	.navbar a {
		float: left;
		display: block;
		color: #f2f2f2;
		text-align: center;
		padding: 15px 30px 5px 30px;
		text-decoration: none;
		width: 70px;
		transition-duration: 0.2s;
		border-radius: 10px;
	}

	.navbar a:hover {
		background: transparent;
		color: #63e2b5;
		transition-duration: 0.8s;
	}
	.foot {
		width: 100%;
		height: 70px;
		background-color: #2d2d2d;
		margin-top: -50px;
	}
	:root {
		margin: auto;
		max-width: 1000px;
		font-family: 'Montserrat', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva,
			Verdana, sans-serif;
	}
</style>

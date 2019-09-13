<template>
	<section class="first-screen">
		<h1 class="main-title">Цифровая экономика
стала реальностью</h1>
	</section>
</template>
<script>

</script>

<style lang="scss" scoped>

	.first-screen {
		height: 100vh;
		/* min-height: 400px; */
		background: -webkit-linear-gradient(#1A024F 0%, #570066 100%);
		background: -o-linear-gradient(#1A024F 0%, #570066 100%);
		background: linear-gradient(#1A024F 0%, #570066 100%);
		opacity: .9;
		position: relative;
		z-index: 0;
		display: flex;
		justify-content: center;
		padding-top: 165px;
	
		&::before{
			content: " ";
			position: absolute;
		    top: 0;
		    right: 0;
		    bottom: 0;
		    left: 0;
		    z-index: 1;
		    background: #0C0519;
		    opacity: .9;
		}
	
		& > * {
			position: relative;
	        	z-index: 5;
		}
	}

	.main-title {
		font-family: 'Museo Sans Cyrl', Arial, sans-serif;
		font-size: 22px;
	    font-weight: 900;
	    color: #fff;
	    text-align: center;
		width: 100%;
		max-width: 250px;
		margin: 0;
	}


	@media all and (min-width: 1440px) and (max-width: 1919px) {
		.first-screen {
			padding-top: 250px;
		}

		.main-title {
			font-size: 50px;
			font-weight: 900;
			max-width: 600px;
		}
	}

	@media all and (min-width: 1920px) {
		.first-screen {
			padding-top: 360px;
		}

		.main-title {
			font-size: 65px;
			font-weight: 900;
			max-width: 800px;
		}
	}

</style>
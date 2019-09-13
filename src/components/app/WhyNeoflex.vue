<template>
	<section class="why-neoflex">
		<h2 class="why-neoflex__title">Почему &laquoНеофлекс&raquo?</h2>

		<div class="why-neoflex__circle">

			<carousel :nav="false" :items="1" :responsive="{991:{items:4}}" class="advantage__slider" :dots="false">

				<template slot="prev">
	   				<span class="prev">
		   				<svg width="25" height="24" viewBox="0 0 40 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="svg">
							<path d="M39.3107 13.0616C39.8964 12.4759 39.8964 11.5261 39.3107 10.9403L29.7647 1.39437C29.1789 0.808588 28.2292 0.808588 27.6434 1.39437C27.0576 1.98016 27.0576 2.92991 27.6434 3.5157L36.1287 12.001L27.6434 20.4863C27.0576 21.072 27.0576 22.0218 27.6434 22.6076C28.2292 23.1934 29.1789 23.1934 29.7647 22.6076L39.3107 13.0616ZM0.75 13.501H38.25V10.501H0.75V13.501Z" fill="white"/>
						</svg>
	   				</span>
	   			</template>

				    <div class="why-neoflex__img">
				    	<p class="why-neoflex__descr">Использование всех преимуществ передовых IT-технологий</p>
				    </div>

				     <div class="why-neoflex__img">
				    	<p class="why-neoflex__descr">Использование всех преимуществ передовых IT-технологий</p>
				    </div>

				    <div class="why-neoflex__img">
				    	<p class="why-neoflex__descr">Использование всех преимуществ передовых IT-технологий</p>
				    </div>

	  			<template slot="next">
	  				<span class="next">
		  				<svg width="25" height="24" viewBox="0 0 40 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="svg">
							<path d="M39.3107 13.0616C39.8964 12.4759 39.8964 11.5261 39.3107 10.9403L29.7647 1.39437C29.1789 0.808588 28.2292 0.808588 27.6434 1.39437C27.0576 1.98016 27.0576 2.92991 27.6434 3.5157L36.1287 12.001L27.6434 20.4863C27.0576 21.072 27.0576 22.0218 27.6434 22.6076C28.2292 23.1934 29.1789 23.1934 29.7647 22.6076L39.3107 13.0616ZM0.75 13.501H38.25V10.501H0.75V13.501Z" fill="white"/>
						</svg>
					</span>
				</template>
			</carousel>
		</div>

	</section>
</template>

<script>
	import carousel from 'vue-owl-carousel'

	export default {
	    components: { carousel },
	}
</script>

<style lang="scss" scoped>

	.why-neoflex {
		background: #fff;
		width: 100%;
		display: flex;
		-webkit-flex-direction: column;
		-moz-flex-direction: column;
		-ms-flex-direction: column;
		-o-flex-direction: column;
		flex-direction: column;
		justify-content: center;
		-ms-align-items: center;
		align-items: center;
		overflow: hidden;
		padding: 40px 25px 0;

		&__title {
			font-size: 22px;
			font-weight: 900;
			line-height: 1.2;
			text-align: center;
			margin-bottom: 25px;
			background: -webkit-linear-gradient(180deg, #1A024F 0%, #570066 100%), #3C143D;
			background: -o-linear-gradient(180deg, #1A024F 0%, #570066 100%), #3C143D;
			background: linear-gradient(180deg, #1A024F 0%, #570066 100%), #3C143D;
			-webkit-background-clip: text;
			-moz-background-clip: text;
			background-clip: text;
			-webkit-text-fill-color: transparent;

			& > * {
				font-size: 50px;
				quotes: "\00ab" "\00bb";
			}
		}

		&__circle {
			position: relative;
			width: 130%;
			min-width: 477px;
			height: 432px;
			border-radius: 50%;
			background: -webkit-linear-gradient(335deg, #1A024F 9.76%, #570066 68.02%), #3C143D no-repeat;
			background: -o-linear-gradient(335deg, #1A024F 9.76%, #570066 68.02%), #3C143D no-repeat;
			background: linear-gradient(65deg, #1A024F 9.76%, #570066 68.02%), #3C143D no-repeat;
			overflow: hidden;
			padding: 150px 90px 0 75px;
			margin: 0 -10px;
		}

		&__descr {
			width: 100%;
			max-width: 320px;
			font-size: 22px;
			font-weight: 900;
			color: #fff;
			line-height: 1.3;
			text-align: left;
		}
	}

	.prev, .next {
			display: block;
			position: absolute;
			bottom: 80px;
			z-index: 5;
			width: 37px;
			height: 37px;
			border-radius: 50%;
			border: 1px solid #fff;
			background: transparent;

			& > svg {
				position: absolute;
				top: 22%;
				left: 19%;
				width: 23px;
				height: 20px;
				-webkit-background-size: contain;
				background-size: contain;
			}

			&:hover, &:hover > svg path {
				border: 1px solid #F2584A;
				fill: #F2584A;
			}
		}

		.prev {
			left: 85px;
			transform: rotate(180deg);
		}

		.next {
			right: 85px;
		}

	@media all and (min-width: 992px) {
		.why-neoflex {


			&__circle {
				display: none;
			}
		}

	}


	@media all and (min-width: 1440px) and (max-width: 1919px) {

		.why-neoflex {

			&__title {
				font-size: 45px;
				margin-bottom: 25px;
			}
		}

	}

	/* @media all and (min-width: 1920px) {

		.why-neoflex {
			padding-top: 400px;

			&__title {
			font-size: 60px;
			margin-bottom: 25px;
			}
		}

	}
 */




</style>
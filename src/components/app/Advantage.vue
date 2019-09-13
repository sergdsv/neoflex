<template>
	<section class="advantage">
		<h2 class="advantage__title">Почему мы делаем быстро и качественно?</h2>

		<carousel :nav="false" :items="1" :responsive="{991:{items:4}}" class="advantage__slider">

   			<template slot="prev">
   				<span class="prev">
	   				<svg width="25" height="24" viewBox="0 0 40 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="svg">
						<path d="M39.3107 13.0616C39.8964 12.4759 39.8964 11.5261 39.3107 10.9403L29.7647 1.39437C29.1789 0.808588 28.2292 0.808588 27.6434 1.39437C27.0576 1.98016 27.0576 2.92991 27.6434 3.5157L36.1287 12.001L27.6434 20.4863C27.0576 21.072 27.0576 22.0218 27.6434 22.6076C28.2292 23.1934 29.1789 23.1934 29.7647 22.6076L39.3107 13.0616ZM0.75 13.501H38.25V10.501H0.75V13.501Z" fill="white"/>
					</svg>
   				</span>
   			</template>

			    <div class="advantage__img">
			    	<img src="@/assets/img/advantage-slide2.jpg">
			    	<p class="advantage__descr">Понимаем бизнес-процессы и обладаем глубокой технологической экспертизой</p>
			    </div>

			    <div class="advantage__img">
			    	<img src="@/assets/img/advantage-slide1.jpg">
			    	<p class="advantage__descr">Понимаем бизнес-процессы и обладаем глубокой технологической экспертизой</p>
			    </div>

			    <div class="advantage__img">
			    	<img src="@/assets/img/advantage-slide1.jpg">
			    	<p class="advantage__descr">Понимаем бизнес-процессы и обладаем глубокой технологической экспертизой</p>
			    </div>

  			<template slot="next">
  				<span class="next">
	  				<svg width="25" height="24" viewBox="0 0 40 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="svg">
						<path d="M39.3107 13.0616C39.8964 12.4759 39.8964 11.5261 39.3107 10.9403L29.7647 1.39437C29.1789 0.808588 28.2292 0.808588 27.6434 1.39437C27.0576 1.98016 27.0576 2.92991 27.6434 3.5157L36.1287 12.001L27.6434 20.4863C27.0576 21.072 27.0576 22.0218 27.6434 22.6076C28.2292 23.1934 29.1789 23.1934 29.7647 22.6076L39.3107 13.0616ZM0.75 13.501H38.25V10.501H0.75V13.501Z" fill="white"/>
					</svg>
				</span>
			</template>

		</carousel>

		<div class="gradient-wrapper">
        	<a href="#" class="advantage__button">Подробнее</a>
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

	.advantage {
		padding-top: 85px;

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
			color: transparent;
			padding: 0 25px;
			margin-bottom: 15px;
		}

		&__descr {
			width: 100%;
			max-width: 320px;
			font-size: 22px;
			font-weight: 900;
			color: #fff;
			line-height: 1.3;
			text-align: left;
			position: absolute;
			top: 112px;
			left: 24px;
			z-index: 2;
		}

		&__slider {
			position: relative;
			margin-bottom: 30px;
		}

		&__img {
			position: relative;

			/* &::after {
				content: " ";
				position: absolute;
			    top: 0;
			    right: 0;
			    bottom: 0;
			    left: 0;
			    z-index: 1;
			    background: -webkit-linear-gradient(354deg, #1A024F 9.76%, #570066 68.02%), #3C143D;
			    background: -o-linear-gradient(354deg, #1A024F 9.76%, #570066 68.02%), #3C143D;
			    background: linear-gradient(84deg, #1A024F 9.76%, #570066 68.02%), #3C143D;
			    opacity: .7;
			} */
		}

		&__button {
			display: block;
			width: 100%;
			max-width: 250px;
			padding: 15px 0;
			border: 2px solid #1A024F;
			border-radius: 70px;
			font-size: 18px;
			font-weight: 700;
			text-align: center;
			color: transparent;
			background: -webkit-linear-gradient(180deg, #1A024F 0%, #570066 100%), #3C143D;
			background: -o-linear-gradient(180deg, #1A024F 0%, #570066 100%), #3C143D;
			background: linear-gradient(180deg, #1A024F 0%, #570066 100%), #3C143D;
			-webkit-background-clip: text;
			-moz-background-clip: text;
			background-clip: text;
			margin: 0 auto;
		}

		.prev, .next {
			display: block;
			position: absolute;
			bottom: 60px;
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
			left: 40px;
			transform: rotate(180deg);
		}

		.next {
			right: 40px;
		}



	}


</style>
<template>
	<section class="creat-it">
		<h2 class="creat-it__title">Создаем ИТ-платформы для цифровой трансформации бизнеса</h2>

		<p class="creat-it__text">Узнайте как наши инновационные решения помогают компаниям
           получать устойчивые конкурентные преимущества в цифровую эпоху</p>

       <carousel :nav="false" :items="2" :center="true" :responsive="{991:{items:4}}" class="creat-it__slider">

   			<template slot="prev"><span class="prev"></span></template>

			    <div class="img-wrapper">
			    	<img src="@/assets/img/raiffeisen-blue.png">
			    </div>

			    <div class="img-wrapper">
			    	<img src="@/assets/img/raiffeisen-yellow.png">
			    </div>

			    <div class="img-wrapper">
			    	<img src="@/assets/img/raiffeisen-orange.png">
			    </div>

			    <div class="img-wrapper">
			    	<img src="@/assets/img/mtc.png">
			    </div>

			    <div class="img-wrapper">
			    	<img src="@/assets/img/vtb.png">
			    </div>

  			<template slot="next"><span class="next"></span></template>

		</carousel>

        <div class="gradient-wrapper">
        	<a href="#" class="creat-it__button">Все проекты</a>
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

	.img-wrapper {
		margin: 0 -23px;
	}

	.creat-it {
		padding-top: 30px;

		&__title {
			font-size: 22px;
			font-weight: 900;
			text-align: center;
			line-height: 1.2;
			margin-bottom: 25px;
			background: -webkit-linear-gradient(180deg, #1A024F 0%, #570066 100%), #3C143D;
			background: -o-linear-gradient(180deg, #1A024F 0%, #570066 100%), #3C143D;
			background: linear-gradient(180deg, #1A024F 0%, #570066 100%), #3C143D;
			-webkit-background-clip: text;
			-moz-background-clip: text;
			background-clip: text;
			color: transparent;
			padding: 0 25px;
			margin-bottom: 8px;
		}

		&__text {
			font-size: 16px;
			font-weight: 500;
			line-height: 1.3;
			text-align: center;
			padding: 0 35px;
			margin-bottom: 30px;
		}

		&__slider {
			position: relative;
			margin-bottom: 30px;
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
	}

	.prev, .next {
		display: none;
	}


.owl-dot span  {
	background: red;
}

	@media all and (min-width: 991px) {

		.prev, .next {
			display: block;
			position: absolute;
			z-index: 2;
			width: 37px;
			height: 37px;
			border-radius: 50%;
			background: linear-gradient(180deg, #1A024F 0%, #570066 100%), #3C143D;

		&::before {
			content: " ";
			display: block;
			position: absolute;
			top: 31%;
			left: 19%;
			width: 23px;
			height: 20px;
			background: url('../../assets/img/Arrow.svg') no-repeat;
			-webkit-background-size: contain;
			background-size: contain;
		}
	}

		.prev {
			top: 50%;
			left: 1%;
			transform: rotate(180deg);
		}

		.next {
			top: 50%;
			right: 1%;
		}
	}


</style>
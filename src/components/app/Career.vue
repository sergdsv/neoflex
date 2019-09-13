<template>
	<section class="career">
		<h2 class="career__title">Карьера</h2>

		<div class="crr-block">
				<div class="crr-block__wrapper">
					<p class="crr-block__text"><span class="crr-block__number">26</span> открытых вакансий в Москве, Саратове и Воронеже</p>
					<p class="crr-block__text">«Неофлекс» — это не просто работа, это образ жизни</p>
					<p class="crr-block__join">Присоединяйся!</p>
				</div>
				<a href="#" class="crr-block__button">Все вакансии</a>
		</div>

	</section>
</template>

<script>
	
</script>

<style lang="scss" scoped>

	.career {
		padding-top: 75px;
		/*  display: flex;
		flex-direction: column;
		-ms-align-items: center;
		align-items: center; */
		margin-bottom: 50px; /*delete */

		&__title {
			font-size: 22px;
			font-weight: 900;
			text-align: center;
			margin-bottom: 25px;
			background: -webkit-linear-gradient(180deg, #1A024F 0%, #570066 100%), #3C143D;
			background: -o-linear-gradient(180deg, #1A024F 0%, #570066 100%), #3C143D;
			background: linear-gradient(180deg, #1A024F 0%, #570066 100%), #3C143D;
			-webkit-background-clip: text;
			-moz-background-clip: text;
			background-clip: text;
			-webkit-text-fill-color: transparent;
		}
	}

	.crr-block {
		position: relative;
		z-index: 0;
		/* width: 130%; */
		width: 813px;
		height: 555px;
		font-size: 22px;
		font-weight: 900;
		color: #fff;
		line-height: 1.2;
		border-radius: 50%;
		background: url('../../assets/img/bg-career.png') no-repeat;
		/* -webkit-background-size: cover;
		background-size: cover; */
		margin: 0 -100px;
		/* background-position: center; */
		overflow: hidden;
		padding: 100px;

			p:first-child {
				width: 100%;
				max-width: 300px;
				margin-bottom: 20px;
			}

			p:nth-child(2) {
				width: 100%;
				max-width: 325px;
				margin-bottom: 35px;
			}

	&__wrapper {
		padding-left: 18%;
	}

	&__number {
		font-size: 34px;
	}

	&__join {
		font-size: 28px;
	}

	&__button {
		display: block;
		width: 100%;
		max-width: 250px;
		padding: 15px 0;
		border: 2px solid #fff;
		border-radius: 70px;
		font-size: 18px;
		font-weight: 700;
		text-align: center;
		color: #fff;
		margin: 0 auto;
	}

}

	


	@media all and (min-width: 992px) {

		.why-neoflex {

		}

	}


	@media all and (min-width: 1440px) and (max-width: 1919px) {}

	/* @media all and (min-width: 1920px) {

		

	}
 */




</style>
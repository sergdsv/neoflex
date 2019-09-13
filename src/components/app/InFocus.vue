<template>
	<section class="in-focus">
		<h2 class="in-focus__title">Сегодня в фокусе</h2>

		<div class="in-focus__cards">
			
			<InfocusCard class="animated fadeInLeft"
				:infocustext="'Эффективные цифровые каналы и бизнес-процессы'"
				:fcard="'fcard1'"
			/>
			<InfocusCard class="animated fadeInDown"
				:infocustext="'Анализ и принятие решений на основе AI и Big Data'"
				:fcard="'fcard2'"
			/>
			<InfocusCard class="animated fadeInRight"
				:infocustext="'Соответствие требованиям регулятора'"
				:fcard="'fcard3'"
			/>


		</div>
	</section>
</template>

<script>

</script>

<style lang="scss" scoped>

	.in-focus {
		display: none;
		font-family: 'Museo Sans Cyrl', Arial, sans-serif;
		display: flex;
		-ms-align-items: center;
		align-items: center;
		-webkit-flex-direction: column;
		-moz-flex-direction: column;
		-ms-flex-direction: column;
		-o-flex-direction: column;
		flex-direction: column;
		margin-top: -180px;
		width: 100%;

		&__title {
			font-size: 18px;
			font-weight: 900;
			text-align: center;
			margin-bottom: 25px;
			background: -webkit-linear-gradient(left, #FF6B00 0%, #FF007A 100%);
			background: -o-linear-gradient(left, #FF6B00 0%, #FF007A 100%);
			background: linear-gradient(to right, #FF6B00 0%, #FF007A 100%);
			-webkit-background-clip: text;
			-moz-background-clip: text;
			background-clip: text;
			position: relative;
			z-index: 5;
			color: transparent;
		}

		&__cards {
			display: flex;
			flex-direction: column;
			justify-content: center;
			position: relative;
			z-index: 5;

		}

		&__card {
			width: 100%;
			max-width: 300px;
			height: 360px;
			background-color: #150F1E;
			background-repeat: no-repeat;
			-webkit-background-size: 160%;
			background-size: 160%;
			border-radius: 28px;
			padding: 95px 30px 20px;
			display: flex;
			-webkit-flex-direction: column;
			-moz-flex-direction: column;
			-ms-flex-direction: column;
			-o-flex-direction: column;
			flex-direction: column;
			justify-content: space-between;
		}

		&__text {
			font-size: 22px;
			line-height: 1.5;
			color: #fff;
			font-weight: 900;
			padding: 0 15px;
		}
	}

	.fcard1{
		background-image: url('../../assets/img/bg-card1.png');
		background-position: -147px 43px;
	}

	.fcard2{
		background-image: url('../../assets/img/bg-card2.png');
		background-position: -20px 115px;
	}

	.fcard3{
		background-image: url('../../assets/img/bg-card3.png');
		background-position: -37px 105px;
	}

	.in-focus__card:not(:last-child) {
		margin-bottom: 32px;
	}

	.in-focus__link {
		display: none;
	}

	.in-focus__link-circle {
		display: block;
		-ms-align-self: flex-end;
		align-self: flex-end;
	}

	@media all and (min-width: 992px) {

		.in-focus {
			position: static;
		}

		.in-focus__link {
			display: none;
		}

		.in-focus__card:hover > .in-focus__link {
			display: block;
		}
	}

@media all and (min-width: 1440px) and (max-width: 1919px) {
	.in-focus {
		top: 500px;

		&__title {
			font-size: 40px;
		}
		&__cards {
			flex-direction: row;
		}

		&__card {
			max-width: 390px;
			height: 500px;
			border-radius: 36px;
			-webkit-background-size: 120%;
			background-size: 120%;
			padding: 125px 57px 20px;

			&:not(:last-child){
				margin-bottom: 0;
				margin-right: 30px;
			}
		}

		&__text {
			font-size: 28px;
			font-weight: 900;
			color: #fff;
			padding: 0;
		}
	}

	.fcard1{
		background-position: -141px 188px;
	}

	.fcard2{
		background-position: 80px 233px;
	}

	.fcard3{
		background-position: 68px 244px;
	}

	.in-focus__link {
		font-size: 28px;
		font-weight: 700;
		color: #fff;
		-ms-align-self: center;
		align-self: center;
	}

	.in-focus__link-circle {
		display: none;
	}
}

@media all and (min-width: 1920px) {
	.in-focus {
		top: 680px;

		&__title {
			font-size: 50px;
		}

		&__cards {
			flex-direction: row;
		}

		&__card {
		max-width: 450px;
		height: 600px;
		border-radius: 40px;
		-webkit-background-size: 120%;
		background-size: 120%;
		padding: 120px 60px 20px;

			&:not(:last-child) {
				margin-bottom: 0;
				margin-right: 30px;
			}
		}

		&__text {
			font-size: 34px;
			line-height: 1.5;
			color: #fff;
			padding: 0;
		}
	}

	.fcard1{
		background-position: -141px 188px;
	}

	.fcard2{
		background-position: 80px 233px;
	}

	.fcard3{
		background-position: 68px 244px;
	}

	.in-focus__link {
		display: block;
		font-size: 32px;
		color: #fff;
		-ms-align-self: center;
		align-self: center;
	}

	.in-focus__link-circle {
		display: none;
	}
}
</style>
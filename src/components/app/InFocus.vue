<template>
	<section class="in-focus">
		<h2 class="in-focus__title">Сегодня в фокусе</h2>

		<div class="in-focus__cards">
			<a class="in-focus__card fcard1" >
				<p class="in-focus__text">
					Эффективные цифровые каналы и бизнес-процессы
				</p>
				<a href="#" class="in-focus__link">Узнать</a>

				<a href="#" class="in-focus__link-circle">
					<svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
						<circle cx="28" cy="28" r="27" stroke="white" stroke-width="2"/>
						<path d="M41.7071 28.7071C42.0976 28.3166 42.0976 27.6834 41.7071 27.2929L35.3431 20.9289C34.9526 20.5384 34.3195 20.5384 33.9289 20.9289C33.5384 21.3195 33.5384 21.9526 33.9289 22.3431L39.5858 28L33.9289 33.6569C33.5384 34.0474 33.5384 34.6805 33.9289 35.0711C34.3195 35.4616 34.9526 35.4616 35.3431 35.0711L41.7071 28.7071ZM15 29H41V27H15V29Z" fill="white"/>
					</svg>
				</a>
			</a>

			<a class="in-focus__card fcard2">
				<p class="in-focus__text">
					Анализ и принятие решений на основе AI и Big Data
				</p>
				<a href="#" class="in-focus__link">Узнать</a>

				<a href="#" class="in-focus__link-circle">
					<svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
						<circle cx="28" cy="28" r="27" stroke="white" stroke-width="2"/>
						<path d="M41.7071 28.7071C42.0976 28.3166 42.0976 27.6834 41.7071 27.2929L35.3431 20.9289C34.9526 20.5384 34.3195 20.5384 33.9289 20.9289C33.5384 21.3195 33.5384 21.9526 33.9289 22.3431L39.5858 28L33.9289 33.6569C33.5384 34.0474 33.5384 34.6805 33.9289 35.0711C34.3195 35.4616 34.9526 35.4616 35.3431 35.0711L41.7071 28.7071ZM15 29H41V27H15V29Z" fill="white"/>
					</svg>
				</a>
			</a>

			<div class="in-focus__card fcard3">
				<p class="in-focus__text">
					Соответствие требованиям регулятора
				</p>
				<a href="#" class="in-focus__link">Узнать</a>

				<a href="#" class="in-focus__link-circle">
					<svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
						<circle cx="28" cy="28" r="27" stroke="white" stroke-width="2"/>
						<path d="M41.7071 28.7071C42.0976 28.3166 42.0976 27.6834 41.7071 27.2929L35.3431 20.9289C34.9526 20.5384 34.3195 20.5384 33.9289 20.9289C33.5384 21.3195 33.5384 21.9526 33.9289 22.3431L39.5858 28L33.9289 33.6569C33.5384 34.0474 33.5384 34.6805 33.9289 35.0711C34.3195 35.4616 34.9526 35.4616 35.3431 35.0711L41.7071 28.7071ZM15 29H41V27H15V29Z" fill="white"/>
					</svg>
				</a>
			</div>
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
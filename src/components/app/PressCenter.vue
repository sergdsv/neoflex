<template>
	<section class="press-center">
		<h2>
			<a href="#" class="press-center__title">Пресс-центр</a>
		</h2>

		<div class="block-wrapper">
			<div class="news-wrapper">
				<a href="#" class="press-center__news">Новости</a>
			</div>
			<a href="#" class="press-center__publications">Публикации</a>
		</div>

		<div class="card-block">
			<div class="pc-card">
				<div class="pc-card__header">
					<a href="#" class="pc-card__news">Новость</a>
					<a href="#" class="pc-card__dots">
						<span></span>
						<span></span>
						<span></span>
					</a>
				</div>
				<img src="../../assets/img/pc-card.jpg" alt="Картинка" class="pc-card__img">
				<p class="pc-card__descr">Латвийский банк Citadele управляет кредитными рисками с помощью «Неофлекс»</p>
				<div class="pc-card__footer">
					<span class="pc-card__date">12.07.19</span>
					<a href="#" class="pc-card__detail">Подробнее</a>
				</div>
			</div>
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

	.press-center__title h2{
		text-decoration: underline;
	}

	.press-center {
		padding-top: 80px;
		display: flex;
		flex-direction: column;
		-ms-align-items: center;
		align-items: center;

		&__title {
			display: inline-block;
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
			border-bottom: 2px solid transparent;

			&:hover {
				border-bottom: 2px solid #570066;
			}
		}

		.block-wrapper {
			width: 100%;
			max-width: 300px;
			display: flex;
			-ms-align-items: center;
			align-items: center;
			justify-content: space-between;
			margin-bottom: 50px;
		}

		.news-wrapper {
			display: flex;
			-ms-align-items: center;
			align-items: center;
			justify-content: center;
			width: 130px;
			height: 130px;
			background-color: #259AFF;
			border-radius: 50%;
			font-size: 16px;
			font-weight: 700;
		}

		&__news {
			display: block;
			font-size: 16px;
			font-weight: 700;
			color: #fff;
			text-align: center;
		}

		&__publications {
			font-size: 16px;
			font-weight: 700;
			color: #150F1E;

			&:hover {
				text-decoration: underline;
			}
		}

	}

		.pc-card {
			width: 248px;
			height: 400px;
			border-radius: 28px;
			background-color: #fff;
			box-shadow:  10px 10px 40px 15px rgba(241,192,254, .4), 0 40px 40px 15px rgba(181,188,255, .2);

			&__header {
				display: flex;
				justify-content: space-between;
				-ms-align-items: center;
				align-items: center;
				padding: 20px;
			}
			&__news {
				font-size: 14px;
				font-weight: 900;
				color: #337AB7;
				text-transform: uppercase;
			}
			&__dots {
				width: 40px;
				display: flex;
				justify-content: space-between;

				& > *{
					$card-dots: 8px;
					display: block;
					width: $card-dots;
					height: $card-dots;
					background-color: #337AB7;
					border-radius: 50%;
				}
			}
			&__img {
				height: 160px;
			}
			&__descr {
				height: 120px;
				font-size: 15px;
				font-weight: 700;
				line-height: 1.3;
				color: #150F1E;
				padding: 25px 25px 0;
			}
			&__footer {
				display: flex;
				justify-content: space-between;
				-ms-align-items: center;
				align-items: center;
				padding: 25px;

				& > * {
					color: #259AFF;
					font-weight: 700;
				}
			}
			&__date {
				font-size: 12px;
			}
			&__detail {
				font-size: 15px;
			}
		}

	@media all and (min-width: 992px) {

		.why-neoflex {

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
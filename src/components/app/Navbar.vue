<template>
	<section class="navigation">
		<nav class="navbar">

			<a href="#" class="navbar__logo"><img src="@/assets/img/logo.svg" alt="Neoflex"></a>

			<ul class="navbar__list">
				<li class="navbar__item">
					<a href="#" class="navbar__link">Решение</a>
				</li>
				<li class="navbar__item">
					<a href="#" class="navbar__link">Услуги</a>
				</li>
				<li class="navbar__item">
					<a href="#" class="navbar__link">О компании</a>
				</li>
				<li class="navbar__item">
					<a href="#" class="navbar__link">Пресс-центр</a>
				</li>
				<li class="navbar__item">
					<a href="#" class="navbar__link">Контакты</a>
				</li>
			</ul>

			<div class="navbar__right">
				<a href="#" class="navbar__lang">RU</a>

				<!-- <input type="search" class="search"> -->
				<svg class="search" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M38.722 36.4337L29.202 26.5323C31.6497 23.6225 32.9909 19.9614 32.9909 16.15C32.9909 7.24502 25.7459 0 16.8409 0C7.93594 0 0.690918 7.24502 0.690918 16.15C0.690918 25.0549 7.93594 32.3 16.8409 32.3C20.1839 32.3 23.3697 31.2916 26.0934 29.3775L35.6858 39.354C36.0868 39.7704 36.626 40 37.2039 40C37.7509 40 38.2698 39.7915 38.6637 39.4123C39.5007 38.6069 39.5274 37.2714 38.722 36.4337ZM16.8409 4.21304C23.4231 4.21304 28.7778 9.56781 28.7778 16.15C28.7778 22.7322 23.4231 28.0869 16.8409 28.0869C10.2587 28.0869 4.90396 22.7322 4.90396 16.15C4.90396 9.56781 10.2587 4.21304 16.8409 4.21304Z" fill="white"/>
				</svg>
			</div>

			<button class="navbar__toggler">
				<span class="toggler-line"></span>
				<span class="toggler-line"></span>
				<span class="toggler-line"></span>
			</button>
		</nav>

	</section>
</template>
<script>
	
</script>

<style lang="scss" scoped>

	.navigation {
		position: absolute;
		z-index: 10;
		width: 100%;
	}

	.navbar {
		display: flex;
		justify-content: space-between;
		-ms-align-items: center;
		align-items: center;
		padding: 15px 25px;
		width: 100%;
	}

	.navbar__list, .navbar__right {
		display: none;
	}

	.navbar__toggler {
		border: none;
		background-color: transparent;
	}

	.toggler-line {
		display: block;
		width: 32px;
		height: 4px;
		border-radius: 10px;
		background: linear-gradient(90deg, #FF6B00 0%, #FF007A 100%);
		margin-bottom: 6px;
	}

	@media all and (min-width: 800px) {
		.navbar__toggler {
			display: none;
		}

		.navbar__list, .navbar__right {
			font-family: 'Museo Sans Cyrl', Arial, sans-serif;
		    font-weight: 500;
		    font-style: normal;
			font-size: 15px;
			color: #fff;
			display: flex;
			justify-content: space-between;
			-ms-align-items: center;
			align-items: center;

		}

		.navbar__link {
			color: #fff;
			transition: all 2s ease;

			&:hover {
				background: linear-gradient(90deg, #FF6B00 0%, #FF007A 100%);
				-webkit-background-clip: text;
				-moz-background-clip: text;
				background-clip: text;
				-webkit-text-fill-color: transparent;
			}
		}

		.navbar__lang {
			color: #fff;
		}
	}

	@media all and (min-width: 1440px) and (max-width: 1919px) {
		.navbar {
			padding: 35px 75px 35px;

			&__list {
				width: 100%;
				max-width: 770px;
			}

			&__right {
				width: 100%;
				max-width: 130px;
			}
		}

		.navbar, .navbar__list, .navbar__right {
			font-size: 18px;
		}

		.search {
			width: 29px;
			height: 30px;
		}
	}

	@media all and (min-width: 1920px) {
		.navbar {
			padding: 54px 83px 54px;

			&__list {
				width: 100%;
				max-width: 1065px;
			}

			&__right {
				width: 100%;
				max-width: 155px;
			}
		}

		.navbar, .navbar__list, .navbar__right {
			font-size: 24px;
		}

		.search {
			width: 39px;
			height: 40px;
		}
	}

</style>
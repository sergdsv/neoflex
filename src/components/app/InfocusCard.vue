<template>

    <div class="in-focus__card" @mouseover="show = true" @mouseleave="show = false">
                    <p class="in-focus__text" v-html="infocustext">
                        
                    </p>
                    <transition
                    name="focuscard"
                    enter-active-class="animated fadeInLeft"
                    leave-active-class="animated fadeOutRight"
                    >

                    <a v-if="show" href="#" class="in-focus__link focuscard">Узнать</a>
                    </transition>
                    <transition
                    name="focuscard1"
                    enter-active-class="animated fadeInLeft"
                    leave-active-class="animated fadeOutRight"
                    >
                    <a href="#" class="in-focus__link-circle" v-if="show">
                        <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="28" cy="28" r="27" stroke="white" stroke-width="2"/>
                            <path d="M41.7071 28.7071C42.0976 28.3166 42.0976 27.6834 41.7071 27.2929L35.3431 20.9289C34.9526 20.5384 34.3195 20.5384 33.9289 20.9289C33.5384 21.3195 33.5384 21.9526 33.9289 22.3431L39.5858 28L33.9289 33.6569C33.5384 34.0474 33.5384 34.6805 33.9289 35.0711C34.3195 35.4616 34.9526 35.4616 35.3431 35.0711L41.7071 28.7071ZM15 29H41V27H15V29Z" fill="white"/>
                        </svg>
                    </a>
                    </transition>
    </div>


</template>

<script>

export default{
    props: ['infocustext', 'fcard'],
	data() {
        return{
            show: false
        }
    },
}

</script>

<style scoped>
.focuscard{
    transition: all 200ms ease-in;
}
.focuscard-enter-active-class, .focuscard-leave-active-class {
  transition-duration: 1.5s;
}

	.in-focus {
		font-family: 'Museo Sans Cyrl', Arial, sans-serif;
		display: flex;
		-ms-align-items: center;
		align-items: center;
		-webkit-flex-direction: column;
		-moz-flex-direction: column;
		-ms-flex-direction: column;
		-o-flex-direction: column;
		flex-direction: column;
		position: absolute;
		/* transform: translateY(-220px); */
		top: 280px;
		width: 100%;
	}

	.in-focus__title {
		font-size: 18px;
		font-weight: 900;
		text-align: center;
		margin-bottom: 25px;
		background: linear-gradient(90deg, #FF6B00 0%, #FF007A 100%);
		-webkit-background-clip: text;
		-moz-background-clip: text;
		background-clip: text;
		-webkit-text-fill-color: transparent;
	}

	.in-focus__cards {
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.in-focus__card {
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

	.in-focus__text {
		font-size: 22px;
		line-height: 1.5;
		color: #fff;
		font-weight: 900;
		padding: 0 15px;
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
	}

	.in-focus__title {
		font-size: 40px;
	}

	.in-focus__cards {
		flex-direction: row;
	}

	.in-focus__card {
		max-width: 390px;
		height: 500px;
		border-radius: 36px;
		-webkit-background-size: 120%;
		background-size: 120%;
		padding: 125px 57px 20px;
	}

	.in-focus__card:not(:last-child) {
		margin-bottom: 0;
		margin-right: 30px;
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

	.in-focus__text {
		font-size: 28px;
		font-weight: 900;
		color: #fff;
		padding: 0;
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
	}

	.in-focus__title {
		font-size: 50px;
	}

	.in-focus__cards {
		flex-direction: row;
	}

	.in-focus__card {
		max-width: 450px;
		height: 600px;
		border-radius: 40px;
		-webkit-background-size: 120%;
		background-size: 120%;
		padding: 120px 60px 20px;
	}

	.in-focus__card:not(:last-child) {
		margin-bottom: 0;
		margin-right: 30px;
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

	.in-focus__text {
		font-size: 34px;
		line-height: 1.5;
		color: #fff;
		padding: 0;
	}

	.in-focus__link {
		display: block;
		font-size: 32px;
		color: #fff;
		-ms-align-self: center;
		align-self: center;
	}

	.in-focus__link-circle {
		display: block;
	}
}
</style>
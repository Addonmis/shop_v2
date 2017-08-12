<template lang="jade">
.container
	div(v-for="product in products[0]").card
		router-link(:to="'/product/'+product.id_product")
			.cont_main
				.cont_body
					input(:value="product.id_product" style="display: none").prod_id
					.card-image
						img(:src="loadImg(product.image_path)" alt="" width="240px" height="290px").product_img
					span.card-header-title.product_title {{product.name}}
					span.content.product_price {{product.price}} RUB
				footer.card-footer
					.card-footer-item like
					.card-footer-item cart
		//.product_button
		//  a(href="").product_button_cart
		//    img(src="../public/img/ic_shopping_cart_black_24px.svg")
</template>

<script>
import axios from 'axios';

import {mapGetters} from 'vuex';

export default {
	beforeRouteEnter(to, from, next){
		next((vm) => {
			vm.load_products();
		});
	},
	computed: mapGetters({
		products: 'get_all_products'
	
	}),
	methods: {
		load_products(){
			this.$store.dispatch("load_products");
		},
		loadImg(path) {
			return require('../assets' + path);
		}
	}
}

</script>

<style lang="sass" scoped>
.container
	margin-top: 30px
	.card
		.cont_body
			padding: 15px 30px 15px 30px
		margin-right: 30px
		padding-top: 20px
		float: left
		margin-bottom: 50px
		&:nth-child(3n)
			margin-right: 0
		&:hover
			box-shadow: 0px 0px 9px 1px rgba(0,0,0,0.2)
		.product_img
			display: block
			margin: 0 auto
			height: 205px
			width: 100%
			max-width: 210px
		.product_title
			display: block
			text-align: center
			font-weight: bold
			font-size: 1.1em
			border-bottom: 1px solid
		.product_price
			margin-top: 15px
			display: block
			text-align: center
			font-size: 1em
		.product_button
			text-align: center
			&:before
				content: ""
				display: block
				width: 80%
				height: 2px
				margin: 0 auto 20px
				background-color: gray
		.card-footer
			margin-top: 0
</style>

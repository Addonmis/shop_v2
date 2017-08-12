<template lang="jade">
	.product_detail
		span.name {{product.name}}
		.price
			span {{product.price}} R
		.description
			span {{product.description}}
		.action
			.count
				span 1
			.add_to_cart 
				span Add to cart
</template>

<script>

import {mapGetters} from 'vuex';

export default {
	computed: mapGetters({
		product: 'get_product'
	}),
}

</script>

<style lang="sass" scoped>
.product_detail
	padding: 40px 0
	color: #1F252A
	.name
		font-family: 'Times New Roman', 'sans-serif'
		font-size: 40px
		margin: 10px 0
	.price
		span
			color: #FE0069
			font-size: 24px
		margin: 10px 0
	.description
		font-family: 'Times New Roman', 'sans-serif'
		font-size: 18px
	.action
		display: inline-block
		margin: 20px 0 0 0
		.count
			display: inline-block
			padding: 10px 28px
			background-color: #F2F2F2
			color: #000000
		.add_to_cart
			display: inline-block
			padding: 10px 40px
			background-color: #1F252A
			color: #FFFFFF

</style>

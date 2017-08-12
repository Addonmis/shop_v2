<template lang="jade">
	.container
		span(v-if="message") access
		form(@submit.prevent="login")
			p(v-if="formError").error {{formError}}
			label(for="").label username
			input(type="text" v-model="formUsername" name="username").input
			label(for="").label password
			input(type="text" v-model="formPassword" name="password").input
			button(type="submit").button Login
</template>

<script>

export default {
	data(){
		return{
			formError: null,
			formUsername: "",
			formPassword: "",
			message: false
		}
	},
	methods: {
		login () {
			this.$store.dispatch('login', {
				username: this.formUsername,
				password: this.formPassword
			})
			.then(() => {
				this.formUsername = ''
				this.formPassword = ''
				this.formError = null
				this.message = true
			})
			.catch((e) => {
				this.formError = e.message
			})
		}
	}
}

</script>
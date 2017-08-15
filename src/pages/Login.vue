<template lang="jade">
	.container
		article(v-if="formError").meassage.is-danger
			.message-body
				span {{formError}}
		article(v-if="message").meassage.is-danger
			.message-body
				span {{message}}
		.auth_wrap.box
			.tabs.is-centered
				ul
					li(@click="changeForm('signin')").li_in.is-active
						a SignIn
					li(@click="changeForm('signup')").li_up
						a SignUp
			form(@submit.prevent="login" v-show="FormSignIn").SignIn
				label(for="").label username
				input(type="text" v-model="formUsername" name="username").input
				label(for="").label password
				input(type="password" v-model="formPassword" name="password").input
				button(type="submit").button Sign in
			form(@submit.prevent="registration" v-show="FormSignUp").SignUp
				label(for="").label username
				input(type="text" v-model="formUsername" name="username").input
				label(for="").label password
				input(type="password" v-model="formPassword" name="password").input
				label(for="").label re-password
				input(type="password" v-model="formRePassword").input
				button(type="submit").button Sign up
</template>

<script>

import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';

export default {
	data(){
		return{
			formError: null,
			message: null,
			formUsername: "",
			formPassword: "",
			formRePassword: "",
			FormSignIn: true,
			FormSignUp: false
		}
	},
	methods: {
		changeForm(tab){
			if (tab === "signin"){
				this.FormSignIn = true;
				document.querySelector(".li_in").classList.add("is-active");
				document.querySelector(".SignIn").style.display = "block";
				this.FormSignUp = false;
				document.querySelector(".li_up").classList.remove("is-active");
				document.querySelector(".SignUp").style.display = "none";
			}
			if (tab === "signup"){
				this.FormSignIn = false;
				document.querySelector(".li_in").classList.remove("is-active");
				document.querySelector(".SignIn").style.display = "none";
				this.FormSignUp = true;
				document.querySelector(".li_up").classList.add("is-active");
				document.querySelector(".SignUp").style.display = "block";
			}
		},
		validation(username, password, repassword){
			let error = '';
			if (isEmpty(username)){
				error = "The user name is not entered";
			}
			if (isEmpty(password)){
				error = "Password not entered";
			}
			if (!Validator.isLength(password, {min: 8, max: undefined})){
				error = "Min password length 8 characters";
			}
			if (this.FormSignUp){
				if (isEmpty(repassword)){
					error = "Re-password not entered";
				}
				if (password !== repassword){
					error = "Passwords do not match";
				}
			}
			return {error, isValid: isEmpty(error)}
		},
		login(){
			if (this.validation(this.formUsername, this.formPassword, this.formRePassword).isValid){
				this.$store.dispatch('login', {
					username: this.formUsername,
					password: this.formPassword
				})
				.then(() => {
					this.formUsername = ''
					this.formPassword = ''
					this.formRePassword = ''
					this.formError = null
					this.message = "Access"
				})
				.catch((e) => {
					this.formError = e.message
				})
			} else{
				this.formError = this.validation(this.formUsername, this.formPassword, this.formRePassword).error
			}
		},
		registration(){
			if (this.validation(this.formUsername, this.formPassword, this.formRePassword).isValid){
				this.$store.dispatch('registration', {
					username: this.formUsername,
					password: this.formPassword
				})
				.then(() => {
					this.formUsername = ''
					this.formPassword = ''
					this.formRePassword = ''
					this.formError = null
					this.message = "Access"
				})
				.catch((e) => {
					this.formError = e.message
				})
			} else{
				this.formError = this.validation(this.formUsername, this.formPassword, this.formRePassword).error
			}
		}
	}
}

</script>

<style lang="sass" scoped>
	.auth_wrap
		margin: 50px auto
		width: 100%
		max-width: 400px
		height: 400px
	.SignIn,
	.SignUp
		button
			margin-top: 10px
</style>
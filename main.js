var app = new Vue({
	el: '#app',
	data: {
		message: 'Hello world!'
	}
})

var app2 = new Vue({
	el: '#app-2',
	data: {
		message: 'you loaded this page on ' + new Date()
	}
})

var app3 = new Vue({
	el: '#app-3',
	data: {
		seen: true
	}
})

var app4 = new Vue({
	el: '#app-4',
	data: {
		todos:[
			{text: 'Learn JavaScript'},
			{text: 'Learn Vue'},
			{text: 'Build something'}
		]
	}
})

var app5 = new Vue({
	el: '#app-5',
	data: {
		message: '论理性与感性'
	},
	methods: {
		reverseMessage: function(){
			this.message = this.message.split('').reverse().join('');
		}
	}
})
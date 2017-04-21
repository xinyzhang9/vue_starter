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

var app6 = new Vue({
	el: '#app-6',
	data: {
		message: 'hello vue!'
	}
})

Vue.component('todo-item',{
	props: ['todo'],
	template: '<li>this is {{ todo.text }}</li>'
})

var app7 = new Vue({
	el: '#app-7',
	data: {
		groceryList:[
			{text: 'Vegetable'},
			{text: 'Cheese'},
			{text: 'Hamburger'}
		]
	}
})



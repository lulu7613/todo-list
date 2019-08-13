
var app = new Vue({
  el: '#app',
  data: {
    newTodo: '',
    todos: [
      {
        text: '你好',
        id: '123',
        complete: false,
      }
    ],
    visibility: 'all',
  },
  methods: {
    addTodo: function () {
      let value = this.newTodo.trim()
      let id = Math.floor(Date.now())
      if (!value) { return }
      this.todos.push({
        text: value,
        id: id,
        complete: false
      })
      this.newTodo = ''
    },
    removeTodo: function (index) {
      this.todos.splice(index, 1)
    }
  },
  computed: {
    filteredTodos: function () {
      let newTodos = []
      let vm = this

      if (this.visibility == 'all') {
        newTodos = this.todos
      }
      else if (this.visibility == 'active') {
        vm.todos.forEach(function (item) {
          if (!item.complete) {
            newTodos.push(item)
          }
        });
      }
      else if (this.visibility == 'completed') {
        vm.todos.forEach(function (item) {
          if (item.complete) {
            newTodos.push(item)
          }
        });
      }
      
      return newTodos
    }
  },
})

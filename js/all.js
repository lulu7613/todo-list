
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
    cacheTodo: {},
    cacheTitle: ''
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
    removeTodo: function (item) {
      // this.todos.splice(index, 1)
      let newIndex = ''
      this.todos.forEach(function (todo, key) {
        if (item.id === todo.id) {
          newIndex = key
        }
      })
      this.todos.splice(newIndex, 1)
    },
    editTodo: function (item) {
      this.cacheTodo = item
      this.cacheTitle = item.text
    },
    cancelEdit: function () {
      this.cacheTodo = {}
    },
    doneEdit: function(item){
      console.log(item);
      item.text = this.cacheTitle
      this.newTodo = item.text
      this.cacheTodo = {}
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

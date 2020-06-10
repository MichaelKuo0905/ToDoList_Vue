var app = new Vue({
  el: '#app',
  data: {
    newTodo:'',
    todos:[
      
    ],
    visibility:"all",
    cachetodo:{},
    cachetitle:'',
  },
  methods:{
    addTodo:function(){
      var value=this.newTodo.trim();
      var timestamp=Math.floor(Date.now());
      if (!value){
        return;
      }
      this.todos.push(
        {id:timestamp,
        title:value,
        completed:false
        });
      this.newTodo="";
    },
    removeTodo:function(todo){
      // var newIndex="";
      var vm=this;
      // vm.todos.forEach(function(item,key){
      //   if(todo.id === item.id){
      //     newIndex=key;
      //   }
      // })
      var newIndex=vm.todos.findIndex(function(item,key){
        return todo.id===item.id;
      })

      this.todos.splice(newIndex,1);
    },
    editTodo:function(item){
      this.cachetodo=item;
      this.cachetitle=item.title;
      
    },
    cancelEdit:function(){
      this.cachetodo={};
    },
    doneEdit:function(item){
      item.title=this.cachetitle;
      this.cachetitle="";
      this.cachetodo={};
    },
    clearall:function(){
      this.todos=[];

    }
  },
  computed:{
    filterTodo:function(){
      if (this.visibility=='all'){
        return this.todos
      }
      else if (this.visibility =='active'){
        var newTodos=[];
        this.todos.forEach(function(item){
          if(!item.completed){
            newTodos.push(item)
          }
        })
        return newTodos;
      }
      else if (this.visibility =="completed"){
        var newTodos=[];
        this.todos.forEach(function(item){
          if(item.completed){
            newTodos.push(item);
          }
        })
        return newTodos;
      }

      
    },
    undfinished:function(){
      var newTodos=[];
      this.todos.forEach(function(item){
          if(!item.completed){
            newTodos.push(item)
          }
        })
      return newTodos.length;
    }

  }

});
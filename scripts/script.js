var todoModule = (function(){
  /* private data / methods */


  /* public data / methods */
  return {
    addButton: document.querySelector('.todoModule .add'),
    form: document.querySelector('.todoModule form'),
    clearButton: document.querySelector('.todoModule .clear'),
    input: document.querySelector('.todoModule input'),
    list: document.querySelector('.todoModule .list'),
    items: document.querySelector('.todoModule .item-count'),


    addItem: function(evt){
      evt.preventDefault();
      
      if(this.input.value === ''){
        alert('You must enter some text!');
      }else {
        var itemText = document.createTextNode(this.input.value);
        var item = document.createElement('li');

        var checkbox = document.createElement('input');
        checkbox.addEventListener('click', this.checkItem, true);
        checkbox.setAttribute('type','checkbox');

        item.appendChild(itemText);
        item.appendChild(checkbox);

        this.list.appendChild(item);
        this.input.value = '';
        
        var numItems = parseInt(this.items.innerHTML);
        numItems++;
        this.items.innerHTML = numItems;
      }
    },

    clearAll: function(){
      while(this.list.firstChild){
        this.list.removeChild(this.list.firstChild);
      }
      this.items.innerHTML = 0; 
    },

    checkItem: function(){
      var item = this.parentElement;
      if(this.checked === true){
        item.style.textDecoration="line-through";
        var numItems = parseInt(todoModule.items.innerHTML);
        numItems--;
        todoModule.items.innerHTML = numItems;        
      }else{
        item.style.textDecoration="none";
        var numItems = parseInt(todoModule.items.innerHTML);
        numItems++;
        todoModule.items.innerHTML = numItems;      
      }
    }
  };

}());

console.log(todoModule);

todoModule.form.addEventListener('submit', todoModule.addItem.bind(todoModule));
todoModule.addButton.addEventListener('click', todoModule.addItem.bind(todoModule));
todoModule.clearButton.addEventListener('click', todoModule.clearAll.bind(todoModule));


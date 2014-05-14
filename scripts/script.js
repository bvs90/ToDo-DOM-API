var todoModule = (function(){
  /* private data / methods */


  /* public data / methods */
  return {
    addButton: document.querySelector('.todoModule .add'),
    clearButton: document.querySelector('.todoModule .clear'),
    form: document.querySelector('.todoModule input'),
    list: document.querySelector('.todoModule .list'),
    items: document.querySelector('.todoModule .item-count'),


    addItem: function(){
      if(this.form.value === ''){
        alert('You must enter some text!');
      }else {
        var itemText = document.createTextNode(this.form.value);
        var item = document.createElement('li');

        var checkbox = document.createElement('input');
        checkbox.addEventListener('click', this.checkItem, true);
        checkbox.setAttribute('type','checkbox');

        item.appendChild(itemText);
        item.appendChild(checkbox);

        this.list.appendChild(item);
        this.form.value = '';
        
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
      console.log(this.parentElement);
      var item = this.parentElement;
      if(this.checked === true){
        item.style.textDecoration="line-through";
      }else{
        item.style.textDecoration="none";
      }
    }


  };

}());

console.log(todoModule);

todoModule.addButton.addEventListener('click', todoModule.addItem.bind(todoModule));
todoModule.clearButton.addEventListener('click', todoModule.clearAll.bind(todoModule));


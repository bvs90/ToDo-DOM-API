var todoModule = (function(){
  /* private data / methods */


  /* public data / methods */
  return {
    button: document.querySelector('.todoModule button'),
    form: document.querySelector('.todoModule input'),
    list: document.querySelector('.todoModule .list'),
    items: document.querySelector('.todoModule .item-count'),

    addItem: function(){
      var itemText = document.createTextNode(this.form.value);
      var item = document.createElement('li');
      item.appendChild(itemText);
      this.list.appendChild(item);
      this.form.value = '';
      
      var numItems = parseInt(this.items.innerHTML);
      numItems++;
      this.items.innerHTML = numItems;
    }
  };

}());

console.log(todoModule);

todoModule.button.addEventListener('click', todoModule.addItem.bind(todoModule));


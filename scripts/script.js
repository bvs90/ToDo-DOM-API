var todoModule = (function(){
  /* private data / methods */


  /* public data / methods */
  return {
    button: document.querySelector('.todoModule button'),
    form: document.querySelector('.todoModule input'),
    list: document.querySelector('.todoModule .list'),

    addItem: function(){
      var itemText = document.createTextNode(this.form.value);
      var item = document.createElement('li');
      item.appendChild(itemText);
      this.list.appendChild(item);
      this.form.value = '';
    },
  };

}());

console.log(todoModule);

todoModule.button.addEventListener('click', todoModule.addItem.bind(todoModule));


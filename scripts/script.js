var todoModule = (function(){
  /* private data */


  /* public data / methods */
  return {
    button: document.querySelector('button'),
    form: document.querySelector('input'),

    addItem: function(){
      console.log(this.form);
    },


  };

}());

console.log(todoModule);

todoModule.button.addEventListener('click', todoModule.addItem.bind(todoModule));


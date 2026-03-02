"use strict";
/*    JavaScript 7th Edition
      Chapter 6
      Chapter case

      Order Form Code
      Author: tristan owen
      Date:   3/3/2026

      Filename: js06a.js
 */
window.addEventListener("load", function() {
      let orderForm = document.forms.orderForm;
      let model = orderForm.elements.model;
      // select Model section list when form opens 
      model.focus();

      // cslculate cost of order
      calcOrder();
      function calcOrder() {
            //determine selected model
            let mIndex = model.selectedIndex;
            let mValue = model.options[mIndex].value;

            //determine selected quantity
            let qIndex = orderForm.elements.qty.selectedIndex;
            let quantity = orderForm.elements.qty[qIndex].value;

            //model cost = model cost times quantity
            let modelCost = mValue*quantity;
            orderForm.elements.modelCost.value = modelCost;

      };
});



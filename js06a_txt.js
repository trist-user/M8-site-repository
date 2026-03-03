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
      for (let i = 0; i <orderForm.elements.length; i++) {
            orderForm.elements[i].addEventListener("change", calcOrder);
      };

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
            orderForm.elements.modelCost.value = modelCost.toLocaleString("en-US", {style: "currency", currency: "USD"});

            // retrieve cost of protection plan
            let planValue = document.querySelector('input[name="plan"]:checked').value;

            //charge the plan to each item ordered
            let planCost = planValue * quantity;
            orderForm.elements.planCost.value = planCost.toLocaleString("en-US", {style: "currency", currency: "USD"});

            let subtotal = modelCost + planCost;
            orderForm.elements.subtotal.value = subtotal.toLocaleString("en-US", {style: "currency", currency: "USD"});

            let salesTax = subtotal * 0.05;
            orderForm.elements.salesTax.value = salesTax.toLocaleString("en-US", {style: "currency", currency: "USD"});

            let totalCost = subtotal + salesTax;
            orderForm.elements.totalCost.value = totalCost.toLocaleString("en-US", {style: "currency", currency: "USD"});

            orderForm.elements.modelName.value = model.options[mIndex].text;
            let selectedPlan = document.querySelector('input[name="plan"]:checked');
            orderForm.elements.planName.value= selectedPlan.labels[0].textContent;

      };
});



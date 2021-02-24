$( document ).ready( readyNow );

const budget = 25000;
let purchases = [];

function displayPurchases(){
  console.log( 'in displayPurchases' );
  // target output by ID
  let el = $( '#purchaseOut' );
  // empty
  el.empty();
  // loop through purchases array
  for ( purchase of purchases ){
    // for each purchase, create a list item
    el.append( `<li>` + purchase.name + `: $` + purchase.price + `</li>` );
  } // end for
} // end displayPurchases

function calculateRemainingBudget(){
  console.log( 'in calculateRemainingBudget' );
  // loop through purchases array
  let totalPrices = 0;
  for ( let i = 0; i < purchases.length; i++ ){
    // for each purchse, add up total of all prices
    totalPrices += Number( purchases[ i ].price );
  } // end for
  console.log( 'totalPrices:', totalPrices );
  // subtract totalPrices from budget for remainingBudget
  const remainingBudget = budget - totalPrices;
  // display remainingBudget
  let el = $( '#remainingBudgetOut' );
  el.empty();
  el.append( remainingBudget );
} // end calculateRemainingBudget

function addPurchase(){
  console.log( 'in addPurchase' );
  // get user input create a new object
  let newPurchase = {
    name: $( '#purchaseNameIn' ).val(),
    price: $( '#purchasePriceIn' ).val()
  }
  // push the new purchase into the array
  purchases.push( newPurchase );
  // empty inputs
  $( '#purchaseNameIn' ).val( '' );
  $( '#purchasePriceIn' ).val( '' );
  // calculate remainingBudget
  calculateRemainingBudget();
  // update DOM
  displayPurchases();
} // end addPurchase

function readyNow(){
  // display budget
  // target budgetOut by id
  let el = $( '#budgetOut' );
  el.empty();
  el.append( budget );
  // handle click event
  $( '#addPurchaseButton' ).on( 'click', addPurchase );
  // init display
  calculateRemainingBudget();
} // end readyNow

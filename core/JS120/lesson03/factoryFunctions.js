/*
1. What are two disadvantages of working with factory functions?
  a. Each instance (object) created by the factory function has a copy of the methods which is heavy on memory. 
  b. It is impossible to inspect what type of an instance is.
/*
/*
2. Rewrite the following code to use object-literal syntax to generate the returned object.
*/
// function makeObj() {
//   return {
//     propA: 10,
//     propB: 20,
//   };
// }

/*
In this problem and the remaining problems, we'll build a simple invoice prodessing program. 
*/
// let invoice = {
//   phone: 3000,
//   internet: 6500
// };

// let payment = {
//   phone: 1300,
//   internet: 5500
// };

// let invoiceTotal = invoice.phone + invoice.internet;
// let paymentTotal = payment.phone + payment.internet;
// let remainingDue = invoiceTotal - paymentTotal;

// console.log(paymentTotal);         // => 6800
// console.log(remainingDue);         // => 2700

// function createInvoice(services = {}) {
//     let phoneCharge = services.phone;
//     if (phoneCharge === undefined) phoneCharge = 3000;
//     let internetCharge = services.internet;
//     if (internetCharge === undefined) internetCharge = 5500;

//     return {
//         phone: phoneCharge,
//         internet: internetCharge,
//         total: function () {
//             return this.phone + this.internet;
//         },
//     };
// }
// function invoiceTotal(invoices) {
//     let total = 0;
//     for (let index = 0; index < invoices.length; index += 1) {
//         total += invoices[index].total();
//     }
//     return total;
// }

// let invoices = [];
// invoices.push(createInvoice());
// invoices.push(createInvoice({ internet: 6500 }));
// invoices.push(createInvoice({ phone: 2000 }));
// invoices.push(
//     createInvoice({
//         phone: 1000,
//         internet: 4500,
//     })
// );

// console.log(invoiceTotal(invoices)); // 31000

/*
Build a factory funtion to create payments. 
*/
// function createPayment(services = {}) {
//     const payment = {
//         phone: services.phone || 0,
//         internet: services.internet || 0,
//         amount: services.amount,
//     };
//     payment.total = function () {
//         return this.amount || this.phone + this.internet;
//     };
//     return payment;
// }

// function paymentTotal(payments) {
//     return payments.reduce((sum, payment) => sum + payment.total(), 0);
// }

// let payments = [];
// payments.push(createPayment());
// payments.push(
//     createPayment({
//         internet: 6500,
//     })
// );

// payments.push(
//     createPayment({
//         phone: 2000,
//     })
// );

// payments.push(
//     createPayment({
//         phone: 1000,
//         internet: 4500,
//     })
// );

// payments.push(
//     createPayment({
//         amount: 10000,
//     })
// );

// // payments.forEach((payment) => console.log(payment));
// console.log(paymentTotal(payments));

/*
Update the createInvoice function so that it can add payment(s) to invoices
*/

function createPayment(services = {}) {
    const payment = {
        phone: services.phone || 0,
        internet: services.internet || 0,
        amount: services.amount,
    };
    payment.total = function () {
        return this.amount || this.phone + this.internet;
    };
    return payment;
}
function createInvoice(services = {}) {
    let phoneCharge = services.phone;
    if (phoneCharge === undefined) phoneCharge = 3000;
    let internetCharge = services.internet;
    if (internetCharge === undefined) internetCharge = 5500;

    return {
        phone: phoneCharge,
        internet: internetCharge,
        totalPayments: 0, // could store using an array of payments instead in order to have access to individual payments
        total: function () {
            return this.phone + this.internet;
        },
        addPayment(payment) {
            this.totalPayments += payment.total();
        },
        addPayments(payments) {
            payments.forEach(
                (payment) => (this.totalPayments += payment.total())
            );
        },
        amountDue() {
            return this.total() - this.totalPayments;
        },
    };
}
let invoice = createInvoice({
    phone: 1200,
    internet: 4000,
});

let payment1 = createPayment({ amount: 2000 });
let payment2 = createPayment({
    phone: 1000,
    internet: 1200,
});

let payment3 = createPayment({ phone: 1000 });
invoice.addPayment(payment1);
invoice.addPayments([payment2, payment3]);
console.log(invoice.amountDue()); // this should return 0

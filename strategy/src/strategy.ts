// Strategy interface
interface PaymentStrategy {
  pay(amount: number): void;
}

// Concrete Strategy
class CreditCardPayment implements PaymentStrategy {
  private cardNumber: string;

  constructor(cardNumber: string) {
    this.cardNumber = cardNumber;
  }

  pay(amount: number): void {
    console.log(`Paid $${amount} using credit card ${this.cardNumber}`);
  }
}

// Concrete Strategy
class PayPalPayment implements PaymentStrategy {
  private email: string;

  constructor(email: string) {
    this.email = email;
  }

  pay(amount: number): void {
    console.log(`Paid $${amount} using PayPal account ${this.email}`);
  }
}

class ShoppingCart {
  // paymentStrategy may not be set, so we use the ! operator to tell TypeScript that we will handle the null case
  private paymentStrategy!: PaymentStrategy;

  setPaymentStrategy(paymentStrategy: PaymentStrategy): void {
    this.paymentStrategy = paymentStrategy;
  }

  checkout(amount: number): void {
    if (this.paymentStrategy) {
      this.paymentStrategy.pay(amount);
    } else {
      console.log("No payment strategy set.");
    }
  }
}

const cart = new ShoppingCart();

const creditCardPayment = new CreditCardPayment("123456789012345");
const paypalPayment = new PayPalPayment("moaaz@example.com");

cart.setPaymentStrategy(creditCardPayment);
cart.checkout(100);

cart.setPaymentStrategy(paypalPayment);
cart.checkout(50);

import {loadStripe} from '@stripe/stripe-js';
import {
	CardElement,
	Elements,
	useElements,
	useStripe,
} from '@stripe/react-stripe-js';
import './App.css';
import {STRIPE_API_KEY} from './constants/stripe';
import './index.css'

const stripePromise = loadStripe(STRIPE_API_KEY);

function App() {
	return (
		<Elements stripe={stripePromise}>
      <div className='grid place-items-center w-full min-h-screen '>

			<CheckoutForm />
      </div>
		</Elements>
	);
}

export default App;

const CheckoutForm = () => {
	const stripe = useStripe();
	const elements = useElements();

	const handleSubmit = async (e: any) => {
		e.preventDefault();

    if (!stripe) return
    if (!elements) return

		const {error, paymentMethod} = await stripe.createPaymentMethod({
			type: 'card',
			card: elements.getElement(CardElement)!,
		});

    if (!error) {
      console.log(paymentMethod);
    }
	};

	return (
		<form onSubmit={handleSubmit} className="w-1/4 border grid gap-5 h-96 p-3">
      <img src="https://picsum.photos/400/200" alt=""  />
			<CardElement />
			<button className='bg-cyan-300 p-2 rounded-md hover:bg-cyan-700 text-white transition-colors ease-in-out'>Buy</button>
		</form>
	);
};

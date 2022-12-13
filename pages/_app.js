
import '../styles/globals.css';
// For global css
// For top state values => this is the root of the component tree

export default function App({ Component, pageProps }) {
	return <Component {...pageProps} />;
}

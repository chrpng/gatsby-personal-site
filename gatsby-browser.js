import React from 'react';
import ThemeProvider from 'providers/ThemeProvider';

import { Provider } from "react-awesome-slider/dist/navigation";
import Layout from "./src/components/layout/layout";

export const onServiceWorkerUpdateReady = () => window.location.reload(true);

// export const wrapRootElement = ({ element }) => <ThemeProvider>{element}</ThemeProvider>;

export const wrapPageElement = ({ props, element }) => {
	console.log("props location")
	console.log(props.location.pathname)

	return (
		<Provider slug={props.location.pathname}>
			<Layout>
				{element}
			</Layout>
		</Provider>
	)
}

export const onClientEntry = () => {
  window.addEventListener('load', () => {
    // document.body.className += "animated visible";
		document.querySelector("body").classList.add("animated");
		document.querySelector("body").classList.add("visible");
  });
};
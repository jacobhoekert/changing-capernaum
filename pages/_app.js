import React from 'react';
import Head from "next/head";

import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
import "react-vertical-timeline-component/style.min.css";

import App from 'next/app';
import {Provider} from 'react-redux';
import withRedux from "next-redux-wrapper";
import store from '../redux/store';

class MyApp extends App {

    static async getInitialProps({Component, ctx}) {
        const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};

        //Anything returned here can be accessed by the client
        return {pageProps: pageProps};
    }

    render() {
        //pageProps that were returned  from 'getInitialProps' are stored in the props i.e. pageprops
        const {Component, pageProps, store} = this.props;

        return (
          <>
            <Head>
              <script src="https://js.stripe.com/v3/" />
            </Head>
            <Provider store={store}>
                <Component {...pageProps}/>
            </Provider>
          </>
        );
    }
}

//makeStore function that returns a new store for every request
const makeStore = () => store;

//withRedux wrapper that passes the store to the App Component
export default withRedux(makeStore)(MyApp);
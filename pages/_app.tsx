import App, { Container } from "next/app";
import React from "react";
import { ApolloProvider } from '@apollo/client';
import createApolloClient from '../lib/apollo';

class MyApp extends App<any> {
  render() {
    const { Component, pageProps } = this.props;
    const apolloClient = createApolloClient();
    return (
      <Container>
        <ApolloProvider client={apolloClient}>
          <Component {...pageProps} />
        </ApolloProvider>
      </Container>
    );
  }
}

export default MyApp
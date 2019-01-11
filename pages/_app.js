import App, { Container } from "next/app";
import React from "react";

class MyApp extends App {
  static async getInitialProps(props = {}) {
    const { ctx = {}, Component = {} } = props;
    // This will work
    //const i18n = await import(`../locale/en.json`);
    // This won't
    const lang = 'en';
    const i18n = await import(`../locale/${lang}.json`);
    if (Component.getInitialProps) {
      var pageProps = await Component.getInitialProps(ctx);
    }
    return { i18n, pageProps };
  }
  render() {
    const { Component, pageProps, i18n } = this.props;
    return (
      <Container>
        <Component {...pageProps} i18n={i18n} />
      </Container>
    );
  }
}

export default MyApp;

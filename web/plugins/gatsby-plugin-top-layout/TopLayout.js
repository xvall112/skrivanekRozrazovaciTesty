import * as React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";

import Page from "../../src/components/Page";
export default function TopLayout(props) {
  return (
    <React.Fragment>
      <Helmet>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link
          href="https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap"
          rel="stylesheet"
        />
      </Helmet>

      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <Page>{props.children}</Page>
    </React.Fragment>
  );
}

TopLayout.propTypes = {
  children: PropTypes.node,
};

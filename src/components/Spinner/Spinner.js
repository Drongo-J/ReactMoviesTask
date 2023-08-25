import React from 'react';
import { Dimmer, Loader } from 'semantic-ui-react';

const Spinner = ({ spinnerVisible }) => (
  <Dimmer active={spinnerVisible}>
    <Loader content="Loading" />
  </Dimmer>
);

export default Spinner;

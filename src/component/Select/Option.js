import React from 'react';
import { injectIntl } from 'react-intl';

const Option = ({ intl, type, id }) => {
  const text = intl.formatMessage({id: type});
  return(
    <option
      id={type}
      value={id}
    >
      {text}
    </option>
  );
};

export default injectIntl(Option);
import React from 'react';
import { injectIntl, intlShape } from 'react-intl';

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

Option.propTypes = {
  intl: intlShape.isRequired
};

export default injectIntl(Option);
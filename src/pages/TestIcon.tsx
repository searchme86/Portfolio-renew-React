import React from 'react';
import Icon from '../components/Icon';

function TestIcon() {
  return (
    <div>
      <Icon name="home" style={{ color: 'blue' }} />
      <Icon
        name="check_circle_outline"
        style={{ fontSize: '50px', color: 'red' }}
      />
    </div>
  );
}

export default TestIcon;

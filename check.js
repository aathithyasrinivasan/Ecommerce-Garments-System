import { useState } from 'react';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';

function Check() {
  const [value, setValue] = useState([1, 3]);

  /*
   * The second argument that will be passed to
   * `handleChange` from `ToggleButtonGroup`
   * is the SyntheticEvent object, but we are
   * not using it in this example so we will omit it.
   */
  const handleChange = (val) => setValue(val);

  return (
    <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
    <ToggleButton id="tbg-radio-1" value={1}>
      Radio 1 (pre-checked)
    </ToggleButton>
    <ToggleButton id="tbg-radio-2" value={2}>
      Radio 2
    </ToggleButton>
    <ToggleButton id="tbg-radio-3" value={3}>
      Radio 3
    </ToggleButton>
  </ToggleButtonGroup>
  );
}

export default Check;
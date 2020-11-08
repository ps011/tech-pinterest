import React from 'react';
import { Box, Button, Layer } from 'grommet';

function PinDetail() {
    const [show, setShow] = React.useState();
    return (
      <Box>
        <Button label="show" onClick={() => setShow(true)} />
        {show && (
          <Layer
            onEsc={() => setShow(false)}
            onClickOutside={() => setShow(false)}
          >
            <Button label="close" onClick={() => setShow(false)} />
          </Layer>
        )}
      </Box>
    );
  }

  export default PinDetail
import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, StyleSheet } from '@react-pdf/react-pdf';

const palette = [
  '#781c81',
  '#521b80',
  '#442f8b',
  '#3f4c9f',
  '#4069b4',
  '#4582c1',
  '#4e96bd',
  '#5aa6a9',
  '#68b090',
  '#7ab878',
  '#8dbc64',
  '#a2be56',
  '#b7bd4b',
  '#c9b843',
  '#d8ae3d',
  '#e29e37',
  '#e78632',
  '#e6672d',
  '#e14427',
  '#d92120',
];

const styles = StyleSheet.create({
  row: {
    flexGrow: 1,
    flexDirection: 'row',
  },
  column: {
    flexGrow: 1,
  },
  text: {
    margin: 10,
    fontSize: 10,
    color: 'white',
  },
});

const toggle = direction => (direction === 'column' ? 'row' : 'column');

// Creates Fractal Component that renders it's step with a background color
const Fractal = ({ steps, direction }) => {
  if (steps === 0) {
    return null;
  }

  const fractalStyle = {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: palette[steps],
  };

  return (
    <View style={styles[direction]}>
      <Fractal direction={toggle(direction)} steps={steps - 1} />
      <View style={fractalStyle}>
        <Text style={styles.text}>{steps}</Text>
      </View>
    </View>
  );
};

Fractal.propTypes = {
  steps: PropTypes.number,
  direction: PropTypes.string,
};

Fractal.defaultProps = {
  steps: 15,
  direction: 'column',
};

export default Fractal;

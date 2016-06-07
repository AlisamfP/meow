import _ from 'lodash'
import React, { PropTypes } from 'react';
import { browserHistory } from 'react-router'

const MeowCard = ({ catList }) => {
  console.log(catList);

  if (_.isEmpty(catList)) return null;

  const items = _.map(catList, (cat, index) => {
    console.log(cat);
    return <div key={index}>{cat.name}</div>;
  })

  return <div>{items}</div>;
};

MeowCard.propTypes = {
  catList: PropTypes.array.isRequired,
};

export default MeowCard;

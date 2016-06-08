import _ from 'lodash'
import React, { PropTypes } from 'react';
import { browserHistory } from 'react-router'

import './index.css'

const MeowCard = ({ catList }) => {
  if (_.isEmpty(catList)) return null;

  const colors = ['purple','green','pink','teal','yellow'];

  const items = _.map(catList, (cat, index) => {
    let color = colors[index] ? colors[index] : _.sample(colors)
    let colorClass = `MeowCard ${ color }`
    return <div className={colorClass} key={index}>{cat.name}</div>;
  })

  return <div className="MeowCards">{items}</div>;
};

MeowCard.propTypes = {
  catList: PropTypes.array.isRequired,
};

export default MeowCard;

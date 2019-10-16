'use strict';

import 'bundle.js';


window.getBigfive =function(text){
  return JSON.stringify(bf(text, opts))
};


exports.status = (req, res, next) => {
  var result = {type:'text', content: 'hello this is test'}

  result = getBigfive("hello this is test");
  res.status(200).json(result);
};

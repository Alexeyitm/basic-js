const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  //throw new NotImplementedError('Not implemented');
  const arr = [];
  let result = '';

  if (members == null) {
    return false;
  }

  for (let i = 0; i < members.length; i++) {
    if (typeof(members[i]) == 'string') {
      let no = members[i].trim();
      arr.push(no[0].toUpperCase())
    }
    result = arr.sort().join('');
  }
  return result;
}


module.exports = {
  createDreamTeam
};

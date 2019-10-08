const isEmpty = function (value) {
   if (!value || value === '0') { return true }
   if (typeof value === 'object') {
      for (var k in value) {
         return false;
      }
      return true;
   }
   return false;
}
module.exports = isEmpty
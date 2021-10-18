const removeAccents = (str) => {
   return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
};
// var myString = "   foo  ";

const ltrim = (str, filter) => {
   var i = str.length;
   filter || (filter = "");
   for (var k = 0; k < i && filtering(str.charAt(k), filter); k++);
   return str.substring(k, i);
};

const rtrim = (str, filter) => {
   filter || (filter = "");
   for (var j = str.length - 1; j >= 0 && filtering(str.charAt(j), filter); j--);
   return str.substring(0, j + 1);
};

const trim = (str, filter) => {
   filter || (filter = "");
   return ltrim(rtrim(str, filter), filter);
};
const filtering = (charToCheck, filter) => {
   filter || (filter = " \t\n\r\f");
   return filter.indexOf(charToCheck) != -1;
};
export default {
   removeAccents,
   ltrim,
   rtrim,
   trim,
};

// Dada una cadena de texto (string), obtener el número de veces que se repite cada
// palabra del texto. El texto puede tener puntos y comas, puede tener palabras en
// mayúsculas o minúsculas. Devolver resultado en JSON
let text = `Érase una vez una niñita que lucía una hermosa capa
de color rojo. Como la niña la usaba muy a menudo, todos la
llamaban Caperucita Roja. Un día, la mamá de Caperucita Roja la
llamó y le dijo: —Abuelita no se siente muy bien, he horneado
unas galletitas y quiero que tú se las lleves. —Claro que sí
—respondió Caperucita Roja, poniéndose su capa y llenando su
canasta de galletas recién horneadas. Antes de salir, su mamá
le dijo: — Escúchame muy bien, quédate en el camino y nunca
hables con extraños. —Yo sé mamá —respondió Caperucita Roja y
salió inmediatamente hacia la casa de la abuelita.`;
// Hola hola mundo

const arrayWords = text
   .toLowerCase()
   .replace(/\n/g, "")
   .replace(/—/gi, "")
   .replace(/^[a-zA-ZÀ-ÿ\u00f1\u00d1\s]$/g, "")
   .split(" ");
console.log(arrayWords);

let reduce = arrayWords.reduce((acc, el) => {
   let valor = 1;
   if (acc.hasOwnProperty(el)) {
      valor = acc[el] += 1;
   }
   return {
      ...acc,
      [el]: valor,
   };
}, {});
console.log(reduce);

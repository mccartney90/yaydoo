// Un revisor califica dos desafíos, otorgando puntos en una escala del 1 al 100 para tres
// categorías: claridad del problema , originalidad y dificultad .
// La calificación del desafío de Alice es a = (a[0], a[1], a[2]) , y la calificación
// del desafío de Bob es b = (b[0], b[1], b[2])

const alice = [17, 28, 30];
const bob = [99, 16, 8];

const results = (a, b) => {
   let result = [0, 0];
   a.map((v, i) => {
      result[0] += v > b[i] ? 1 : 0;
      result[1] += v < b[i] ? 1 : 0;
   });
   return result;
};

console.log(results(alice, bob));

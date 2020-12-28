export const cursoBySemesterUrl = semester =>
  `http://192.168.0.10:3000/cursos/semestre/${semester}`;

export const lightSumillaByCursoId = id =>
  `http://192.168.0.10:3000/sumillas/cursoid/${id}`;

export const fullSumillaById = id => `http://192.168.0.10:3000/sumillas/full/${id}`;

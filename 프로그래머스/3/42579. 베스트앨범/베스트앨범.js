function solution(genres, plays) {
  const genreMap = new Map();

  for (let i = 0; i < genres.length; i++) {
    const genre = genres[i];
    const play = plays[i];

    if (!genreMap.has(genre)) {
      genreMap.set(genre, { total: 0, songs: [] });
    }

    genreMap.get(genre).total += play;
    genreMap.get(genre).songs.push({ id: i, play });
  }

  const sortedGenres = Array.from(genreMap.entries()).sort((a, b) => b[1].total - a[1].total);

  const result = [];

  for (const [genre, data] of sortedGenres) {
    data.songs.sort((a, b) => {
      if (a.play !== b.play) {
        return b.play - a.play;
      }
      return a.id - b.id;
    });

    for (let i = 0; i < Math.min(2, data.songs.length); i++) {
      result.push(data.songs[i].id);
    }
  }

  return result;
}

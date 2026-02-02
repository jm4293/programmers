function solution(genres, plays) {
  const map = new Map();

  genres.forEach((genre, index) => {
    map.set(genre, {
      totalPlays: (map.get(genre)?.totalPlays || 0) + plays[index],
      songs: [
        ...(map.get(genre)?.songs || []),
        {
          index,
          count: plays[index],
          name: genre,
        },
      ],
    });
  });

  const sortedGenres = [...map].sort(
    (a, b) => b[1].totalPlays - a[1].totalPlays,
  );

  const answer = [];

  sortedGenres.forEach(([genre, data]) => {
    const sortedSongs = data.songs.sort((a, b) => b.count - a.count);
    answer.push(...sortedSongs.slice(0, 2).map((song) => song.index));
  });

  return answer;
}
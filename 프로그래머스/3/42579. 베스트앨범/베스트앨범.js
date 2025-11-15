function solution(genres, plays) {
  const map = new Map();

  genres.forEach((genre, index) => {
    map.set(genre, {
      totalPlayCount: (map.get(genre)?.totalPlayCount || 0) + plays[index],
      songs: [
        ...(map.get(genre)?.songs || []),
        {
          index,
          playCount: plays[index],
        },
      ],
    });
  });

  const sortedGenres = Array.from(map.entries()).sort((a, b) => b[1].totalPlayCount - a[1].totalPlayCount);

  const result = [];

  sortedGenres.forEach(([genre, data]) => {
    const sortedSongs = data.songs.sort((a, b) => b.playCount - a.playCount);
    result.push(...sortedSongs.slice(0, 2).map((song) => song.index));
  });

  return result;
}
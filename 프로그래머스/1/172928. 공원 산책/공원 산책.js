function solution(park, routes) {
    const h = park.length;
    const w = park[0].length;

    // 시작 위치 찾기
    const startPos = park.reduce((acc, row, i) => {
        const j = row.indexOf('S');
        return j !== -1 ? [i, j] : acc;
    }, [0, 0]);

    // 방향에 따른 이동 좌표 변화
    const direction = {
        'N': [-1, 0],
        'S': [1, 0],
        'W': [0, -1],
        'E': [0, 1]
    };

    // 명령을 처리하는 함수
    const move = (pos, [op, n]) => {
        n = parseInt(n);
        const [dx, dy] = direction[op];
        
        const newPos = Array.from({length: n}, (_, step) => {
            const newX = pos[0] + dx * (step + 1);
            const newY = pos[1] + dy * (step + 1);
            return [newX, newY];
        });

        const isValid = newPos.every(([x, y]) => 
            x >= 0 && x < h && y >= 0 && y < w && park[x][y] !== 'X'
        );

        return isValid ? newPos[n - 1] : pos;
    };

    // 모든 명령을 처리하여 최종 위치 반환
    return routes.reduce((pos, route) => {
        const command = route.split(' ');
        return move(pos, command);
    }, startPos);
}
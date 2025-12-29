function solution(N, A, B) {
    let answer = 0;
    
    while (A !== B) {
        A = Math.ceil(A / 2);
        B = Math.ceil(B / 2);
        answer++;
    }
    
    return answer;
}

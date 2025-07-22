function solution(sequence, k) {
    let left = 0, right = 0;
    let sum = 0;
    let answer = [0, sequence.length - 1];
    let minLength = sequence.length;

    while (right < sequence.length) {
        sum += sequence[right];

        // sum이 k보다 크면 left를 옮겨서 줄임
        while (sum > k) {
            sum -= sequence[left];
            left++;
        }

        // sum이 k와 같으면 답 갱신
        if (sum === k) {
            if (right - left < minLength) {
                minLength = right - left;
                answer = [left, right];
            }
        }
        
        right++;
    }

    return answer;
}
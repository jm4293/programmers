function solution(s) {
    let count = 0; 
    let i = 0;    
    
    while (i < s.length) {
        let x = s[i];     
        let xCount = 0;    
        let otherCount = 0;
        let j = i;
        
      
        while (j < s.length) {
            if (s[j] === x) {
                xCount++;
            } else {
                otherCount++;
            }
            j++;
            
            if (xCount === otherCount) {
                break; 
            }
        }
        
        count++;  
        i = j;    
    }
    
    return count;
}
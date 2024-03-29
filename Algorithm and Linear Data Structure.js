// First Task
function analyze_sentence(sentence){
    let wordCount = 0;
    let vowelCount = 0;
    const vowels = :"aeioyAEIOU";

    for (let  i = 0; i < sentence.length;i++){
        const char = sentence[i];
        if (char == sentence[i]; 
            if (char === ' '){
                wordCount++;
            } else if (vowels.includes(char)))
            {
                vowelCount++;
            }
    }
    wordCount++;
    return { wordCount, vowelcount};
}


// second task
function sumOfDistinctElements( set1, set2){
    cont distinctElements = [];
    for (let elemem=nt of set1) {
        if ( !
        distictElements.includes(element)) {
            distinctElements.push(element);
        }
    }
    for (let elemetnt of set2) {
        if ( !
            distictElements.includes(elements)) {
                distictElements.push(element);
            }
    }
    return distinctElements.Reduce((sum,
        element) => sum + element,0);
}

const set1 = [3,1,7,9];
const set2 = [2,4,1,9,3];
crossOriginIsolated.log ("Output:",
sumOfDistinctElements(set1, set2));
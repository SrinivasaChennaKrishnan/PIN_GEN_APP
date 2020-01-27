/** Duplicate, Ascending and Descending values validated*/
export const duplicateAndSequenceCheck = (input) => {
    let isDuplicate = false;
    let isAscending = false;
    let isDescending = false;
    let convertedInput = input.toString();
    let flag = false;
    if(convertedInput.length >= 2){
        let digitOne = parseInt(convertedInput.charAt(0));
        let digitTwo = parseInt(convertedInput.charAt(1));
        let digitThree = parseInt(convertedInput.charAt(2));
        let digitFour = parseInt(convertedInput.charAt(3));
        //check the existance of duplicate numbers
        if(digitOne === digitTwo || digitTwo === digitThree || digitThree === digitFour){
            isDuplicate = true;
        }
        //check the existance of Ascending order
        if((digitOne === digitTwo -1 && digitTwo === digitThree-1) || (digitTwo === digitThree-1 && digitThree === digitFour-1) || (digitOne === digitTwo -1 && digitTwo === digitThree-1 && digitThree === digitFour-1)){
            isAscending = true;
        }
        //check the existance of Descending order
        if((digitOne === digitTwo +1 && digitTwo === digitThree+1) || (digitTwo === digitThree+1 && digitThree === digitFour+1) || (digitOne === digitTwo +1 && digitTwo === digitThree+1 && digitThree === digitFour+1)){
            isDescending = true;
        }
    }
    //Return true if any incorrect format found as per the above check
    if(isDuplicate || isAscending || isDescending){
        flag = true;
    }
    return flag;
}

//Function to Generate Pins
export const GenPinFunction = () => {
    let i = 0;
    let pinArray = [];
    while (i <= 4) {
        let newPin;
        let maxvalue = 10000
        let randomPin = Math.floor(Math.random() * maxvalue);
        //To check generated pin length
        if (randomPin && randomPin.toString().length === 4) {
            // push the pin if the length is 4
            newPin = randomPin;
        }
        else if (randomPin && randomPin.toString().length === 3) {
            // add 0 at the end if the length is 3
            randomPin = randomPin + '0';
            newPin = randomPin;
        }
        else if (randomPin && (randomPin.toString().length === 2 || randomPin.toString().length === 1)) {
            // Continue in case of inSufficient Digits
            continue;
        }
        let updatedPinseq = newPin + "";
        if (!duplicateAndSequenceCheck(updatedPinseq) && !pinArray.includes(updatedPinseq)) {
            pinArray[i] = updatedPinseq;
            i++;
        }
    }
    /** Check Uniqueness of the pins in the pin array **/
    let newArray = [];
    if (pinArray && pinArray.length > 0) {
        let firstArrayVal = pinArray[0];
        if (firstArrayVal) {
            for (let i = 0; i < pinArray.length; i++) {
                // check if any of the values in array similar to other and push if not */
                if (firstArrayVal !== pinArray[i + 1]) {
                    newArray.push(firstArrayVal);
                    firstArrayVal = pinArray[i + 1]
                } else { // if similar to other values, generate new one and then push
                    firstArrayVal = Math.floor(Math.random() * 10000);
                    if (!duplicateAndSequenceCheck(firstArrayVal) && !pinArray.includes(firstArrayVal)) {
                        pinArray[i] = firstArrayVal;
                    }
                }
            }
        }
    }
    pinArray = newArray;
    return pinArray;
}

class CollatzFunction {
constructor(start = 2) {
this.start = start;
this.currentStep = start;
this.stepCounter = 1;
this.horizLength = 0;
this.hLengthHold = 0;
}

// GETTERS AND SETTERS
setStart(start) {
this.start = start;
this.currentStep = start;
this.stepCounter = 1;
this.horizLength = 0;
}

getStart() {
return this.start;
}

getCurrentStep() {
return this.currentStep;
}

setHorizLength(hLength) {
this.horizLength = hLength;
}

getHorizLength() {
return this.horizLength;
}

getHLengthHold() {
return this.hLengthHold;
}

setHLengthHold(hLengthHold) {
this.hLengthHold = hLengthHold;
}

getStepCounter() {
return this.stepCounter;
}

// OTHER METHODS
nDivTwo() {
let quotient = this.currentStep / 2;
return quotient;
}

threeNLessOne() {
let prodSum = 3 * this.currentStep + 1;
return prodSum;
}

takeStep() {
let nextStep = this.currentStep % 2 == 0 ? this.nDivTwo() : this.threeNLessOne();
this.currentStep = nextStep;
this.stepCounter += 1;
}

addToHLength(hAdd) {
this.horizLength += hAdd;
}

}

function CollatzExecute () {
        let start = 144;
        
        let str = "";

        let cc1 = new CollatzFunction(start);

        str += cc1.getCurrentStep();

        while (cc1.getCurrentStep() !== 1) {
            if (cc1.getCurrentStep() % 2 === 0) {
                for (let i = 0; i < cc1.getHorizLength(); i++) {
                    str += " ";
                }
                str += "\n"; 
                for (let i = 0; i < cc1.getHorizLength(); i++) {
                    str += " ";
                }
                str += "|";

                cc1.takeStep();

                str += "\n";
                for (let i = 0; i < cc1.getHorizLength(); i++) {
                    str += " ";
                }
            } else if (cc1.getCurrentStep() % 2 !== 0) {
                str += " -- ";
                cc1.addToHLength(4);
                cc1.addToHLength(String(cc1.getCurrentStep()).length);

                cc1.takeStep();
            }

            str += cc1.getCurrentStep();
            
        }

        str += "\nNumber of Steps";
        str += cc1.getStepCounter();

        document.getElementById ( 'CC' ).innerHTML = str ;
}

CollatzExecute() ;

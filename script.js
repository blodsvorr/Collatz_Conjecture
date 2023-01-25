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
        let start = 43;

        let cc1 = new CollatzFunction(start);

        console.log(cc1.getCurrentStep());

        while (cc1.getCurrentStep() !== 1) {
            if (cc1.getCurrentStep() % 2 === 0) {
                for (let i = 0; i < cc1.getHorizLength(); i++) {
                    console.log(" ");
                }
                console.log("\n");
                for (let i = 0; i < cc1.getHorizLength(); i++) {
                    console.log(" ");
                }
                console.log("|");

                cc1.takeStep();

                console.log("\n");
                for (let i = 0; i < cc1.getHorizLength(); i++) {
                    console.log(" ");
                }
            } else if (cc1.getCurrentStep() % 2 !== 0) {
                console.log(" -- ");
                cc1.addToHLength(4);
                cc1.addToHLength(String(cc1.getCurrentStep()).length);

                cc1.takeStep();
            }

            console.log(cc1.getCurrentStep());
        }

        console.log("\nNumber of Steps");
        console.log(cc1.getStepCounter());
}

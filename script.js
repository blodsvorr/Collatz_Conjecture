class CollatzFunction {
  constructor(start = 2) {
    this.start = start;
    this.currentStep = start;
    this.stepCounter = 1;
    this.horizLength = 0;
    this.vLength = 0;
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
    
  getvLength() {
    return this.vLength;
  }
  setvLength(vLength) {
    this.vLength = vLength;
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
        let start = 231;
        let cc1 = new CollatzFunction(start);
        let thisStep = cc1.getCurrentStep();
        let lastStep = thisStep;
        let str = thisStep;

        while (thisStep !== 1) {
          let thisLEN = String(thisStep).length;
          
            if (thisStep % 2 === 0) {
              let dent = "";
              let ws = "" ;
                
              for (let i = thisLEN - 1; i > 0; i--) {
                dent += "&nbsp;";
              }
              for (let i = cc1.getHorizLength(); i > 0; i--) {
                ws += "&nbsp;";
              }
                
              str +="<br>" + ws;
              str += dent + "|";
              str += "<br>" + ws;
                
            } else {
                str += " — ";
                cc1.addToHLength(3);
                cc1.addToHLength(thisLEN);
            }
            lastStep = thisStep;
            cc1.takeStep();
            thisStep = cc1.getCurrentStep();
            
            if (lastStep % 2 === 0) {
              thisLEN = String(thisStep).length;
              let lastLEN = String(lastStep).length;
              let diff = lastLEN - thisLEN;
              for (let i = diff; i > 0; i--) {
                str += "&nbsp;";
                cc1.addToHLength(1);
              }
            }
            
            str += thisStep;
        }
        
        ctr = "Number of Steps";
        ctr += "<br>";
        ctr += cc1.getStepCounter();
        ctr += "<br><br>";
        
        str = ctr + str ;

        document.getElementById ( 'CC' ).innerHTML = str ;
}

CollatzExecute() ;

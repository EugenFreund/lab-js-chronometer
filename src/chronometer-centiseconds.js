class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    this.intervalId = setInterval( () => {
      this.currentTime += 1;
      if(typeof(printTimeCallback) === "function" ) {
        printTimeCallback();
      }
    }, 10)
  }

  getMinutes() {
    return Math.floor((this.currentTime % 360000) / 6000)
  }

  getSeconds() {
    return Math.floor((this.currentTime % 6000) / 100);
  }

  getCentiseconds() {
    return this.currentTime % 100 ;
  }

  computeTwoDigitNumber(value) {
    let retVal = "";
    value = value.toString()
    let splitDigitArray = value.split('');
    if( splitDigitArray.length < 2){
      splitDigitArray.unshift("0")
    } 
    retVal = splitDigitArray.join("");

    return retVal;
  }

  stop() {
    clearInterval(this.intervalId)
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    return `${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds())}.${this.computeTwoDigitNumber(this.getCentiseconds())}`;
  }
}

let test = new Chronometer();
test.currentTime = 5021000;
console.log(test.getMinutes())
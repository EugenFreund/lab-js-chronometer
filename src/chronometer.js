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
    }, 1000)
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60)
  }

  getSeconds() {
    return this.currentTime % 60;
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
    return `${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds())}`;
  }
}

let test = new Chronometer();
test.computeTwoDigitNumber(0)
/** Textual markov chain generator */


class MarkovMachine {

  /** build markov machine; read in text.*/

  constructor(text) {
    let words = text.split(/[ \r\n]+/);
    this.words = words.filter(c => c !== "");
  }

  /** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

  makeChains() {
    let chainedText = {};
    for(let i=0; i<this.words.length-1; i++) {
      let word = this.words[i];
      let nextWord = this.words[i+1] || null;
      if(chainedText[word]) {
        chainedText[word].push(nextWord)
      } else {
        chainedText[word] = [word];
      }

      console.log(chainedText);
    }

    return chainedText;
  }

  /** return random text from chains */
  static choice(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  makeText(numWords = 100) {
    let keys = Array.from(this.chainedText.keys());
    let key = MarkovMachine.choice(keys);
    let out = [];

    while(out.length < numWords && key != null) {
      out.push(key);
      key = MarkovMachine.choice(this.chainedText.get(key));
    }
    return out.join(" ");
  }
}

module.exports = {
  MarkovMachine,
};

let markov = new MarkovMachine('The cat in the hat');
console.log(markov.makeChains());
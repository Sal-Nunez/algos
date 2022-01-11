class TrieNode {
  constructor(char = "") {
    // each node stores its own character value
    this.character = char;

    // each node has a JS object
    // the keys are characters
    // the values are TrieNodes
    this.children = {};

    // each node has a boolean check to see if its the end of a word
    this.isEndOfWord = false;
  }
}

class Trie {
  constructor() {
    // root node represents an empty string
    this.root = new TrieNode();
  }

  /**
   * Adds the given to the Trie.
   * @param {string} word Word that is being added to the Trie
   * @returns {boolean} true/false status of adding the word
   */
  add(word) {
    for (var i = 0; i < word.length; i++) {
      if (this.root.children[word[i]] == undefined && i == 0){
        let node = new TrieNode(word[i]);
        this.root.children[word[i]] = node
        var currentNode = node;
      }
        else if ( i == 0) {
          var currentNode = this.root.children[word[i]]
        }
      if (i > 0) {
        let node = new TrieNode(word[i])
        currentNode.children[word[i]] = node;
        if(i == word.length-1) {
          node.isEndOfWord = true;
        }
        currentNode = node;
      }
    }
    return this;
  }

  /**
   * Returns an array with any complete words beginning
   * with the given starting substring.
   * - Time: O(?)
   * - Space: O(?)
   * @returns {array} of strings
   */
  autoComplete(startingSubstring) {
    for (var i = 0; i < startingSubstring.length; i++) {
      if (this.root.children[startingSubstring[i]] == undefined && i == 0){
        return [];
      } else {

      }
    }
    // TIP: separating logic into separate helper functions may help figuring this out and help code readability
  }
}


let searchHistory = new Trie();
searchHistory
  .add("cat")
  .add("can")
  .add("candy")
  .add("crud")
  .add("apple")
  .add("a")
  .add("an")
  .add("and");
console.log(searchHistory);


console.log(searchHistory.autoComplete("b"));
// console.log(searchHistory.autoComplete("ca")); // ["cat", "can", "candy"]
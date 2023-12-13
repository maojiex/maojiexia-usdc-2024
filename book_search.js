/**
 * RECOMMENDATION
 *
 * To test your code, you should open "tester.html" in a web browser.
 * You can then use the "Developer Tools" to see the JavaScript console.
 * There, you will see the results unit test execution. You are welcome
 * to run the code any way you like, but this is similar to how we will
 * run your code submission.
 *
 * The Developer Tools in Chrome are available under the "..." menu,
 * futher hidden under the option "More Tools." In Firefox, they are
 * under the hamburger (three horizontal lines), also hidden under "More Tools."
 */

/**
 * Searches for matches in scanned text.
 * @param {string} searchTerm - The word or term we're searching for.
 * @param {JSON} scannedTextObj - A JSON object representing the scanned text.
 * @returns {JSON} - Search results.
 * */
function findSearchTermInBooks(searchTerm, scannedTextObj) {
  var result = {
    SearchTerm: searchTerm,
    Results: [],
  };

  // Iterate through each book in the scanned text object
  scannedTextObj.forEach((book) => {
    // Iterate through each content item in the book
    book.Content.forEach((content) => {
      // Check if the search term is present in the text
      if (content.Text.includes(searchTerm)) {
        // Add the match to the results
        result.Results.push({
          ISBN: book.ISBN,
          Page: content.Page,
          Line: content.Line,
        });
      }
    });
  });

  if (searchTerm === "") {
    return { SearchTerm: searchTerm, Results: [] };
  } else {
    return result;
  }
}

/** Example input object. */
const twentyLeaguesIn = [
  {
    Title: "Twenty Thousand Leagues Under the Sea",
    ISBN: "9780000528531",
    Content: [
      {
        Page: 31,
        Line: 8,
        Text: "now simply went on by her own momentum.  The dark-",
      },
      {
        Page: 31,
        Line: 9,
        Text: "ness was then profound; and however good the Canadian's",
      },
      {
        Page: 31,
        Line: 10,
        Text: "eyes were, I asked myself how he had managed to see, and",
      },
    ],
  },
];

/** Example output object */
const twentyLeaguesOut = {
  SearchTerm: "the",
  Results: [
    {
      ISBN: "9780000528531",
      Page: 31,
      Line: 9,
    },
  ],
};

/*
 _   _ _   _ ___ _____   _____ _____ ____ _____ ____  
| | | | \ | |_ _|_   _| |_   _| ____/ ___|_   _/ ___| 
| | | |  \| || |  | |     | | |  _| \___ \ | | \___ \ 
| |_| | |\  || |  | |     | | | |___ ___) || |  ___) |
 \___/|_| \_|___| |_|     |_| |_____|____/ |_| |____/ 
                                                      
 */

/* We have provided two unit tests. They're really just `if` statements that
 * output to the console. We've provided two tests as examples, and
 * they should pass with a correct implementation of `findSearchTermInBooks`.
 *
 * Please add your unit tests below.
 * */

/** We can check that, given a known input, we get a known output. */
const test1result = findSearchTermInBooks("the", twentyLeaguesIn);
if (JSON.stringify(twentyLeaguesOut) === JSON.stringify(test1result)) {
  console.log("PASS: Test 1");
} else {
  console.log("FAIL: Test 1");
  console.log("Expected:", twentyLeaguesOut);
  console.log("Received:", test1result);
}

/** We could choose to check that we get the right number of results. */
const test2result = findSearchTermInBooks("the", twentyLeaguesIn);
if (test2result.Results.length == 1) {
  console.log("PASS: Test 2");
} else {
  console.log("FAIL: Test 2");
  console.log("Expected:", twentyLeaguesOut.Results.length);
  console.log("Received:", test2result.Results.length);
}

// Extra test cases
/** Positive Test */
const positiveTestResult = findSearchTermInBooks("the", twentyLeaguesIn);
if (positiveTestResult.Results.length > 0) {
  console.log("PASS: Positive Test");
} else {
  console.log("FAIL: Positive Test");
}

/** Negative Test */
const negativeTestResult = findSearchTermInBooks("xyz123", twentyLeaguesIn);
if (negativeTestResult.Results.length === 0) {
  console.log("PASS: Negative Test");
} else {
  console.log("FAIL: Negative Test");
}

/** Case-Sensitive Test */
const caseSensitiveTestResult = findSearchTermInBooks("The", twentyLeaguesIn);
if (caseSensitiveTestResult.Results.length > 0) {
  console.log("PASS: Case-Sensitive Test (Match for 'The')");
} else {
  console.log("FAIL: Case-Sensitive Test (Match for 'The')");
}

/** Empty Search Term Test */
const emptySearchTermTestResult = findSearchTermInBooks("", twentyLeaguesIn);
if (emptySearchTermTestResult.Results.length === 0) {
  console.log(
    "PASS: Empty Search Term Test - No results and search term is empty"
  );
} else {
  console.log(
    "FAIL: Empty Search Term Test - Expected no results and empty search term"
  );
}

/** Non-Existent Word Test */
const nonExistentWordTestResult = findSearchTermInBooks(
  "nonexistentword",
  twentyLeaguesIn
);
if (nonExistentWordTestResult.Results.length === 0) {
  console.log("PASS: Non-Existent Word Test");
} else {
  console.log("FAIL: Non-Existent Word Test");
}

/** Search Term as Part of a Word Test */
const partOfWordTestResult = findSearchTermInBooks("eye", twentyLeaguesIn);
if (partOfWordTestResult.Results.length > 0) {
  console.log("PASS: Search Term as Part of a Word Test");
} else {
  console.log("FAIL: Search Term as Part of a Word Test");
}

const multipleResult = findSearchTermInBooks("w", twentyLeaguesIn);
if (multipleResult.Results.length == 3) {
  console.log("PASS: Search Multiple Results");
} else {
  console.log("FAIL: Search Multiple Results");
  console.log("Expect:", [
    { ISBN: '9780000528531', Page: 31, Line: 8 },
    { ISBN: '9780000528531', Page: 31, Line: 9 },
    { ISBN: '9780000528531', Page: 31, Line: 10 }
  ])
}

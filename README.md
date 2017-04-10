# Eat-Drink-Code
Mozilla Project #TeachTheWeb

#### Update 10 April 2017 : Bootstrap 3 added
New changes/replacements 

| **Previous**  |  **Bootstrap**   |
|---|---|
|```class="footnote"```   | ```class="text-muted"```  |
| ```class="note"```  | ```class="text-info"```  |
|   |   |


## Naming convention
``` Note : All IDs and classnames must use a hyphen to separate two words. Underscore and camel cases is not recommended by Google's naming convention```

- Title for every html page should be the Level number ```<title>Level 1</title>```

- Main div wrap : ```<div id="page<number>" ></div>```<br>
Example : ```<div id="page2"></div>```

- First Section : ```<div id="section1">```

- If there are more than one sections that's hidden and is visible only on button click or on some action. ```<div id="section2"></div>```

- Button to go to next page ```<button class="btn">```

- Button to run a code, evaluate a result, check answer, hint etc : ```<button class="btn-result">```

- All buttons that go to next page must call the function "nextPage()" ```<button onclick="nextPage()">```

- All radio forms must have an ID 'form' ```<form id = "form"></form>```

- All multiple options radio forms meant for quiz must have a p tag for remarks. p tag should have an classname 'radio-remark' and ID 'radio-output' 
```<radio class= "radio-remark" id="radio-output">```

- Any word that is a programming concept name or a Python keyword should be wrapped in an italic tag with class 'code'
```<i class="code">def</i>```

- Any tip/info/notes come under <del>``` <p class="note">```</del> ```<p class="text-info">```

- Any extra information that is not very important, like "first one is done for you" <del>```<p class="footnote">```

- div wrap for code run ```<div id="working-code">```

- textarea for user code ```<textarea id="user-code">```

- textarea for predefined code ```<textarea id="predefined">```

- textarea for just testing code with no regex test ```<textarea id="test-code">```

- Output of the code is displayed in p tag with ID ```code-output```

- Positive/Negative Remarks of the code run is displayed in p tag with ID ```code-remark``` 

- div wrap for code snippet section has class name ```show-code```


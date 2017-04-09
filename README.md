# Eat-Drink-Code
Mozilla Project #TeachTheWeb

## Naming convention
- Main div wrap : ```<div id="page<number>" ></div>```<br>
Example : ```<div id="page2"></div>```

- First Section : ```<div id="section1">```

- If there are more than one sections that's hidden and is visible only on button click or on some action. ```<div id="section2"></div>```

- Button to go to next page ```<button class="btn">```

- Button to run a code, evaluate a result, check answer, hint etc : ```<button class="btnResult">```

- All buttons that go to next page must call the function "nextPage()" ```<button onclick="nextPage()">```

- All radio forms must have an ID 'form' ```<form id = "form"></form>```

- All multiple options radio forms meant for quiz must have a p tag for remarks. p tag should have an classname 'radioRemark' and ID 'radioOutput' 
```<radio class= "radioRemark" id="radioOutput">```

- Any word that is a programming concept name or a Python keyword should be wrapped in an italic tag with class 'code'
```<i class="code">def</i>```

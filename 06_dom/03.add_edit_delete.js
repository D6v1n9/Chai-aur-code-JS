<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Chai aur code | DOM</title>
</head>
<body style="background-color: #212121; color: #fff;">
    <ul class="language">
        <li>Javascript</li>
    </ul>
</body>
<script>
  // Approch :- 1
    function addLanguage(langName){
        const li = document.createElement('li');
        li.innerHTML = `${langName}`
        document.querySelector('.language').appendChild(li)
    }
    addLanguage("python")
    addLanguage("typescript")

// Approch :- 2 -> Optimal then approch 1 as No HTML parsing needed:
//When you set innerHTML, the browser has to parse the string as HTML even if it's just plain text. 
//This adds overhead, especially in large or frequent DOM updates.

    function addOptiLanguage(langName){
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(langName))
        document.querySelector('.language').appendChild(li)
    }
    addOptiLanguage('golang')

    //Edit
    const secondLang = document.querySelector("li:nth-child(2)") //the :nth-child() selector selects child elements according to their position 
    console.log(secondLang);                                     //among all the sibling elements within a parent element.
    //secondLang.innerHTML = "Mojo"
    const newli = document.createElement('li')
    newli.textContent = "Mojo"
    secondLang.replaceWith(newli)

    //edit
    const firstLang = document.querySelector("li:first-child")
    firstLang.outerHTML = '<li>TypeScript</li>'

    //remove
    const lastLang = document.querySelector('li:last-child')
    lastLang.remove()


</script>
</html>

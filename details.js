var details = document.getElementById("details");
var breadcrumbs = document.getElementById("breadcrumb");
var id = localStorage.getItem("id")

fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    .then(function (response)
    {
        response.json().then(function (data)
        {
            console.log(data)

            var element = document.createElement("div");
            element.classList.add("description");
            var meal = document.createElement("h2");
            var textNode = document.createTextNode(data.meals[0].strMeal);
            meal.appendChild(textNode);
            element.appendChild(meal);

            var category = document.createElement("p");
            var categorystring = document.createElement("b")
            var categorystringNode = document.createTextNode("Category: ")
            var textNodeTwo = document.createTextNode(data.meals[0].strCategory);
            categorystring.appendChild(categorystringNode)
            category.appendChild(categorystring)
            category.appendChild(textNodeTwo);
            element.appendChild(category);

            var area = document.createElement("p");
            var areastring = document.createElement("b")
            var areastringNode = document.createTextNode("Area: ")
            var textNodeThree = document.createTextNode("Area:" + data.meals[0].strArea);
            areastring.appendChild(areastringNode)
            area.appendChild(areastring)
            area.appendChild(textNodeThree);
            element.appendChild(area);



            var elementTwo = document.createElement("div");
            elementTwo.classList.add("image");
            var image = document.createElement("img");
            image.src = data.meals[0].strMealThumb;
            elementTwo.appendChild(image);

            var elementThree = document.createElement("div");
            elementThree.classList.add("instructions");

            var howItsMade = document.createElement("h2");
            var textNodeFour = document.createTextNode("How it is made:");
            howItsMade.appendChild(textNodeFour);
            elementThree.appendChild(howItsMade)

            var instructions = document.createElement("p");
            var textNodeFive = document.createTextNode(data.meals[0].strInstructions);
            instructions.appendChild(textNodeFive);
            elementThree.appendChild(instructions);

            details.appendChild(element);
            details.appendChild(elementTwo);
            details.appendChild(elementThree);

            var breadcrumbItem = document.createElement("li");
            var breadcrumbTextNode = document.createTextNode(data.meals[0].strMeal);
            breadcrumbItem.appendChild(breadcrumbTextNode)
            breadcrumbs.appendChild(breadcrumbItem);
        })
    })


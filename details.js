const details = document.getElementById("details");
const breadcrumbs = document.getElementById("breadcrumb");
const id = localStorage.getItem("id")

fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    .then(function (response)
    {
        response.json().then(function (data)
        {
            console.log(data)

            const element = document.createElement("div");
            element.classList.add("description");
            const meal = document.createElement("h2");
            const textNode = document.createTextNode(data.meals[0].strMeal);

            meal.appendChild(textNode);
            element.appendChild(meal);

            const category = document.createElement("p");

            const categorystring = document.createElement("b")
            const categorystringNode = document.createTextNode("Category: ")
            const textNodeTwo = document.createTextNode(data.meals[0].strCategory);
            categorystring.appendChild(categorystringNode)
            category.appendChild(categorystring)
            category.appendChild(textNodeTwo);
            element.appendChild(category);

            const area = document.createElement("p");
            const areastring = document.createElement("b")
            const areastringNode = document.createTextNode("Area: ")
            const textNodeThree = document.createTextNode(data.meals[0].strArea);
            areastring.appendChild(areastringNode)
            area.appendChild(areastring)
            area.appendChild(textNodeThree);
            element.appendChild(area);



            const elementTwo = document.createElement("div");
            elementTwo.classList.add("image");
            const image = document.createElement("img");
            image.src = data.meals[0].strMealThumb;
            elementTwo.appendChild(image);

            const elementThree = document.createElement("div");
            elementThree.classList.add("instructions");

            const howItsMade = document.createElement("h2");
            const textNodeFour = document.createTextNode("How it is made:");
            howItsMade.appendChild(textNodeFour);
            elementThree.appendChild(howItsMade)

            const instructions = document.createElement("p");
            const textNodeFive = document.createTextNode(data.meals[0].strInstructions);
            instructions.appendChild(textNodeFive);
            elementThree.appendChild(instructions);

            details.appendChild(element);
            details.appendChild(elementTwo);
            details.appendChild(elementThree);

            const breadcrumbItem = document.createElement("li");
            breadcrumbItem.classList.add("breadcrumbChild");
            const breadcrumbTextNode = document.createTextNode(data.meals[0].strMeal);
            breadcrumbItem.appendChild(breadcrumbTextNode)
            breadcrumbs.appendChild(breadcrumbItem);
        })
    })


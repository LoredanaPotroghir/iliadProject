var list = document.getElementById("list");


fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
    .then(function (response)
    {
        console.log(response);
        response.json().then(function (data)
        {
            console.log(data);
            data.meals.forEach(element =>
            {
                var listElement = document.createElement("li");
                var image = document.createElement("img");
                image.src = element.strMealThumb;
                listElement.appendChild(image);

                var paragraph = document.createElement("p");
                var textNode = document.createTextNode(element.strMeal);
                paragraph.appendChild(textNode);
                listElement.appendChild(paragraph);

                var button = document.createElement("button");
                var text = document.createTextNode("VIEW");

                button.onclick = () => view(element.idMeal)
                button.appendChild(text);
                listElement.appendChild(button);




                list.appendChild(listElement);
            });
        })
    })
    .catch(er => { console.log(er) }
    )

function view(id)
{
    localStorage.setItem("id", id);
    window.location.href = "./details.html"
    console.log(id);
}






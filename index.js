const list = document.getElementById("list");


fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
    .then(function (response)
    {
        console.log(response);
        response.json().then(function (data)
        {
            console.log(data);
            data.meals.forEach(element =>
            {
                const listElement = document.createElement("li");
                const image = document.createElement("img");
                image.src = element.strMealThumb;
                listElement.appendChild(image);

                const paragraph = document.createElement("p");
                const textNode = document.createTextNode(element.strMeal);
                paragraph.appendChild(textNode);
                listElement.appendChild(paragraph);

                const button = document.createElement("button");
                const text = document.createTextNode("VIEW");

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






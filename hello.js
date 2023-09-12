document.addEventListener("DOMContentLoaded", function () {
    // Your code here
    document.querySelector("form").addEventListener("submit", function (e) {
        e.preventDefault();

        const userId = document.querySelector("#user").value;

        fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
            .then((res) => res.json())
            .then((data) => {
                document.querySelector("#userName").textContent = data.name;
                document.querySelector("#userPhone").textContent = data.phone;
                document.querySelector("#userZip").textContent = data.address.zipcode;
                document.querySelector("#userCity").textContent = data.address.city;
                document.querySelector("#userStreet").textContent = data.address.street;
                document.querySelector("#userGeo").textContent = `${data.address.geo.lat}, ${data.address.geo.lng}`;
            })
            .catch((err) => console.log(err));
    });

    document.getElementById("getAllBtn").addEventListener("click", function (e) {
        e.preventDefault();
        fetch(`https://jsonplaceholder.typicode.com/users`)
            .then((res) => res.json())
            .then((data) => {
                const userList = document.querySelector("#userList");
                userList.innerHTML = "";


                    data.forEach((user) => {
                        const listItem = document.createElement("tr");
                        const nameCell = document.createElement("td");
                        const phoneCell = document.createElement("td");

                        nameCell.textContent = user.name;
                        phoneCell.textContent = user.phone;

                        listItem.appendChild(nameCell);
                        listItem.appendChild(phoneCell);
                        userList.appendChild(listItem);

                    });
            })
            .catch((err) => console.log(err));
    })
})

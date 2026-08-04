const token = localStorage.getItem("token");

if (!token) {

    window.location.href = "adminLogin.html";

}
let allMessages = [];

async function loadMessages() {

    try {

        const response = await fetch("http://localhost:5000/api/contact");

        const data = await response.json();

        allMessages = data.data;

        const table = document.getElementById("messageTable");

        table.innerHTML = "";

        allMessages.forEach((msg) => {

            table.innerHTML += `
                <tr>
                    <td>${msg.id}</td>
                    <td>${msg.name}</td>
                    <td>${msg.email}</td>
                    <td>${msg.subject}</td>
                    <td>${msg.message}</td>
                    <td>
                        <button onclick="deleteMessage(${msg.id})">
                            Delete
                        </button>
                    </td>
                </tr>
            `;

        });

    } catch (error) {

        console.error(error);

    }

}

loadMessages();

async function deleteMessage(id) {

    const confirmDelete = confirm("Are you sure you want to delete this message?");

    if (!confirmDelete) return;

    try {

        const response = await fetch(`http://localhost:5000/api/contact/${id}`, {

            method: "DELETE"

        });

        const data = await response.json();

        alert(data.message);

        loadMessages();

    } catch (error) {

        console.error(error);

        alert("Failed to delete message.");

    }

}

document.getElementById("searchInput").addEventListener("keyup", function () {

    const value = this.value.toLowerCase();

    const rows = document.querySelectorAll("#messageTable tr");

    rows.forEach((row) => {

        if (row.innerText.toLowerCase().includes(value)) {

            row.style.display = "";

        } else {

            row.style.display = "none";

        }

    });

});
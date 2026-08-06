const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", async (e) => {

    e.preventDefault();

    const username = document.getElementById("username").value;

    const password = document.getElementById("password").value;

    try {

        const response = await fetch("https://aniketportfolio.duckdns.org/api/auth/login", {

            method: "POST",

            headers: {

                "Content-Type": "application/json"

            },

            body: JSON.stringify({

                username,

                password

            })

        });

        const data = await response.json();

        if (data.success) {

            localStorage.setItem("token", data.token);

            alert("Login Successful!");

            window.location.href = "admin.html";

        } else {

            alert(data.message);

        }

    } catch (error) {

        console.error(error);

        alert("Server Error");

    }

});
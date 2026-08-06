const titles = [

    "AWS Cloud Engineer",

    "Cloud Infrastructure Engineer",

    "Terraform Specialist",

    "Linux Administrator",

    "DevOps Engineer"

];

const contactForm = document.getElementById("contactForm");

const submitBtn = document.getElementById("submitBtn");

contactForm.addEventListener("submit", async (e) => {

    e.preventDefault();

    const formData = {

        name: contactForm.name.value,

        email: contactForm.email.value,

        subject: contactForm.subject.value,

        message: contactForm.message.value

    };

    try {

submitBtn.disabled = true;
submitBtn.innerHTML = "⏳ Sending...";

        const response = await fetch("https://aniketportfolio.duckdns.org/api/contact", {

            method: "POST",

            headers: {

                "Content-Type": "application/json"

            },

            body: JSON.stringify(formData)

        });

        const data = await response.json();

        if (data.success) {

    Toastify({
        text: data.message,
        duration: 3000,
        gravity: "top",
        position: "right",
        style: {
            background: "#16a34a"
        }
    }).showToast();

    contactForm.reset();

    submitBtn.disabled = false;
submitBtn.textContent = "Send Message";

} else {

    Toastify({
        text: data.message,
        duration: 3000,
        gravity: "top",
        position: "right",
        style: {
            background: "#dc2626"
        }
    }).showToast();

    submitBtn.disabled = false;
submitBtn.textContent = "Send Message";

}

    } catch (error) {

        console.error(error);

        alert("Unable to connect to the server.");Toastify({
    text: "Unable to connect to the server.",
    duration: 3000,
    gravity: "top",
    position: "right",
    style: {
        background: "#dc2626"
    }
}).showToast();

submitBtn.disabled = false;
submitBtn.textContent = "Send Message";

    }

});
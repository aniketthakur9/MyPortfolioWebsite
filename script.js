const titles = [

    "AWS Cloud Engineer",

    "Cloud Infrastructure Engineer",

    "Terraform Specialist",

    "Linux Administrator",

    "DevOps Engineer"

];
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", async (e) => {

    e.preventDefault();

    const formData = {

    name: contactForm.name.value,

    email: contactForm.email.value,

    subject: contactForm.subject.value,

    message: contactForm.message.value

};

try {

    const response = await fetch("http://localhost:5000/api/contact", {

        method: "POST",

        headers: {

            "Content-Type": "application/json"

        },

        body: JSON.stringify(formData)

    });

    const result = await response.json();

    console.log(result);

} catch (error) {

    console.error(error);

}

});

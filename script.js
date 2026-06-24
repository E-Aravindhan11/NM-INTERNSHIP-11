loadParticipants();

function registerParticipant() {

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();

    let message = document.getElementById("message");

    if (name === "" || email === "" || phone === "") {
        message.innerHTML = "Please fill all fields!";
        message.style.color = "red";
        return;
    }

    let participants = JSON.parse(localStorage.getItem("participants")) || [];

    let exists = participants.find(function(item) {
        return item.email === email;
    });

    if (exists) {
        message.innerHTML = "Participant already registered!";
        message.style.color = "red";
        return;
    }

    participants.push({
        name: name,
        email: email,
        phone: phone
    });

    localStorage.setItem("participants", JSON.stringify(participants));

    message.innerHTML = "Registration Successful!";
    message.style.color = "green";

    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";

    loadParticipants();
}

function loadParticipants() {

    let participants = JSON.parse(localStorage.getItem("participants")) || "";

    let output = "";

    participants.forEach(function(item) {

        output += `
        <tr>
            <td>${item.name}</td>
            <td>${item.email}</td>
            <td>${item.phone}</td>
        </tr>
        `;
    });

    document.getElementById("participantList").innerHTML = output;
}

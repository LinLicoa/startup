const API_URL = "https://send-mail-r8o3.onrender.com/send-email"

export const sendEmail = async (email) => {
    const response = await fetch(API_URL, {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify(email),
    })
    return response.json();
}
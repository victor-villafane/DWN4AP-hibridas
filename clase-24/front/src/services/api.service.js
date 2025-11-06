export function call({ uri, method = "GET", body = undefined }) {
    const token = localStorage.getItem("token")
    return fetch("http://localhost:2025/api/" + uri, {
        method: method,
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(body)
    })
}
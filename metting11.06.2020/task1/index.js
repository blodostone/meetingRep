const baseUrl = "https://5ece5f5561c8480016701459.mockapi.io/api/v1/users";

export const getUsersList = () => {
    return fetch(baseUrl).then((response) => response.json());
};
// getTasksList();

export const getUserById = (userId) => {
    return fetch(`${baseUrl}/${userId}`).then((response) => response.json());
};
// getUserById("12");

export const createUser = (createUser) => {
    return fetch(baseUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(createUser),
    }).then((response) => response.json());
};

export const updateUser = (userId, userObject) => {
    return fetch(`${baseUrl}/${userId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(userObject),
    }).then((response) => response.json());
};
// updateUser("1", {
//   id: "1",
//   email: "max@gmail.com",
//   firstName: "Max",
//   lastName: "Khokhlov",
//   age: 56,
// });

export const deleteUser = (userId) => {
    return fetch(`${baseUrl}/${userId}`, { method: "DELETE" }).then((response) =>
        response.json()
    );
};
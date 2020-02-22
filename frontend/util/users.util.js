//fetches user of the given id

export const fetchUser = (id) => {
    return $.ajax({
        method: "GET",
        url: `/api/users/${id}`
    })
}
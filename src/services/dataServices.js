export async function getUser() {
    const token = JSON.parse(sessionStorage.getItem("token"))
    const ebid = JSON.parse(sessionStorage.getItem("ebid"))

    const response = await fetch(`${process.env.REACT_APP_HOST}/600/users/${ebid}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        }
    });
    if(!response.ok) {
        throw{ message: response.statusText, status: response.status };  // eslint-disable-line
    }
    const data = await response.json();
    return data;
}

export async function getUsersOrders() {
    const token = JSON.parse(sessionStorage.getItem("token"))
    const ebid = JSON.parse(sessionStorage.getItem("ebid"))

    const response = await fetch(`${process.env.REACT_APP_HOST}/660/orders?user.id=${ebid}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        }
    });
    if(!response.ok) {
        throw{ message: response.statusText, status: response.status };  // eslint-disable-line
    }
    const data = await response.json();
    return data;
}

export async function createOrder(user, cartList, total) {
    const token = JSON.parse(sessionStorage.getItem("token"))
    // const ebid = JSON.parse(sessionStorage.getItem("ebid"))

    const order = {
        cartList: cartList,
        amount_paid: total,
        quantity: cartList.length,
        user: {
            name: user.name,
            email: user.email,
            id: user.id
        }
    }

    const response = await fetch(`${process.env.REACT_APP_HOST}/660/orders/`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
        body: JSON.stringify(order)
    })
    if(!response.ok) {
        throw{ message: response.statusText, status: response.status };  // eslint-disable-line
    }
    const data = await response.json();
    return data;
}


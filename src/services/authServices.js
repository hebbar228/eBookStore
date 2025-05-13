export async function login(authDetail) {
    const requestOptions = {
        method: "POST",
        headers: {"content-Type": "application/json"},
        body: JSON.stringify(authDetail)
      }
      
      const response = await fetch(`${process.env.REACT_APP_HOST}/login`, requestOptions);
      // const response = await fetch(`http://localhost:8000/login`, requestOptions);

      const data = await response.json()
      //  data.accessToken ? navigate("/products") : toast.error(data)
      // console.log(data);
      if(!response.ok) {
        throw{ message: response.statusText, status: response.status };  // eslint-disable-line
      }
      if(data.accessToken) {
        sessionStorage.setItem("token", JSON.stringify(data.accessToken))
        sessionStorage.setItem("ebid", JSON.stringify(data.user.id))
      }

      return data;
}

export async function register(authDetail) {
    const requestOptions = {
        method: "POST",
        headers: {"content-Type": "application/json"},
        body: JSON.stringify(authDetail)
      }
      
      // const response = await fetch(`http://localhost:8000/register`, requestOptions);
      const response = await fetch(`${process.env.REACT_APP_HOST}/register`, requestOptions);

      const data = await response.json()
      //  data.accessToken ? navigate("/products") : toast.error(data)
      // console.log(data);
      if(!response.ok) {
        throw{ message: response.statusText, status: response.status };  // eslint-disable-line
      }
      if(data.accessToken) {
        sessionStorage.setItem("token", JSON.stringify(data.accessToken))
        sessionStorage.setItem("ebid", JSON.stringify(data.user.id))
      }

      return data;
}

export function logOut() {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("ebid");
}
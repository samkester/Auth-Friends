import Axios from "axios";

export const axiosWithAuth = () => {
    return Axios.create(
        {
            headers: {
                Authorization: localStorage.getItem("token"),
            },
            baseURL: "http://localhost:5000",
        }
    )
};
import axiosClient from "./axiosClient";

const userApi = {
    gets: () => {
        const url = "/api/User/Gets";
        return axiosClient.get(url);
    }
}
export default userApi;


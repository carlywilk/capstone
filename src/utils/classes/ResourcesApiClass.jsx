import axios from "axios";

export class ResourcesApi {
    constructor() {
        this.serverUrl = process.env.REACT_APP_SERVER_URL;
        console.log(this.serverUrl)
    }

    async getResourceList() {
        return await axios.get(`${this.serverUrl}/api/resources`);
    }

    async getResourceDetails(id) {
        return await axios.get(`${this.serverUrl}/api/resources/${id}`);
    }
}
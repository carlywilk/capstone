import axios from "axios";

export class ResourcesApi {
    constructor() {
        this.serverUrl = process.env.REACT_APP_SERVER_URL;
    }

    async getResourceList() {
        return await axios.get(`${this.serverUrl}/api/resources`);
    }
}
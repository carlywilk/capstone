import axios from "axios";

export class ServicesApi {
    constructor() {
        this.serverUrl = process.env.REACT_APP_SERVER_URL;
    }

    async getServicesList() {
        return await axios.get(`${this.serverUrl}/api/services`);
    }
}
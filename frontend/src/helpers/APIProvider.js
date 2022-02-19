import Axios from "./request";

class APIProvider {

  getAll() {
    return Axios.get("/transactions");
  }

  get(id) {
    return Axios.get(`/transactions/${id}`);
  }

  create(data) {
    return Axios.post("/transactions", data);
  }

  update(id, data) {
    return Axios.put(`/transactions/${id}`, data);
  }

  delete(id) {
    return Axios.delete(`/transactions/${id}`);
  }

  deleteAll() {
    return Axios.delete(`/transactions`);
  }

};

export default new APIProvider();
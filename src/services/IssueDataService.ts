import http from "../http-common";

class TutorialDataService {
  getAll() {
    return http.get("/Issue");
  }

  get(id: string) {
    return http.get(`/Issue/${id}`);
  }

  create(data: any) {
    return http.post("/Issue", data);
  }

  update(id: string, data: any) {
    return http.put(`/Issue/${id}`, data);
  }

  delete(id: string) {
    return http.delete(`/tutorials/${id}`);
  }

}

export default new TutorialDataService();
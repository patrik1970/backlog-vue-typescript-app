import http from "../http-common";

class IssueDataService {
  getAll() {
    return http.get("/Issue");
  }

  getById(id: string) {
    return http.get(`/Issue/${id}`);
  }

  update(id: number, data: any) {
    return http.put(`/Issue/${id}`, data);
  }

  delete(id: number) {
    return http.delete(`/Issue/${id}`);
  }
}

export default new IssueDataService();
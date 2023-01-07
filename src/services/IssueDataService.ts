import http from "../http-common";

class IssueDataService {
  getAll() {
    return http.get("/Issue");
  }

  getById(id: string) {
    return http.get(`/Issue/${id}`);
  }
}

export default new IssueDataService();
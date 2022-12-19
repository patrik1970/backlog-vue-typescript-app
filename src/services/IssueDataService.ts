import http from "../http-common";

class IssueDataService {
  getAll() {
    return http.get("/Issue");
  }
}

export default new IssueDataService();
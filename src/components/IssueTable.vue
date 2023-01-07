<template>
  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
           Id
          </th>
          <th class="text-left">
           Title
          </th>
          <th class="text-left">
            Description
          </th>
          <th class="text-left">
            Priority
          </th>
          <th class="text-left">
            IssueType
          </th>
          <th class="text-left">
            Created
          </th>
          <th class="text-left">
            Completed
          </th>
          <th class="text-left">
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="issue in issues"
          :key="issue.id"
        >
          <td>{{ issue.id }}</td>
          <td>{{ issue.title }}</td>
          <td>{{ issue.description }}</td>
          <td>{{ issue.priority }}</td>
          <td>{{ issue.issueType }}</td>
          <td>{{ issue.created }}</td>
          <td>{{ issue.completed }}</td>
          <td>
            <v-icon
              large
              @click="next(issue.id)"
            >
              mdi-chevron-right
            </v-icon>
          </td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>



<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import IssueDataService from "../services/IssueDataService";
import Issue from "@/types/Issue";
import router from "@/router";

@Component
export default class IssueTable extends Vue {
  private issues: Issue[] = [];

  fetchAllIssues() {
    IssueDataService.getAll()
      .then((response) => {
        this.issues = response.data;
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  mounted() {
    this.fetchAllIssues();
  }

  next (id:string) {
    this.$router.push('issue-card/' + id)
  }
}
</script>
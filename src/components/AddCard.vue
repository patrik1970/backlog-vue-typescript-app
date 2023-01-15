<template>
    <v-card elevation="2" outlined>
        <v-container>
            <v-row  class="d-flex justify-space-between">
                <v-col>
                    <v-text-field
                        label="Title"
                        outlined
                        v-model="issue.title"
                    ></v-text-field>
                </v-col>
                <v-col>
                    <select class="selectbox" v-model="issue.issueType">
                        <option disabled value='3'>Please select a IssueType</option>
                        <option value='0'>Feature</option>
                        <option value='1'>Bug</option>
                        <option value='2'>Documentation</option>
                    </select>
                </v-col>
                <v-col>
                    <select class="selectbox" v-model="issue.priority">
                        <option disabled value='3'>Please select priority</option>
                        <option value='0'>Low</option>
                        <option value='1'>Medium</option>
                        <option value='2'>High</option>
                    </select>
                </v-col>
            </v-row>      
            <v-textarea
                label="Outlined"  
                auto-grow
                outlined
                rows="1"
                row-height="15"
            ></v-textarea>
            <v-row  class="d-flex justify-space-between align-baseline">
                <v-col>
                    <v-text-field
                        label="Outlined"
                        outlined
                    ></v-text-field>
                </v-col>
                <v-col>
                    <v-text-field
                        label="Outlined"
                        outlined
                    ></v-text-field>
                </v-col>
                <v-row
                    align="center"
                    justify="space-around"
                >
                    <v-btn 
                        depressed
                        color="primary"
                        x-large
                    >
                        Cancel
                    </v-btn>
                    <v-btn
                        outlined
                        x-large
                    >
                        Create Issue
                    </v-btn>
                </v-row>
            </v-row>      
        </v-container>   
    </v-card>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import IssueDataService from "@/services/IssueDataService";
import Issue from "@/types/Issue";

@Component
export default class AddCard extends Vue {
  private issue: Issue = {
    id: 0,
    title: "",
    issueType: 3,
    priority: 3,
  };
}
</script>

<style scoped>
    .selectbox {
        width: 100%;
        height: 56px;
        border-style: solid;
        border-radius: 5px;
        -webkit-appearance: auto;
        -moz-appearance: auto;
    }
</style>
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
                    <select class="selectbox">
                        <option value=''> {{ (issue.issueType === 0) ? ('Feature') : (issue.issueType === 1) ? ('Bug'): (issue.issueType === 2) ? ('Documentation'): '' }}</option>
                        <option value='0'>Feature</option>
                        <option value='1'>Bug</option>
                        <option value='2'>Documentation</option>
                    </select>  
                </v-col>
                <v-col>
                    <select class="selectbox">
                        <option value=''> {{ (issue.priority === 0) ? ('Low') : (issue.priority === 1) ? ('Medium'): (issue.priority === 2) ? ('High'): '' }}</option>
                        <option value='0'>Low</option>
                        <option value='1'>Medium</option>
                        <option value='2'>High</option>
                    </select>  
                </v-col>
            </v-row>      
            <v-textarea
                label="Description" 
                v-model="issue.description" 
                auto-grow
                outlined
                rows="1"
                row-height="15"
            ></v-textarea>
            <v-row  class="d-flex justify-space-between align-baseline">
                <v-col>
                    <v-menu
                        ref="menu1"
                        v-model="menu1"
                        :close-on-content-click="false"
                        :return-value.sync="date"
                        transition="scale-transition"
                        offset-y
                        min-width="auto"
                    >
                        <template v-slot:activator="{ on, attrs }">
                            <v-text-field
                                outlined
                                v-model="issue.created"
                                label="Created"
                                prepend-icon="mdi-calendar"
                                readonly
                                v-bind="attrs"
                                v-on="on"
                            ></v-text-field>
                        </template>
                        <v-date-picker
                            v-model="issue.created"
                            no-title
                            scrollable
                        >
                            <v-spacer></v-spacer>
                            <v-btn
                                text
                                color="primary"
                                @click="menu1 = false"
                            >
                                Cancel
                            </v-btn>
                            <v-btn
                                text
                                color="primary"
                                @click="$refs.menu1.save(date)"
                            >
                                OK
                            </v-btn>
                        </v-date-picker>
                    </v-menu> 
                </v-col>
                <v-col>
                    <v-menu
                        ref="menu2"
                        v-model="menu2"
                        :close-on-content-click="false"
                        :return-value.sync="date"
                        transition="scale-transition"
                        offset-y
                        min-width="auto"
                    >
                        <template v-slot:activator="{ on, attrs }">
                            <v-text-field
                                outlined
                                v-model="issue.completed"
                                label="Completed"
                                prepend-icon="mdi-calendar"
                                readonly
                                v-bind="attrs"
                                v-on="on"
                            ></v-text-field>
                        </template>
                        <v-date-picker
                            v-model="issue.completed"
                            no-title
                            scrollable
                        >
                            <v-spacer></v-spacer>
                            <v-btn
                                text
                                color="primary"
                                @click="menu2 = false"
                            >
                                Cancel
                            </v-btn>
                            <v-btn
                                text
                                color="primary"
                                @click="$refs.menu2.save(date)"
                            >
                                OK
                            </v-btn>
                        </v-date-picker>
                    </v-menu>
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
                        Abort
                    </v-btn>
                    <v-btn
                        outlined
                        x-large
                    >
                        Save Issue
                    </v-btn>
                    <v-btn
                        outlined
                        color="error"
                        x-large
                    >
                        Delete Issue
                    </v-btn>
                </v-row>
            </v-row>      
        </v-container>   
    </v-card>
</template>

<script lang="ts">
    import { Component, Vue } from "vue-property-decorator";
    import IssueDataService from "../services/IssueDataService";
    import Issue from "../types/Issue";
@Component
  export default class IssueCard extends Vue{
    private issue = {} as Issue;

    data() {
        return {
            date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
            menu1: false,
            modal: false,
            menu2: false,
        }
    }

    fetchIssueById(id: string) {
    IssueDataService.getById(id)
      .then((response) => {
        this.issue = response.data;
        console.log('Response Data: ',response.data);
        this.issue.created = new Date(this.issue.created).toLocaleDateString();
        this.issue.completed = new Date(this.issue.completed).toLocaleDateString();
      })
      .catch((e) => {
        console.log(e);
      });
      
    }

    mounted(){
        this.fetchIssueById(this.$route.params.id); 
    }
    
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
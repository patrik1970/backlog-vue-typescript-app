<template>
    <v-card elevation="2" outlined>
        <v-container>
            <v-row  class="d-flex justify-space-between">
                <v-col>
                    <v-text-field
                        label="Title"
                        outlined
                    ></v-text-field>
                </v-col>
                <v-col>
                    <v-select 
                        :items="issueTypes"
                        item-text="issueType"
                        item-value="index"
                        label="IssueType"
                        outlined
                    ></v-select>
                </v-col>
                <v-col>
                    <v-select 
                        :items="prioritys"
                        item-text="priority"
                        item-value="index"
                        label="Priority"
                        outlined
                    ></v-select>
                </v-col>
            </v-row>      
            <v-textarea
                label="Description"  
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
                                v-model="date1"
                                label="Created"
                                prepend-icon="mdi-calendar"
                                readonly
                                v-bind="attrs"
                                v-on="on"
                            ></v-text-field>
                        </template>
                        <v-date-picker
                            v-model="date1"
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
                                v-model="date2"
                                label="Completed"
                                prepend-icon="mdi-calendar"
                                readonly
                                v-bind="attrs"
                                v-on="on"
                            ></v-text-field>
                        </template>
                        <v-date-picker
                            v-model="date2"
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

<script>
  export default {
    data: () => ({
      issueTypes: [
        { issueType: "Bug", index: '1' },
        { issueType: "Feature", index: '2' },      
        { issueType: "Documentation", index: '3' }
      ],
      prioritys: [
        { priority: "Low", index: '1' },
        { priority: "Medium", index: '2' },      
        { priority: "High", index: '3' }  
      ],
      date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
      menu1: false,
      modal: false,
      menu2: false,
    }),
  }
</script>

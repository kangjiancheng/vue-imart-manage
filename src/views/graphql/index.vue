<template>
  <div class="graphql">
    graphql 测试
    {{ tasksToDo }}
  </div>
</template>

<script>
  import TASKS_ALL from '@/graphql/api/TasksAll.gql'
  export default {
    name: "graphql",

    data () {
      return {
        tasks: [],
      }
    },

    apollo: {
      tasks: {
        query: TASKS_ALL,
        update ({ allTasks }) {
          return allTasks
        },
      },
    },

    computed: {
      tasksToDo () {
        return this.tasks.filter(
          task => !task.done
        )
      },
    },
  }
</script>

<style scoped>

</style>
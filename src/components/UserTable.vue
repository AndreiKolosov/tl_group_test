<template>
  <table class="users-table">
    <thead class="user-table__head">
      <td class="user-table__head-cell" v-for="columnItem in columns" :key="columnItem.value">
        <span>{{ columnItem.name }}</span>
      </td>
    </thead>
    <tbody>
      <TransitionGroup name="users">
        <UserTableRow v-for="user in users" :key="user.id" :user="user" />
      </TransitionGroup>
    </tbody>
  </table>
</template>

<script>
import UserTableRow from '@/components/UserTableRow.vue';
import { TransitionGroup } from 'vue';

export default {
  components: {
    UserTableRow,
    TransitionGroup,
  },
  props: {
    users: {
      type: Array,
      required: true,
    },
    columns: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.users-table {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  border: 2px solid green;
  border-radius: 20px;
}
.user-table__head {
  width: 100%;
  min-height: 80px;
  height: 1px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  border-bottom: 2px solid green;
}
.user-table__head-cell {
  height: 100%;
  min-width: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 2px solid green;
}

.user-table__head-cell:last-of-type {
  border: none;
}

/* animation */
.users-move {
  transition: transform 0.8s ease;
}
</style>

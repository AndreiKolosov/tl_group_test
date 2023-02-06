<template>
  <h2 class="title">Таблица пользователей</h2>
  <table class="users-table">
    <thead class="user-table__head">
      <td class="user-table__head-cell" v-for="columnItem in columns" :key="columnItem.value">
        <p class="user-table__cell-text">{{ columnItem.name }}</p>
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
.title {
  margin: 0;
  color: green;
  font-size: 21px;
  line-height: 1;
}
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
}
.user-table__head-cell {
  height: 100%;
  min-width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 2px solid green;
}

.user-table__cell-text {
  margin: 0;
  font-weight: 400;
  font-size: 16px;
  line-height: 1;
  color: black;
  word-break: break-all;
}

.user-table__head-cell:last-of-type {
  border: none;
}

/* animation */
.users-move {
  transition: transform 0.8s ease;
}

@media screen and (max-width: 768px) {
  .user-table__cell-text {
    font-size: 14px;
  }
}

@media screen and (max-width: 500px) {
  .user-table__cell-text {
    font-size: 12px;
  }

  .user-table__head-cell {
    min-width: 70px;
  }
}
</style>

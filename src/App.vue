<template>
  <main>
    <section class="users-statistics">
      <div class="controls">
        <div class="controls__sorting">
          <h2 class="controls__block-title">Сортировать таблицу</h2>
          <MySelect
            class="controls__sorting-by"
            v-model="selectedSort"
            :options="columns"
            :placeholderValue="'Сортировать по'"
          />
          <MySelect
            class="controls__sorting-dir"
            v-model="selectedSortDirection"
            :options="sortingDirections"
            :placeholderValue="'Направление сортировки'"
          />
        </div>
        <div class="controls__filters">
          <h2 class="controls__block-title">Фильтрация значений</h2>
          <MyInput class="controls__search" v-model="searchQuery" type="text" placeholder="Найти по логину" />
          <MySelect
            class="controls__filter-by-status"
            v-model="selectedStatus"
            :options="statusOptions"
            :placeholderValue="'Фильтрация по статусу'"
          />
          <div class="controls__orders-filter">
            <p class="controls__orders-filter-title">Подтвержденные заказы</p>
            <MyInput
              class="controls__orders-min-input input_number"
              v-model="minConfirmedOrders"
              type="number"
              placeholder="От"
            />
            <MyInput
              class="controls__orders-max-input input_number"
              v-model="maxConfirmedOrders"
              type="number"
              placeholder="До"
            />
          </div>
        </div>
      </div>
      <UserTable :users="preparedUsers" :columns="columns" />
    </section>
  </main>
</template>

<script>
import MySelect from '@/components/UI/MySelect.vue';
import UserTable from '@/components/UserTable.vue';
import { mockUsers, mockColumns } from '@/mockData';
import { ascNumberSort, descNumberSort, sortingDirectionsOptions, statusFilterOptions } from '@/utils';

export default {
  components: {
    UserTable,
    MySelect,
  },
  data() {
    return {
      users: mockUsers,
      columns: mockColumns,
      sortingDirections: sortingDirectionsOptions,
      statusOptions: statusFilterOptions,
      selectedSortDirection: 'asc',
      selectedSort: '',
      searchQuery: '',
      selectedStatus: '',
      minConfirmedOrders: null,
      maxConfirmedOrders: null,
    };
  },
  computed: {
    sortedUsers() {
      return [...this.users].sort((user1, user2) => {
        if (this.selectedSortDirection === 'desc') {
          return descNumberSort(user1[this.selectedSort], user2[this.selectedSort]);
        } else {
          return ascNumberSort(user1[this.selectedSort], user2[this.selectedSort]);
        }
      });
    },
    sortedAndSearchedUsers() {
      return this.sortedUsers.filter((user) => {
        return user.login.toLowerCase().includes(this.searchQuery.toLowerCase());
      });
    },
    filteredByStatusUsers() {
      return this.sortedAndSearchedUsers.filter((user) => {
        if (this.selectedStatus) {
          return user.status === this.selectedStatus;
        }
        return user;
      });
    },
    preparedUsers() {
      return this.filteredByStatusUsers.filter((user) => {
        if (this.maxConfirmedOrders && this.minConfirmedOrders) {
          return user.confirmedOrders > this.minConfirmedOrders && user.confirmedOrders < this.maxConfirmedOrders;
        }
        return user;
      });
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  padding: 0;
  background-color: rgb(237, 240, 243);
}

body {
  margin: 0;
}

* {
  box-sizing: border-box;
}

.users-statistics {
  display: grid;
  gap: 20px 0;
  padding: 50px;
}

.controls {
  display: grid;
  padding: 10px;
  border: 1px solid green;
  border-radius: 20px;
  gap: 20px 0;
}

.controls__block-title {
  grid-area: title;
  color: green;
  font-weight: 400;
  font-size: 21px;
  line-height: 1;
  margin: 0;
}

.controls__sorting {
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: max-content max-content;
  grid-template-areas:
    'title sortby'
    'title sortdir';
  gap: 10px 8px;
}

.controls__sorting-by {
  grid-area: sortby;
}

.controls__sorting-dir {
  grid-area: sortdir;
}

.controls__filters {
  display: grid;
  width: 100%;
  align-items: center;
  grid-template-areas:
    'title search'
    'title status'
    'title orders';
  grid-template-columns: 1fr 1fr;
  gap: 10px 8px;
}

.controls__search {
  grid-area: search;
}
.controls__filter-by-status {
  grid-area: status;
}
.controls__orders-filter {
  grid-area: orders;
  width: 100%;
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
    'title min'
    'title max';
  gap: 5px 0;
  padding: 5px;
  border: 1px solid green;
  border-radius: 10px;
}

.controls__orders-filter-title {
  grid-area: title;
  margin: 0;
  color: green;
  font-size: 18px;
  line-height: 1;
}

.controls__orders-max-input {
  grid-area: max;
}

.controls__orders-min-input {
  grid-area: min;
}

.input_number::-webkit-outer-spin-button,
.input_number::-webkit-inner-spin-button {
  display: none;
}

@media screen and (max-width: 768px) {
  .users-statistics {
    display: grid;
    gap: 10px 0;
    padding: 10px;
  }

  .controls__sorting {
    grid-template-columns: 1fr;
    grid-template-areas:
      'title'
      'sortby'
      'sortdir';
  }

  .controls__filters {
    grid-template-areas:
      'title '
      'search'
      'status'
      'orders';
    grid-template-columns: 1fr;
  }

  .controls__block-title {
    font-size: 16px;
  }

  .controls__orders-filter-title {
    font-size: 16px;
  }
}
</style>
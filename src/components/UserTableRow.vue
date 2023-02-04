<template>
  <li class="row">
    <p class="row__cell">
      <span>{{ user.position }}</span>
    </p>
    <p class="row__cell">
      <span>{{ user.login }}</span>
    </p>
    <p class="row__cell">
      <span>{{ user.confirmedOrders }}</span>
    </p>
    <p class="row__cell">
      <span>{{ user.status }}</span>
    </p>
  </li>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.row {
  border-bottom: 1px solid green;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  min-height: 50px;
  height: 1px;
  width: 100%;
}
.row:last-of-type {
  border: none;
}
.row__cell {
  width: 100%;
  height: 100%;
  min-width: 150px;
  border-right: 1px solid green;
  margin: 0;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.row__cell:last-of-type {
  border: none;
}
</style>

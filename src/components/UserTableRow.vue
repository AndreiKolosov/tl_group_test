<template>
  <tr class="row">
    <td class="row__cell">
      <p class="row__cell-text">{{ user.position }}</p>
    </td>
    <td class="row__cell">
      <p class="row__cell-text">{{ user.login }}</p>
    </td>
    <td class="row__cell">
      <p class="row__cell-text">{{ user.confirmedOrders }}</p>
    </td>
    <td class="row__cell">
      <p class="row__cell-text">{{ user.status }}</p>
    </td>
  </tr>
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
  margin: 0;
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
  min-width: 100px;
  height: 100%;
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

.row__cell-text {
  margin: 0;
  font-weight: 400;
  font-size: 16px;
  line-height: 1;
  color: black;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}

@media screen and (max-width: 768px) {
  .row__cell-text {
    font-size: 14px;
  }
}

@media screen and (max-width: 500px) {
  .row__cell-text {
    font-size: 12px;
  }

  .row__cell {
    min-width: 70px;
  }
}
</style>

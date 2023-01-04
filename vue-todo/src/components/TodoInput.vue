<template>
  <div>
    <label for="todo-input">오늘 할 일 : </label>
    <input
      v-on:keyup.enter="addTodo"
      id="todo-input"
      type="text"
      :value="item"
      @input="handleInput"
    />
    <button @click="addTodo" tpye="button">추가</button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  //props: ["item"],
  props: {
    item: {
      type: String,
      required: true,
    },
  },
  methods: {
    handleInput(event: InputEvent) {
      console.log(event);
      // if (!event.target) {
      //   return;
      // }
      const eventTarget = event.target as HTMLInputElement;
      this.$emit("input", eventTarget.value);
    },
    addTodo() {
      this.$emit("add");
    },
  },
});
</script>

<style scoped></style>

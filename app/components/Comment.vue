<template>
  <li>
    <span>{{ comment }}</span>

    <ul v-if="replies.length">
      <div v-for="(item, index) in replies" :key="index">
        <Comment
          v-bind="{
            comment: item.auther,
            replies: item.comments,
          }"
        />
      </div>
    </ul>
  </li>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  comment: {
    type: String,
    required: true,
  },
  replies: {
    type: Array,
    default: () => [],
  },
})
</script>

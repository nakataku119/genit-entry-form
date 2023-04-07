<template>
  <v-app>
    <v-container>
      <v-responsive class="d-flex align-center text-center fill-height">
        <default-bar />
        <default-view />
      </v-responsive>
    </v-container>
  </v-app>
</template>

<script lang="ts" setup>
import DefaultBar from "./AppBar.vue";
import DefaultView from "./View.vue";
</script>

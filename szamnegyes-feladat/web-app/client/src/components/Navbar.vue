<template>
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Számnégyesek</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <RouterLink class="nav-link" to="/">Számnégyesek</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link" to="/new">Új számnégyes</RouterLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>
<script setup>
import { RouterLink } from 'vue-router'
</script>
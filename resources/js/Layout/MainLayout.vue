<script setup>
import Header from '../Components/Header.vue'
</script>

<template>
    <div>
        <Header />
        <main class="container p-6 mx-auto">
            <slot />
        </main>
    </div>
</template>

<style></style>

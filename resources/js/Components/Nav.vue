<script setup>
import { switchTheme } from "../theme.js";
import { Link } from "@inertiajs/vue3";
</script>

<template>
    <nav class="container flex justify-between items-center p-6 mx-auto">
        <Link class="text-white">Home</Link>

        <div>
            <button
                @click="switchTheme"
                class="hover:bg-slate-700 w-6 h-6 grid place-items-center rounded-full hover:outline outline-1 outline-white cursor-pointer"
            >
                <i class="fa-solid fa-circle-half-stroke"></i>
            </button>
        </div>
    </nav>
</template>

<style></style>

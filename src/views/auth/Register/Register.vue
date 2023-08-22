<template>
    <div class="grid lg:grid-cols-2 h-screen overflow-hidden">
        <aside class=" hidden lg:block border border-red-500 pt-[15vh] py-8 px-6 overflow-auto bg-mint-light">
            <CoreValues />
        </aside>
        <div class="relative bg-primary">
            <div class="absolute left-0 w-full top-[20vh]">
                <img src="./assets/curve.svg?url" class="w-full" />
            </div>
            <main class="relative mt-[20vh] px-6">
                <section class="bg-white max-w-md mx-auto  rounded-[40px]  py-8 px-10">
                    <div class="mb-4">
                        <img src="@/assets/logo/new-logo-green.svg?url" />
                    </div>
                    <p></p>
                </section>
            </main>
        </div>
    </div>
</template>

<script setup>
import CoreValues from "./CoreValues.vue"
</script>

<style></style>
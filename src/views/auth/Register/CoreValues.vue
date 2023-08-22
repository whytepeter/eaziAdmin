<template>
    <div class=" max-w-[400px] w-full mx-auto">
        <div class="border border-[#E7E8E7] rounded-[16px]  px-8 py-6 bg-white">
            <header class="border-b-2 border-[#DDDEDD] pb-1 mb-6">
                <h3 class="text-[#11453B]">Our Core Values</h3>
                <div></div>
            </header>
            <div class="grid gap-6">

                <div class="flex items-start gap-4" v-for="value of values" :key="value.id">
                    <div class="w-12 h-12 rounded-full flex-shrink-0 bg-green-400"></div>
                    <div class="text-[#292A29]">
                        <h4 class="mb-2">{{ value.title }}</h4>
                        <p class="text-[14px]">{{ value.description || `Lorem ipsum dolor sit amet consectetur adipisicing
                                                    elit. Nisi sapiente
                                                    nostrum ab vitae tenetur ipsa ratione, natus repellat fugiat`}}
                        </p>
                    </div>
                </div>
            </div>

        </div>
        <div class="mt-2">
            <img src="./assets/shadow.svg?url" class="w-full" />
        </div>
    </div>
</template>

<script setup>
const values = [
    { id: 'value-1', title: 'Accountability', description: '' },
    { id: 'value-2', title: 'Integrity', description: '' },
    { id: 'value-3', title: 'Professionalism', description: '' },

]
</script>

<style></style>
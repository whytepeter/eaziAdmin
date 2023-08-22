<template>
    <div class="relative ">
        <div class="flex absolute top-0 left-0  w-full gap-2 items-start">
            <img src="./assets/openingQuote.svg?url" class=" relative -top-4 h-10  inline-block" />
            <img class=" w-full" src="./assets/topFrame.svg?url" />
        </div>
        <div class="px-12 py-10 text-white  font-bold" style="font-size: 36px; line-height: 48px;">
            <slot />
        </div>
        <div class="flex absolute bottom-0 w-full left-0 gap-2 items-baseline">

            <img class="w-full" src="./assets/bottomFrame.svg?url" />
            <img class="h-10 relative -bottom-4" src="./assets/closingQuote.svg?url" />

        </div>

    </div>
</template>
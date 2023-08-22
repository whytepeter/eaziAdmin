<template>
    <div class="product-rating">
        <div>
            <div class="mb-2">Product rating</div>
            <ProductStars :stars="5" class="mb-2" />

            <div class="flex items-end gap-[2px]">
                <span class="inline-block leading-[14px] text-[14px]">
                    1,056
                </span>
                <UsersIcon />
            </div>
        </div>

        <div class="score">
            4.8
        </div>

    </div>
</template>

<script setup>
import UsersIcon from '../../components/icons/UsersIcon.vue';
import ProductStars from './ProductStars.vue';

</script>

<style>
.product-rating {
    padding: 12px 16px;
    background: #11453B;
    color: white;
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.score {
    width: 40px;
    height: 40px;
    display: grid;
    place-items: center;
    background: #D9EBCD;
    border-radius: 99px;
    color: #11453B;
    font-weight: bold;
    font-size: 18px;

}
</style>
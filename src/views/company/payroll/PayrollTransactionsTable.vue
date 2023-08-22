<template>
    <div>
        <DataTable id="transactions-table" :value="data">
            <!-- <Column sortable field="adminName" header="Admin Name">
                <template #body>
                    <RouterLink :to="{ name: 'CompanyOverview', params: { slug: 'bowen-acredit' } }">
                        <div class="flex items-center gap-2 ">
                            <div class="w-8 h-8 rounded-full bg-gray-300"></div>
                            <div class="text-[#292A29] font-bold">Tunde Kelani</div>
                        </div>

                    </RouterLink>
                </template>
            </Column> -->
            <Column field="account" header="Account"></Column>
            <Column field="amount" header="Amount">
                <template #body="slotProps">
                    <div>
                        {{ formatCurrency(slotProps.data.amount) }}
                    </div>
                </template>
            </Column>
            <Column field="employees" header="Employees">
                <template #body="slotProps">
                    <div>
                        {{ slotProps.data.noOfemployees }}
                    </div>
                </template>
            </Column>
            <Column sortable field="status" header="Status">
                <template #body="slotProps">
                    <div>
                        {{ slotProps.data.status }}
                    </div>
                </template>
            </Column>
            <Column sortable field="date" header="Date">
                <template #body="slotProps">
                    <div>
                        {{ dayjs(slotProps.data.date).format('MMMM DD, YYYY') }}

                    </div>
                </template>
            </Column>
        </DataTable>

    </div>
</template>

<script setup>

import DataTable from "primevue/datatable";
import Column from "primevue/column";
import dayjs from "dayjs";
import { formatCurrency } from "@/utils/currency";

defineProps({
    data: {
        type: Array,
        default: () => []
    }
})

</script>

<style lang="scss">
#transactions-table {
    font-size: 14px;

    th {
        border: none;
        background: #F2F1F1;
        color: #515251;
        font-weight: 600;
        text-transform: capitalize;
        border-radius: 0;
        padding-top: 20px;
        padding-bottom: 20px;


        &:first-child {
            border-top-left-radius: 16px;
        }

        &:last-child {
            border-top-right-radius: 16px;
        }
    }


    td {
        border: none;
        color: #515251;
        padding-top: 20px;
        padding-bottom: 20px;

        &:first-child {
            border-left: 2px solid #F2F1F1;
        }

        &:last-child {
            border-right: 2px solid #F2F1F1;
        }
    }

    tr:nth-child(2) td {
        background: #FBFBFB;
    }

    .business {
        @apply flex items-center gap-2
    }

    .business-name {
        color: #292A29;
        font-weight: 600;
        font-size: 14px;
        line-height: 16px;
    }

    .business-avatar {
        width: 32px;
        height: 32px;
        border-radius: 99px;
        border: 1px solid #F2F1F1;
    }

}
</style>
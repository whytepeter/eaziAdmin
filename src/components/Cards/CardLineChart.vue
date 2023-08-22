<template>
  <div
    class="relative flex flex-col min-w-0 break-words w-full mb-6 p-4 md:p-6 shadow-md rounded-2xl bg-white border-none border-dark-100"
  >
    <!-- <easiButton @click="queryTransactions"
      >Click <menu type="context"></menu
    ></easiButton> -->
    <easiLoader circle v-if="loading" />

    <div
      class="rounded-t mb-0 sm:px-4 md:px-6 py-3 bg-transparent flex flex-col-reverse md:grid md:grid-cols-3 items-center justify-between"
    >
      <div
        class="flex justify-between gap-2 md:gap-4 w-full items-center md:col-span-2"
      >
        <div
          v-if="args.type.value === 'BOTH' || args.type.value === 'CREDIT'"
          class="text-left"
        >
          <span class="text-sm font-medium text-dark-600">Inflow</span>
          <h2 class="text-xl sm:text-2xl md:text-3xl text-success font-bold">
            {{ formatAmount(transactions && transactions.inflow) }}
          </h2>
        </div>
        <div
          v-if="args.type.value === 'BOTH' || args.type.value === 'DEBIT'"
          class="text-left"
        >
          <span class="text-sm font-medium text-dark-600">Outflow</span>
          <h2 class="text-xl sm:text-2xl md:text-3xl text-secondary font-bold">
            {{ formatAmount(transactions && transactions.outflow) }}
          </h2>
        </div>
      </div>

      <div class="md:col-span-1 flex justify-center md:justify-end">
        <div class="relative w-40 group mb-6 md:mb-0">
          <div
            class="flex justify-end items-center gap-2 cursor-pointer px-2"
            @click="showOptions = !showOptions"
          >
            {{ args.type.label }}
            <i
              :class="showOptions ? 'fas fa-angle-down' : 'fas fa-angle-right'"
            />
          </div>

          <div
            v-show="showOptions"
            class="flex z-20 flex-col bg-white shadow-md absolute w-36 md:w-40 text-sm left-0 md:-left-24"
          >
            <div
              v-for="option in options"
              :key="option.value"
              @click="updateTransactionByType(option)"
              :class="
                args.type.value === option.value
                  ? 'bg-primary text-white hover:bg-primary-hover'
                  : 'hover:bg-primary-hover'
              "
              class="py-2 px-3 hover:text-primary cursor-pointer transition ease-in-out"
            >
              {{ option.label }}
            </div>
          </div>
        </div>
      </div>

      <div
        @click="showOptions = null"
        :class="!showOptions ? 'pointer-events-none' : ''"
        class="bg-transparent fixed inset-0"
      ></div>
    </div>

    <div class="sm:p-4 flex-auto">
      <!-- Chart -->
      <div v-show="args.type.value === 'BOTH'" class="relative h-350-px">
        <canvas id="line-chart-all"></canvas>
      </div>
      <div v-show="args.type.value === 'CREDIT'" class="relative h-350-px">
        <canvas id="line-chart-inflow"></canvas>
      </div>
      <div v-show="args.type.value === 'DEBIT'" class="relative h-350-px">
        <canvas id="line-chart-outflow"></canvas>
      </div>
      <div class="flex justify-end items-center">
        <span class="py-2 px-4 bg-primary text-white font-medium text-sm">{{
          year
        }}</span>
      </div>
    </div>
  </div>
</template>
<script setup>
import Chart from "chart.js";
import { ref, reactive, computed, nextTick, onMounted } from "vue";
import { useToast } from "vue-toastification";
import { helperFunctions } from "@/composable/helperFunctions";
import { useDataStore } from "@/stores/data.js";
import { storeToRefs } from "pinia";

const { formatAmount, calculatePercentage, log, processDate } = helperFunctions;
const store = useDataStore();
const { query, mutate } = store;
const toast = useToast();

const loading = ref(false);
const showOptions = ref(false);

const args = ref({ type: { label: "Inflow & Outflow", value: "BOTH" } });

const options = ref([
  { label: "Inflow/Outflow", value: "BOTH" },
  { label: "Inflow", value: "CREDIT" },
  { label: "Outflow", value: "DEBIT" },
]);

let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

let year = new Date().getFullYear();

onMounted(() => {
  queryTransactions();
});

const companyAdmin = computed(() => store.getCompanyAdmin);
const transactions = computed(() => store.getTransactionHistory);
console.log("Transaction");
log(transactions.value && transactions.value);

const inflows = computed(() => {
  const inflowData = [];

  const obj = {
    January: 0,
    February: 0,
    March: 0,
    April: 0,
    May: 0,
    June: 0,
    July: 0,
    August: 0,
    September: 0,
    October: 0,
    November: 0,
    December: 0,
  };

  if (transactions.value && transactions.value.transactions) {
    transactions.value &&
      transactions.value.transactions.forEach((el) => {
        const tMonth = months[new Date(el.transactionDate).getMonth()];

        console.log("Month", tMonth);
        Object.keys(obj).find((key) => {
          // console.log(key, value);
          if (key === tMonth && el.transactionType === "CREDIT") {
            obj[key] += parseInt(el.amount);
          }
        });
      });
  }

  Object.keys(obj).find((key) => {
    inflowData.push(obj[key]);
  });

  return inflowData;
});
const outflows = computed(() => {
  const outflowData = [];

  const obj = {
    January: 0,
    February: 0,
    March: 0,
    April: 0,
    May: 0,
    June: 0,
    July: 0,
    August: 0,
    September: 0,
    October: 0,
    November: 0,
    December: 0,
  };

  if (transactions.value && transactions.value.transactions) {
    transactions.value &&
      transactions.value.transactions.forEach((el) => {
        const tMonth = months[new Date(el.transactionDate).getMonth()];

        Object.keys(obj).find((key) => {
          // console.log(key, value);
          if (key === tMonth && el.transactionType === "DEBIT") {
            obj[key] += parseInt(el.amount);
          }
        });
      });
  }

  Object.keys(obj).find((key) => {
    outflowData.push(obj[key]);
  });

  return outflowData;
});

const configB = computed(() => {
  return {
    type: "line",
    data: {
      labels: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      datasets: [
        {
          label: "Inflow",
          backgroundColor: "#19A301",
          borderColor: "#19A301",
          data: inflows.value,
          fill: false,
        },
        {
          label: "Outflow",
          fill: false,
          backgroundColor: "#E4572E",
          borderColor: "#E4572E",
          data: outflows.value,
        },
      ],
    },
    options: {
      maintainAspectRatio: false,
      responsive: true,
      title: {
        display: false,
        // text: "Sales Charts",
        // fontColor: "white",
      },
      legend: {
        display: false,
      },
      tooltips: {
        mode: "index",
        intersect: false,
      },
      // hover: {
      //   mode: "nearest",
      //   intersect: true,
      // },
      scales: {
        xAxes: [
          {
            ticks: {
              fontColor: "rgba(33, 37, 41)",
            },
            display: true,
            scaleLabel: {
              display: false,
              labelString: "Month",
              // fontColor: "white",
            },
            gridLines: {
              display: false,
              borderDash: [2],
              borderDashOffset: [2],
              color: "rgba(33, 37, 41, 0.3)",
              zeroLineColor: "rgba(0, 0, 0, 0)",
              zeroLineBorderDash: [2],
              zeroLineBorderDashOffset: [2],
            },
          },
        ],

        yAxes: [
          {
            ticks: {
              // Include a dollar sign in the ticks
              callback: function (value, index, ticks) {
                return `₦${value}M`;
              },
            },
            // display: true,
            // scaleLabel: {
            //   display: false,
            //   labelString: "Value",
            //   // fontColor: "white",
            // },
            // gridLines: {
            //   borderDash: [3],
            //   borderDashOffset: [3],
            //   drawBorder: false,
            //   color: "rgba(33, 37, 41, 0.2)",
            //   zeroLineColor: "rgba(0, 0, 0, 0)",
            //   zeroLineBorderDash: [2],
            //   zeroLineBorderDashOffset: [2],
            // },
          },
        ],
      },
    },
  };
});

const configC = computed(() => {
  return {
    type: "line",
    data: {
      labels: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      datasets: [
        {
          label: "Inflow",
          backgroundColor: "#19A301",
          borderColor: "#19A301",
          data: inflows.value,
          fill: false,
        },
      ],
    },
    options: {
      maintainAspectRatio: false,
      responsive: true,
      title: {
        display: false,
        // text: "Sales Charts",
        // fontColor: "white",
      },
      legend: {
        display: false,
      },
      tooltips: {
        mode: "index",
        intersect: false,
      },
      // hover: {
      //   mode: "nearest",
      //   intersect: true,
      // },
      scales: {
        xAxes: [
          {
            ticks: {
              fontColor: "rgba(33, 37, 41)",
            },
            display: true,
            scaleLabel: {
              display: false,
              labelString: "Month",
              // fontColor: "white",
            },
            gridLines: {
              display: false,
              borderDash: [2],
              borderDashOffset: [2],
              color: "rgba(33, 37, 41, 0.3)",
              zeroLineColor: "rgba(0, 0, 0, 0)",
              zeroLineBorderDash: [2],
              zeroLineBorderDashOffset: [2],
            },
          },
        ],

        yAxes: [
          {
            ticks: {
              // Include a dollar sign in the ticks
              callback: function (value, index, ticks) {
                return `₦${value}M`;
              },
            },
            // display: true,
            // scaleLabel: {
            //   display: false,
            //   labelString: "Value",
            //   // fontColor: "white",
            // },
            // gridLines: {
            //   borderDash: [3],
            //   borderDashOffset: [3],
            //   drawBorder: false,
            //   color: "rgba(33, 37, 41, 0.2)",
            //   zeroLineColor: "rgba(0, 0, 0, 0)",
            //   zeroLineBorderDash: [2],
            //   zeroLineBorderDashOffset: [2],
            // },
          },
        ],
      },
    },
  };
});

const configD = computed(() => {
  return {
    type: "line",
    data: {
      labels: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      datasets: [
        {
          label: "Outflow",
          fill: false,
          backgroundColor: "#E4572E",
          borderColor: "#E4572E",
          data: outflows.value,
        },
      ],
    },
    options: {
      maintainAspectRatio: false,
      responsive: true,
      title: {
        display: false,
        // text: "Sales Charts",
        // fontColor: "white",
      },
      legend: {
        display: false,
      },
      tooltips: {
        mode: "index",
        intersect: false,
      },
      // hover: {
      //   mode: "nearest",
      //   intersect: true,
      // },
      scales: {
        xAxes: [
          {
            ticks: {
              fontColor: "rgba(33, 37, 41)",
            },
            display: true,
            scaleLabel: {
              display: false,
              labelString: "Month",
              // fontColor: "white",
            },
            gridLines: {
              display: false,
              borderDash: [2],
              borderDashOffset: [2],
              color: "rgba(33, 37, 41, 0.3)",
              zeroLineColor: "rgba(0, 0, 0, 0)",
              zeroLineBorderDash: [2],
              zeroLineBorderDashOffset: [2],
            },
          },
        ],

        yAxes: [
          {
            ticks: {
              // Include a dollar sign in the ticks
              callback: function (value, index, ticks) {
                return `₦${value}M`;
              },
            },
            // display: true,
            // scaleLabel: {
            //   display: false,
            //   labelString: "Value",
            //   // fontColor: "white",
            // },
            // gridLines: {
            //   borderDash: [3],
            //   borderDashOffset: [3],
            //   drawBorder: false,
            //   color: "rgba(33, 37, 41, 0.2)",
            //   zeroLineColor: "rgba(0, 0, 0, 0)",
            //   zeroLineBorderDash: [2],
            //   zeroLineBorderDashOffset: [2],
            // },
          },
        ],
      },
    },
  };
});

const runChart = () => {
  nextTick(function () {
    if (Chart) {
      // BOTH
      var ctx = document.getElementById("line-chart-all").getContext("2d");
      window.myLine = new Chart(ctx, configB.value);

      //INFLOW
      var ctx = document.getElementById("line-chart-inflow").getContext("2d");
      window.myLine = new Chart(ctx, configC.value);

      //OUTFLOW
      var ctx = document.getElementById("line-chart-outflow").getContext("2d");
      window.myLine = new Chart(ctx, configD.value);
    }
  });
};

const updateTransactionByType = (option) => {
  runChart();
  args.value.type = option;
  showOptions.value = false;
};

const queryTransactions = async () => {
  loading.value = true;
  try {
    await query({
      endpoint: "ViewInflowOutflowBalance",
      payload: {
        input: {
          endDate: processDate(
            `${new Date().getMonth()}-${new Date().getDate()}-${new Date().getFullYear()}`
          ),
          startDate: "",
        },
      },
      service: "PAYROLL",
      storeKey: "transactionHistory",
    });

    runChart();
    loading.value = false;
  } catch (err) {
    loading.value = false;
    console.log(err);
  }
};
queryTransactions();
</script>

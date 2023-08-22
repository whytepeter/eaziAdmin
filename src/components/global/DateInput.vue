<template>
  <main class="relative">
    <div>
      <input
        :class="
          error
            ? 'focus:border-error border-error'
            : 'focus:border-primary border-dark-200'
        "
        style="height: 48px"
        class="bg-white w-full text-info-700 font-medium text-sm leading-2 focus:outline-none border py-3 px-4 block appearance-none rounded-lg"
        @click="showCalendar = true"
        v-model="selectedDate"
      />
      <!-- @focusout="" -->
      <!-- readonly -->

      <img
        @click="showCalendar = true"
        class="absolute right-4 top-4 w-4"
        src="@/assets/icons/calendar.svg"
        alt=""
      />
    </div>
    <div v-if="error" class="text-xs font-medium text-error -mt-2">
      {{ error }}
    </div>

    <div
      v-if="showCalendar"
      style="min-width: 250px"
      class="absolute top-13 rounded-md right-0 w-full h-auto shadow-md bg-background-50 z-10 overflow-hidden"
    >
      <div class="w-full bg-white py-2 px-4 flex items-center justify-between">
        <i
          @click="previous"
          class="fas fa-angle-left text-dark-700 cursor-pointer p-1 px-2 hover:bg-background-50 rounded-md"
        />
        <div class="flex items-center justify-center gap-4">
          <select
            name=""
            id=""
            class="px-3 pr-8 py-1 rounded-md border border-dark-200 text-sm font-medium uppercase"
            v-model="year"
          >
            <option selected>{{ year }}</option>
            <option :value="year" v-for="year in getYears" :key="year">
              {{ year }}
            </option>
          </select>

          <select
            name=""
            id=""
            class="px-3 pr-8 py-1 rounded-md border border-dark-200 text-sm font-medium uppercase"
            v-model="month"
          >
            <option selected>{{ getMonth.text }}</option>
            <option
              :value="month.number"
              v-for="month in months"
              :key="month.text"
            >
              {{ month.text }}
            </option>
          </select>
        </div>
        <i
          @click="next"
          class="fas fa-angle-right text-dark-700 cursor-pointer p-1 px-2 hover:bg-background-50 rounded-md"
        />
      </div>
      <div class="flex justify-around bg-background-50 px-2 py-4">
        <div
          class="bg-background-50 flex flex-col items-center text-xs"
          v-for="(arr, i) in keys1"
          :key="i"
        >
          <span class="mb-2 text-blue-800 font-medium">{{ arr }}</span>

          <span
            v-for="(item, e) in 5"
            :key="e"
            class="py-1 px-2 rounded-md cursor-pointer border border-transparent hover:border-secondary-pressed"
            @click="chooseDate(formattedWeeks[e][arr])"
            :class="`${emptyStyle(formattedWeeks[e][arr])} ${selectedStyle(
              formattedWeeks[e][arr]
            )} ${todayStyle(formattedWeeks[e][arr])}`"
            >{{
              formatDay(formattedWeeks[e][arr] ? formattedWeeks[e][arr] : "0")
            }}</span
          >
        </div>
      </div>
    </div>

    <div
      @click="showCalendar = false"
      :class="!showCalendar ? 'pointer-events-none' : ''"
      class="bg-transparent fixed inset-0"
    ></div>
  </main>
</template>
<script>
export default {
  inheritAttrs: false,
};
</script>

<script setup>
import { computed, ref, onMounted, onUnmounted } from "vue";

const props = defineProps({
  error: {
    type: [String, Boolean],
    default: null,
  },

  date: {
    type: [String, Boolean, Date],
    default: false,
  },

  min: {
    type: [Boolean, Date],
    default: false,
  },
  max: {
    type: [Boolean, Date],
    default: false,
  },
});

const emit = defineEmits(["date"]);

const keys1 = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const showCalendar = ref(false);

const year = ref();
const month = ref();

const months = [
  { text: "Jan", number: 0 },
  { text: "Feb", number: 1 },
  { text: "Mar", number: 2 },
  { text: "Apr", number: 3 },
  { text: "May", number: 4 },
  { text: "Jun", number: 5 },
  { text: "Jul", number: 6 },
  { text: "Aug", number: 7 },
  { text: "Sept", number: 8 },
  { text: "Oct", number: 9 },
  { text: "Nov", number: 10 },
  { text: "Dec", number: 11 },
];

const selectedDate = ref("");
const selectedDay = ref(new Date(year.value, month.value, 1).getDate());

onMounted(() => {
  let date;

  if (props.min) {
    date = props.min;
  } else if (props.max) {
    date = props.max;
  } else {
    date = new Date();
  }

  console.log(date);

  month.value = date.getMonth();
  year.value = date.getFullYear();
});

const previous = () => {
  if (month.value !== 0) {
    month.value -= 1;
  } else {
    year.value -= 1;
    month.value = 11;
  }

  chooseDate(1);
  showCalendar.value = true;
};
const next = () => {
  if (month.value !== 11) {
    month.value += 1;
  } else {
    year.value += 1;
    month.value = 0;
  }

  chooseDate(1);
  showCalendar.value = true;
};

const getMonth = computed(() => {
  return months[month.value];
});

const getYears = computed(() => {
  const years = [];
  const currentYear = new Date().getFullYear();
  const minArray = [];
  const maxArray = [currentYear];

  const min = currentYear - 20;
  const max = currentYear + 100;

  for (let i = currentYear; i < max; i++) {
    maxArray.push(i);
  }
  for (let i = currentYear; i > min; i--) {
    minArray.push(i);
  }

  minArray.forEach((el) => {
    years.unshift(el);
  });
  maxArray.forEach((el) => {
    years.push(el);
  });

  console.log(years);

  return years;
});

const formatDay = (day) => {
  return day ? day.toString().padStart(2, "0") : "";
};

const days = computed(() => {
  let date = new Date(year.value, month.value, 1);

  let days = [];

  while (date.getMonth() === month.value) {
    const value = new Date(date).toString().split(" ")[0];
    days.push({
      [value]: date.getDate(),
    });

    date.setDate(date.getDate() + 1);
  }

  console.log("Daysss", days);
  return days;
});

const weeks = computed(() => {
  const weeks = [];

  for (let i = 0; i < days.value.length; i += 7) {
    const week = {};
    const arr = days.value.slice(i, i + 7);

    arr.forEach((el) => {
      for (const key of Object.keys(el)) {
        week[key] = el[key];
      }
    });

    // console.log(week);
    weeks.push(week);
  }

  // console.log(weeks);
  return weeks;
});

const formattedWeeks = computed(() => {
  console.log("weeks", weeks.value);
  const arr = [];

  let week1 = {};
  let week2 = {};
  let week3 = {};
  let week4 = {};
  let week5 = {};

  let num = getNum();
  console.log(num);

  weeks.value.forEach((el) => {
    keys1.forEach((arg) => {
      if (el[arg] < num) {
        week1[arg] = el[arg];
      } else if (el[arg] < num + 7) {
        week2[arg] = el[arg];
      } else if (el[arg] < num + 14) {
        week3[arg] = el[arg];
      } else if (el[arg] < num + 21) {
        week4[arg] = el[arg];
      } else if (el[arg] >= num + 21) {
        week5[arg] = el[arg];
      }

      console.log("num", num);
    });
  });

  function getNum() {
    let num;
    weeks.value.forEach((el) => {
      keys1.forEach((arg) => {
        if (el[arg] === 1) {
          let index = keys1.indexOf(arg);
          num = 8 - index;
        }
      });
    });

    return num;
  }

  arr.push(week1);
  arr.push(week2);
  arr.push(week3);
  arr.push(week4);
  arr.push(week5);

  // console.log(arr);
  return arr;
});

console.log(formattedWeeks.value);

const chooseDate = (day) => {
  if (day) {
    selectedDay.value = day;
    const date = new Date(year.value, month.value, day);

    selectedDate.value = date.toLocaleString().split(",")[0];
    console.log(selectedDate.value);
    emit("date", selectedDate.value);

    showCalendar.value = false;
  }
};

const emptyStyle = (arg) => {
  return arg ? "" : "text-background-50";
};
const selectedStyle = (day) => {
  let style;
  if (selectedDay.value === day && day) {
    style = "bg-secondary text-white shadow-md font-medium";
  }
  return style;
};
const todayStyle = (day) => {
  const today = new Date().getDate();
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth();
  let style;

  if (
    selectedDay.value !== day &&
    today === day &&
    currentYear === year.value &&
    currentMonth === month.value
  ) {
    style = "border border-secondary-pressed";
  } else {
    style = "";
  }
  return style;
};
</script>

<style></style>

<template>
  <router-view />
</template>

<style lang="scss">
body {
  font-family: 'Aeonik';
  scroll-behavior: smooth;
}
#app {
  font-family: 'Aeonik';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

/* //Prime Vue Checkbox Styes */

.p-checkbox .p-checkbox-box.p-highlight,
.p-checkbox:not(.p-checkbox-disabled) .p-checkbox-box:hover,
.p-checkbox:not(.p-checkbox-disabled) .p-checkbox-box.p-highlight:hover,
.p-checkbox:not(.p-checkbox-disabled) .p-checkbox-box.p-focus {
  border-color: #11453b !important;
}

.p-checkbox .p-checkbox-box.p-highlight,
.p-checkbox:not(.p-checkbox-disabled) .p-checkbox-box.p-highlight:hover {
  background: #11453b !important;
}

.p-checkbox:not(.p-checkbox-disabled) .p-checkbox-box.p-focus {
  box-shadow: 0 0 0 0.05rem rgb(17, 69, 59) !important;
}

/* //Prime Vue Datatable Sort Icon Styes */
.p-sortable-column.p-highlight[aria-sort='ascending'] .p-sortable-column-icon::before {
  content: '\2191';
  color: #11453b;
}
.p-sortable-column.p-highlight[aria-sort='descending'] .p-sortable-column-icon::before {
  content: '\2193';
  color: #11453b;
}
.p-sortable-column[aria-sort='none'] .p-sortable-column-icon::before {
  content: '\21F5';
  color: grey;
}

.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  /* IE and Edge */
  scrollbar-width: none;
  /* Firefox */
}

.RowCursorPointer {
  tr {
    cursor: pointer;
  }
}
#table-style {
  font-size: 12px;
  max-height: 30rem;
  overflow: auto;
  th {
    border: none;
    background: #f2f1f1;
    color: #515251;
    font-weight: 600;
    text-transform: capitalize;
    border-radius: 0;
    padding-top: 20px;
    padding-bottom: 20px;
    text-transform: uppercase;

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
      border-left: 2px solid #f2f1f1;
    }

    &:last-child {
      border-right: 2px solid #f2f1f1;
    }
  }

  tr {
    transition: background-color 0.3s ease-in-out;
  }

  tr:nth-child(odd) {
    background: #fbfbfb;
  }

  tr:hover {
    // cursor: pointer;
    background-color: #ebfaf6;
  }

  .applicant {
    @apply flex items-center gap-2;
  }

  .applicant-name {
    color: #292a29;
    font-weight: 600;
    font-size: 14px;
    line-height: 16px;
    @apply capitalize;
  }

  .applicant-avatar {
    width: 34px;
    height: 34px;
    border-radius: 99px;
    overflow: hidden;

    @apply flex items-center justify-center text-white font-medium;
  }

  .dropdown {
    @apply w-36 z-20 absolute text-xs right-0 bg-white shadow-md rounded-lg overflow-hidden flex flex-col;

    &-item {
      @apply flex items-center cursor-pointer justify-between gap-4 px-4 p-2 hover:bg-[#f2f1f1];
    }
  }
}
</style>

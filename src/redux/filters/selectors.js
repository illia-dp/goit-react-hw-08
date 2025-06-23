import { createSelector } from "@reduxjs/toolkit";

export const selectContacts = (state) => state.contacts.items;
export const selectNameFilter = (state) => state.filter.name;
export const selectNumberFilter = (state) => state.filter.number;

export const selectFilteredContacts = createSelector(
  [selectNameFilter, selectNumberFilter, selectContacts],
  (nameFilter, numberFilter, contacts) => {
    return contacts.filter((contact) => {
      const matchesName =
        nameFilter === "" ||
        contact.name.toLowerCase().includes(nameFilter.toLowerCase());
      const matchesNumber =
        numberFilter === "" || contact.number.includes(numberFilter);

      return matchesName && matchesNumber;
    });
  }
);

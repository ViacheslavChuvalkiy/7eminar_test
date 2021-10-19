import Vue from "vue";
import Vuex from "vuex";
import { v4 as uuidv4 } from "uuid";

Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    VideoList: [],
    filters: [
      {
        text: "Акція",
        value: "share",
        isChecked: false,
        id: uuidv4(),
      },
      {
        text: "Популярні",
        value: "popular",
        isChecked: false,
        id: uuidv4(),
      },
      {
        text: "Новинки",
        value: "new",
        isChecked: false,
        id: uuidv4(),
      },
    ],
    themes: [
      {
        text: "Всі теми",
        value: "all",
        isChecked: false,
        id: uuidv4(),
      },
      {
        text: "Акцизний податок",
        value: "tax",
        isChecked: false,
        id: uuidv4(),
      },
      {
        text: "Валюта",
        value: "сurrency",
        isChecked: false,
        id: uuidv4(),
      },
      {
        text: "Виробництво і собівартість",
        value: "ownership",
        isChecked: false,
        id: uuidv4(),
      },
      {
        text: "Валюта",
        value: "сurrency",
        isChecked: false,
        id: uuidv4(),
      },
      {
        text: "Відпуски",
        value: "releases",
        isChecked: false,
        id: uuidv4(),
      },
      {
        text: "Відрядження",
        value: "assignment",
        isChecked: false,
        id: uuidv4(),
      },
    ],
    activeFilter: "share",
  },
  getters: {
    listTasks({ tasksList, activeFilter }) {
      switch (activeFilter) {
        case "active":
          tasksList = tasksList.filter((item) => !item.isChecked);
          return tasksList;
        case "completed":
          tasksList = tasksList.filter((item) => item.isChecked);
          return tasksList;
        default:
          return tasksList;
      }
    },
    countTask({ tasksList }) {
      return tasksList.length;
    },
    countActiveTask({ tasksList }) {
      return tasksList.filter((task) => !task.isChecked).length;
    },
    countCompletedTask({ tasksList }) {
      return tasksList.filter((task) => task.isChecked).length;
    },
    filterList({ filters }) {
      return filters;
    },
    getActiveFilter({ activeFilter }) {
      return activeFilter;
    },
  },
  mutations: {
    addNewTask(state, task) {
      if (task) {
        const newTask = {
          text: task,
          isChecked: false,
          id: uuidv4(),
        };
        state.tasksList.push(newTask);
      }
    },
    deleteTask(state, id) {
      state.tasksList = state.tasksList.filter((task) => task.id !== id);
    },
    changeStatusTask(state, id) {
      state.tasksList = state.tasksList.map((task) =>
        task.id === id ? { ...task, isChecked: !task.isChecked } : task
      );
    },
    changeActiveFilter(state, value) {
      state.activeFilter = value;
      state.filters = state.filters.map((filter) =>
        filter.value === value
          ? { ...filter, filter: true }
          : { ...filter, filter: false }
      );
    },
    saveDataLocalStorage({ tasksList }) {
      localStorage.setItem("tasksList", JSON.stringify(tasksList));
    },
    getTasksFromLocalStorage(state) {
      if (localStorage.tasksList) {
        try {
          state.tasksList = JSON.parse(localStorage.getItem("tasksList"));
        } catch (e) {
          localStorage.removeItem("tasksList");
        }
      }
    },
  },
  actions: {},
});
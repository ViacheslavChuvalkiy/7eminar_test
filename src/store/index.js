import Vue from "vue";
import Vuex from "vuex";
import {v4 as uuidv4} from "uuid";

Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    videoList: [
      {
        "id": 24,
        "covers": {
          "main": "https://storage.kadroland.com/records/covers/main/pAyCSdCAmL0ddMpPcWYa3nQgGBeb1eB5YTvWJHXh.jpg"
        },
        "date": "2020-08-31T11:00:00.000000Z",
        "title": "Online-відповіді на запитання<br>із Лідією Басмат",
        "theme": "business_trips",
        "access": true,
        "options": {
          "certificate": null,
          "sale": true,
          "popular": true,
          "link": "/subscribe"
        }
      },
      {
        "id": 25,
        "covers": {
          "main": "https://storage.kadroland.com/records/covers/main/rQDoHeVn25wbpSu0a6HBFZL49bwu07k7sh5xr3Wk.jpg"
        },
        "date": "2020-08-25T08:00:00.000000Z",
        "title": "Кадровий ONLINE форум: про облік без штрафів",
        "theme": "currency",
        "access": true,
        "options": {
          "certificate": null,
          "sale": false,
          "popular": false,
          "link": "/subscribe"
        }
      },
      {
        "id": 17,
        "covers": {
          "main": "https://storage.kadroland.com/records/covers/main/L52E70voCCBo637D5NSLeWo4Vj8cjxAUEyt2kk6H.jpg"
        },
        "date": "2020-08-18T09:00:00.000000Z",
        "title": "KadroLIVE – короткі відеоновини про найголовніше",
        "theme": "production",
        "access": true,
        "options": {
          "certificate": null,
          "sale": false,
          "popular": false,
          "link": "/subscribe"
        }
      },
      {
        "id": 22,
        "covers": {
          "main": "https://storage.kadroland.com/records/covers/main/m3mkBQGYMMrUn7UaqO7t1s9076fdfb0umRiGmoum.jpg"
        },
        "date": "2020-08-12T08:00:00.000000Z",
        "title": "Все про відпустки у 2020 році",
        "theme": "vacation",
        "access": false,
        "options": {
          "certificate": null,
          "sale": false,
          "popular": true,
          "link": "/subscribe"
        }
      },
      {
        "id": 23,
        "covers": {
          "main": "https://storage.kadroland.com/records/covers/main/hU7L2hdn33kos7ZKgkBGAPhmjb2R8Wc3eA4pFDb4.jpg"
        },
        "date": "2020-08-04T08:00:00.000000Z",
        "title": "Робочий час 2020/2021: пільги та гарантії",
        "theme": "excise_tax",
        "access": true,
        "options": {
          "certificate": "certificate-vebinar",
          "sale": false,
          "popular": false,
          "link": "/subscribe"
        }
      },
      {
        "id": 12,
        "covers": {
          "main": "https://storage.kadroland.com/records/covers/main/zhjfTdYrTqy6UXwsa9JpIG9s3DyVNRvhnZi16YdE.jpg"
        },
        "date": "2020-07-30T08:00:00.000000Z",
        "title": "Online-відповіді на запитання<br>із Тетяною Мойсеєнко",
        "theme": "business_trips",
        "access": true,
        "options": {
          "certificate": null,
          "sale": false,
          "popular": true,
          "link": "/subscribe"
        }
      },
      {
        "id": 21,
        "covers": {
          "main": "https://storage.kadroland.com/records/covers/main/Y4ciGNOj95L3Jjyfb2P4n0gOY4x4CVfmt81KIPOM.jpg"
        },
        "date": "2020-07-28T08:00:00.000000Z",
        "title": "КАДРОВИЙ БУМ: про звільнення, трудові книжки, перевірки Держпраці",
        "theme": "business_trips",
        "access": true,
        "options": {
          "certificate": "certificate-masterclas",
          "sale": false,
          "popular": true,
          "link": "/subscribe"
        }
      },
      {
        "id": 19,
        "covers": {
          "main": "https://storage.kadroland.com/records/covers/main/08FmkfbFDwoAMNmNl5fbW2RKqiVr1SSASPBxPdIv.jpg"
        },
        "date": "2020-07-07T08:00:00.000000Z",
        "title": "Призов на строкову службу: як діяти роботодавцю",
        "theme": "currency",
        "access": true,
        "options": {
          "certificate": "certificate-vebinar",
          "sale": false,
          "popular": false,
          "link": "/subscribe"
        }
      },
      {
        "id": 13,
        "covers": {
          "main": "https://storage.kadroland.com/records/covers/main/3feEZhphF5oATLi9xTiZ0GisK7tjxbOzDW0BvrRP.jpg"
        },
        "date": "2020-06-25T08:00:00.000000Z",
        "title": "Великий Кадровий Online-cемінар",
        "theme": "currency",
        "access": false,
        "options": {
          "certificate": "certificate-vebinar",
          "sale": false,
          "popular": false,
          "link": "/subscribe"
        }
      },
      {
        "id": 1,
        "covers": {
          "main": "https://storage.kadroland.com/records/covers/main/K4CI7tX5E6nz0qAM2pw9YtVbkvPdKef3RLRMwqOj.jpg"
        },
        "date": "2020-06-20T09:00:00.000000Z",
        "title": "Військовий облік: як його веде роботодавець",
        "theme": "excise_tax",
        "access": true,
        "options": {
          "certificate": "certificate-course",
          "sale": false,
          "popular": false,
          "link": "/subscribe"
        }
      },
      {
        "id": 4,
        "covers": {
          "main": "https://storage.kadroland.com/records/covers/main/aXBPnrKGBQ52w9o1HedV6oGlW6p4D6BwE1i0lDzX.jpg"
        },
        "date": "2020-06-19T09:00:00.000000Z",
        "title": "Як звільнити працівника",
        "theme": "production",
        "access": true,
        "options": {
          "certificate": "certificate-course",
          "sale": true,
          "popular": true,
          "link": "/subscribe"
        }
      },
      {
        "id": 3,
        "covers": {
          "main": "https://storage.kadroland.com/records/covers/main/PbgRblPaiLaPZoiFnP4zHusbuPVE2OhK3xjqFBGJ.jpg"
        },
        "date": "2020-06-18T09:00:00.000000Z",
        "title": "Планові і позапланові перевірки Держпраці",
        "theme": "currency",
        "access": true,
        "options": {
          "certificate": "certificate-course",
          "sale": true,
          "popular": false,
          "link": "/subscribe"
        }
      },
      {
        "id": 2,
        "covers": {
          "main": "https://storage.kadroland.com/records/covers/main/LhebvJqfI0ikAOEwVuFkPJEsJvqz2B1tNvyqlMmK.jpg"
        },
        "date": "2020-06-17T09:00:00.000000Z",
        "title": "Кадрове діловодство:<br>робота з документами у відділі кадрів",
        "theme": "business_trips",
        "access": true,
        "options": {
          "certificate": "certificate-course",
          "sale": false,
          "popular": false,
          "link": "/subscribe"
        }
      },
      {
        "id": 6,
        "covers": {
          "main": "https://storage.kadroland.com/records/covers/main/ufx7Ydw7S6WlbdzfODQ8T1GQ86fYNoew0wuEezvR.jpg"
        },
        "date": "2020-06-16T09:00:00.000000Z",
        "title": "Працівники-донори: пільги та гарантії",
        "theme": "excise_tax",
        "access": true,
        "options": {
          "certificate": "certificate-vebinar",
          "sale": false,
          "popular": true,
          "link": "/subscribe"
        }
      },
      {
        "id": 7,
        "covers": {
          "main": "https://storage.kadroland.com/records/covers/main/Z2fFdaE5m46w0m3WL0jVBlmWjhDO2I8QPKrsar0L.jpg"
        },
        "date": "2020-06-15T09:00:00.000000Z",
        "title": "Працівники з інвалідністю: пільги та гарантії",
        "theme": "vacation",
        "access": true,
        "options": {
          "certificate": "certificate-vebinar",
          "sale": true,
          "popular": false,
          "link": "/subscribe"
        }
      },
      {
        "id": 9,
        "covers": {
          "main": "https://storage.kadroland.com/records/covers/main/efthrjxi820qJGVHvP4uaGdYybfG2Z4hjX6TiaQC.jpg"
        },
        "date": "2020-06-14T09:00:00.000000Z",
        "title": "Кадри в 1С",
        "theme": "excise_tax",
        "access": false,
        "options": {
          "certificate": "certificate-course",
          "sale": false,
          "popular": false,
          "link": "/subscribe"
        }
      },
      {
        "id": 14,
        "covers": {
          "main": "https://storage.kadroland.com/records/covers/main/S6vv3ujaOuoPv9pqNL41rGDhQbrrDGG71R13HHu1.jpg"
        },
        "date": "2020-06-13T09:00:00.000000Z",
        "title": "Зміна істотних умов праці: як оформити",
        "theme": "production",
        "access": true,
        "options": {
          "certificate": "certificate-vebinar",
          "sale": false,
          "popular": false,
          "link": "/subscribe"
        }
      },
      {
        "id": 15,
        "covers": {
          "main": "https://storage.kadroland.com/records/covers/main/Gq3IoxEb3MKexJ9nlZYS556DURysia9iVufJaB95.jpg"
        },
        "date": "2020-06-12T09:00:00.000000Z",
        "title": "Одинока мати та відпустка «на дітей»",
        "theme": "excise_tax",
        "access": true,
        "options": {
          "certificate": "certificate-vebinar",
          "sale": false,
          "popular": false,
          "link": "/subscribe"
        }
      }
    ],
    filters: [
      {
        text: "Акція",
        value: "sale",
        isChecked: false,
        access: true,
        id: uuidv4(),
      },
      {
        text: "Популярні",
        value: "popular",
        isChecked: true,
        access: true,
        id: uuidv4(),
      },
      {
        text: "Новинки",
        value: "new",
        isChecked: false,
        access: true,
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
        value: "excise_tax",
        isChecked: false,
        id: uuidv4(),
      },
      {
        text: "Валюта",
        value: "currency",
        isChecked: false,
        id: uuidv4(),
      },
      {
        text: "Виробництво і собівартість",
        value: "production",
        isChecked: false,
        id: uuidv4(),
      },
      {
        text: "Відпуски",
        value: "vacation",
        isChecked: false,
        id: uuidv4(),
      },
      {
        text: "Відрядження",
        value: "business_trips",
        isChecked: false,
        id: uuidv4(),
      },
    ],
    userMenu: [
      {
        text: "Увійти",
        value: "myVideo",
        access: true,
        id: uuidv4(),
      },
      {
        text: "Зареєструватись",
        value: "myVideo",
        access: true,
        id: uuidv4(),
      },
      {
        text: "Мої відео",
        value: "myVideo",
        access: false,
        id: uuidv4(),
      },
      {
        text: "Персональні дані",
        value: "myData",
        access: false,
        id: uuidv4(),
      },
      {
        text: "Вихід",
        value: "exit",
        access: false,
        id: uuidv4(),
      },
    ],
    userData: [
      {
        text: "Имя",
        value: "name",
        id: uuidv4(),
      },
      {
        text: "Почта",
        value: "email",
        id: uuidv4(),
      },
      {
        text: "Пароль",
        value: "password",
        id: uuidv4(),
      },
      {
        text: "Удалить пользователя",
        value: "deleteUser",
        id: uuidv4(),
      },
    ],
    activeFilter: "all",
    activeTheme: "all",
    pageView: 'grid',
    auth: true,
    showUserData: false,
    currentPage: 1,
    videoPerPageGrid: 6,
    videoPerPageList: 10,
  },
  getters: {
    videoList({videoList, activeFilter, currentPage, pageView, videoPerPageGrid, videoPerPageList}) {
      if (activeFilter === "popular") {
        videoList = videoList.filter((item) => item.options[0].popular);
      } else if (activeFilter === "sale") {
        videoList = videoList.filter((item) => item.options[0].sale);
      } else if (activeFilter === "new") {
        videoList = videoList.filter((item) => new Date(item.date).getMonth() === 6);
      }
      if (pageView === 'grid') {
        return videoList.slice(currentPage === 1 ? 0 : currentPage * videoPerPageGrid, currentPage * videoPerPageGrid);
      } else {
        return videoList.slice(currentPage === 1 ? 0 : currentPage * videoPerPageList, currentPage * videoPerPageList);
      }
    },
    countTask({tasksList}) {
      return tasksList.length;
    },
    countCompletedTask({tasksList}) {
      return tasksList.filter((task) => task.isChecked).length;
    },
    filterList({filters}) {
      return filters;
    },
    themesList({themes}) {
      return themes;
    },
    getActiveFilter({activeFilter}) {
      return activeFilter;
    },
    getThemeCount: (state) => (themeName = 'all') => {
      if (themeName === 'all') {
        return state.videoList.length;
      }
      return state.videoList.filter(video => video.theme === themeName).length
    },
    getActiveTheme({themes, activeTheme}) {
      let activeThemeArr = themes.filter(theme => theme.value === activeTheme);
      return activeThemeArr.length ? activeThemeArr[0].text : "Всі теми";
    },
    getUserMenu({userMenu, auth}) {
      if (auth) {
        return userMenu.filter(item => !item.access);
      } else {
        return userMenu.filter(item => item.access);
      }
    },
    getUserData({userData}) {
      return userData;
    },
    getPageView({pageView}) {
      return pageView;
    },
    getCurrentPage({currentPage}) {
      return currentPage
    },
    isAuth({auth}) {
      return auth
    },
    showPagination({videoList, pageView, videoPerPageGrid, videoPerPageList}) {
      return Math.trunc(pageView === 'grid' ? videoList.length / videoPerPageGrid : videoList.length / videoPerPageList) > 1;
    },
    getPageCount({videoList, pageView, videoPerPageGrid, videoPerPageList}) {
      return Math.trunc(pageView === 'grid' ? videoList.length / videoPerPageGrid : videoList.length / videoPerPageList);
    },
    paginationList({videoList, pageView, videoPerPageGrid, videoPerPageList, currentPage}) {
      let pages = Math.trunc(pageView === 'grid' ? videoList.length / videoPerPageGrid : videoList.length / videoPerPageList);
      let count = 1;
      let maxLinkPages = 6;
      let paginationList = [];
      while (count <= pages) {
        paginationList.push(
          {
            text: String(count),
            id: count,
            isCurrent: currentPage === count,
            access: true,
          }
        );
        count++
      }
      if (pages > maxLinkPages) {
        let start = currentPage > 3 ? currentPage - 3 : 0;
        let newPaginationList = paginationList.slice(start, maxLinkPages);
        newPaginationList.push({
          text: '...',
          id: 'next',
          isCurrent: false,
          access: false,
        });
        newPaginationList.push(paginationList[paginationList.length - 1]);
        return newPaginationList;
      }
      return paginationList;
    },
  },
  mutations: {
    changeCurrentPage(state, pageNumber) {
      state.currentPage = state.currentPage + (pageNumber);
    },
    changeAuth(state, status) {
      state.auth = status;
    },
    changeActiveFilter(state, value) {
      state.activeFilter = value;
    },
    changesPageView(state, value) {
      state.pageView = value;
    },
    saveDataLocalStorage({pageView}) {
      localStorage.setItem("pageView", JSON.stringify(pageView));
    },
    getPageViewFromLocalStorage(state) {
      if (localStorage.pageView) {
        try {
          state.pageView = JSON.parse(localStorage.getItem("pageView"));
        } catch (e) {
          localStorage.removeItem("pageView");
        }
      }
    },
    chosenCurrentPage(state, number) {
      state.currentPage = number;
    },
  },
  actions: {},
});
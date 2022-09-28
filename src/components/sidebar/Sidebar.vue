<script>
import SidebarLink from './SidebarLink'
import { collapsed, toggleSidebar, sidebarWidth } from './state'

export default {
  props: {},
  components: {
    SidebarLink
  },
  setup() {
    return { collapsed, toggleSidebar, sidebarWidth }
  }
}
</script>

<template>
  <div class="sidebar" :style="{ width: sidebarWidth }">
    <div class="sidebar-menu">
      <button id="btnMenu" @click="toggleSidebar">
        <img src="@/assets/Image/menu.png" />
      </button>

      <div class="search" v-if="!collapsed">
        <input class="searchText" type="text" placeholder="Tìm kiếm nhanh" />
        <img class="loupe" src="@/assets/Image/loupe.png" />
      </div>
    </div>

    <div class="sidebarLink">
      <SidebarLink to="/users/List" icon="users">User</SidebarLink>
      <SidebarLink to="/about" icon="users">About</SidebarLink>
    </div>

    <span
      class="collapse-icon"
      :class="{ 'rotate-180': collapsed }"
      @click="toggleSidebar"
    >
      <i class="fas fa-angle-double-left" />
    </span>
  </div>
</template>

<style>
</style>

<style scoped>
.sidebar {
  color: white;
  background-color: var(--dark);

  float: left;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  bottom: 0;
  padding: 0.5em;

  transition: 0.3s ease;

  display: flex;
  flex-direction: column;
}

.sidebar .sidebar-menu {
  display: flex;
  justify-content: space-around;
  height: 32px;
  padding: 0px;
  margin: 7px 0px;
  align-items: center;
}

.sidebar .sidebar-menu #btnMenu {
  border: 0px;
  color: white;
  background-color: var(--dark);
  margin: 0px;
  float: left;
}

img {
  width: 26px;
  height: 25px;
}

/* .sidebar .sidebar-menu .search .loupe {
  
} */

.sidebar .sidebar-menu .search {
  display: flex;
  margin: 0px;
  justify-content: space-between;
  align-items: center;
  background: white;
  padding: 0px;
  border: 2px solid var(--border);
}

.searchText {
  margin: auto 3px auto 3px;
  padding: 3px;
  height: 20px;
  width: 145px;
  font-family: 'Times New Roman', Times, serif;
  border: 0px;
  font-size: 14px;
}

.searchText:focus {
  outline: none;
}

.sidebar .sidebarLink {
  margin: 15px 0px;
}

.collapse-icon {
  position: absolute;
  bottom: 0;
  padding: 0.75em;

  color: rgba(255, 255, 255, 0.7);

  transition: 0.2s linear;
}

.rotate-180 {
  transform: rotate(180deg);
  transition: 0.2s linear;
}
</style>

<template>
  <div class="wrapper">
    <div class="content-left">
      <Sidebar />
    </div>
    <div class="content-right" :style="{ 'margin-left': sidebarWidth }">
      <div class="content-right-detail">
        <div class="top"></div>
        <div class="main">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from '@/components/sidebar/Sidebar'
import { toggleSidebar, sidebarWidth } from '@/components/sidebar/state'
export default {
  components: {
    Sidebar
  },

  setup() {
    return { toggleSidebar, sidebarWidth }
  },

  run() {
    return { sidebarWidth }
  }
}
</script>

<style>
:root {
  --primary: #4ade80;
  --primary-alt: #22c55e;
  --grey: #64748b;
  --dark: #1e293b;
  --dark-alt: #334155;
  --light: #f1f5f9;
  --border: #bdbdbd;
  --main: #070994;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: 14px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.wrapper {
  display: grid;
  grid-template-columns: auto 1fr;
}

.content-right {
  display: grid;
  grid-template-rows: 1fr;
}

.content-right .content-right-detail {
  display: grid;
  grid-template-rows: 52px 1fr;
}

.content-right .content-right-detail .top {
   border-bottom: 1px solid var(--border);
}

.content-right .content-right-detail .main {
   padding: 20px;
}
</style>

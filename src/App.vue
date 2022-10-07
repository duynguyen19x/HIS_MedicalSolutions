<template>
  <div id="main">
    <div id="left" >
      <Sidebar />
    </div>
    <div id="right" :style="{ 'margin-left': bodyMarginLeft }">
      <div id="banner">
        <input class="text" type="text"  />
      </div>
      <div id="body">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from '@/components/sidebar/Sidebar'
import { toggleSidebar, sidebarWidth, bodyMarginLeft } from '@/components/sidebar/state'
export default {
  components: {
    Sidebar
  },

  setup() {
    return { toggleSidebar, sidebarWidth, bodyMarginLeft }
  },

  run() {
    return { sidebarWidth, bodyMarginLeft }
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

body {
  margin: 0px;
  display: block;
  background: var(--light);
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

.text {
  height: 24px;
  width: auto;
  font-size: 16px;
  /* padding: 0px 3px; */
  /* margin: 3px; */
}

#main #left {
  float: left;
  border: 1px solid var(--border);
}

#main #right {
  margin: 0px;
  margin-left: calc(100+ 50);
}

#main #right #banner {
  display: flex;
  justify-content: space-between;
  height: 40px;
  background: var(--light);
  border-bottom: 1px solid var(--border);
  margin: 0;
  align-items: center;
}

#main #right #body {
  background: var(--light);
}

#main #right #footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background: red;
  color: white;
  text-align: center;
  width: 50px;
}
</style>

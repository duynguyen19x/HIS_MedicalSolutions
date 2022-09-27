<template>
  <div id="main">
    <div id="left" :style="{ width: sidebarWidth }">
      <Sidebar />
    </div>
    <div id="right" :style="{ 'margin-left': sidebarWidth }">
      <div id="banner">
       
      </div>
      <div id="body">
        <router-view />
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
}

#main #left {
  float: left;
  border: 1px solid var(--border);
}

#main #right {
  margin: 0px;
}

#main #right #banner {
  display: flex;
  justify-content: space-between;
  height: 50px;
  background: var(--light);
  border-bottom: 1px solid var(--border);
  margin: 0;
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

/* #nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
} */
</style>

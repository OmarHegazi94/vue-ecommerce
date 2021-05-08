<template>
  <div class="wrapper">
    <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap" rel="stylesheet">

    <admin-Header :HideSidebar="hideSidebar"></admin-Header>

    <!-- Page Content  -->
    <div id="content">
      <!-- Top Nav  -->
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <button
            type="button"
            @click="hideSidebar = !hideSidebar"
            class="btn btn-info"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="#fff"
              class="bi bi-list"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </button>
        </div>
      </nav>
      <!-- main content  -->
      <main class="container-fluid p-5">
          <div class="row">
              <div class="col">
                  <router-view></router-view>
              </div>
          </div>
      </main>
    </div>
  </div>
</template>

<script>
import AdminHeader from "@/components/Admin/Header";
export default {
  data() {
    return {
      hideSidebar: false,
    };
  },
  components: {
    AdminHeader,
  },
};
</script>

<style lang="scss">
/*
    DEMO STYLE
*/

body {
  font-family: 'Lato', sans-serif;
  background: #fafafa;
}

.wrapper {
  display: flex;
  align-items: stretch;
}

/* ---------------------------------------------------
    CONTENT STYLE
----------------------------------------------------- */

#content {
  width: 100%;
  min-height: 100vh;
  transition: all 0.3s;
}
</style>

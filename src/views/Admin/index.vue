<template>
  <div class="wrapper">
    <admin-Header :HideSidebar="hideSidebar"></admin-Header>

    <!-- Page Content  -->
    <main id="content">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <button
            type="button"
            @click="hideSidebar = !hideSidebar"
            class="btn btn-info"
          >
            <i class="fas fa-align-left"></i>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </span>
          </button>
        </div>
      </nav>
    </main>
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

<style>
/*
    DEMO STYLE
*/

@import "https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700";
body {
  font-family: "Poppins", sans-serif;
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

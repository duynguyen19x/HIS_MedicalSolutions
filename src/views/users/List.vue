<template>
  <h1>Danh mục người dùng</h1>

  <div class="table-responsive">
    <table class="table table-user table-bordered table-hover">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Handle</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  setup() {}
}
</script>

<style lang="css" scoped>
.table-responsive {
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
}
.table-user {
  flex: 1;
}
</style>
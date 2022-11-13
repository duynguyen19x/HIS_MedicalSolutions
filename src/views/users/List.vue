<template>
  <div class="content-wrapper">
    <div class="title">
      <h1>Danh mục người dùng</h1>
      <button type="button" class="btn btn-primary btn-add">Thêm mới</button>
    </div>

    <div class="table-responsive">
      <table class="table table-user table-bordered table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Code</th>
            <th scope="col">Name</th>
            <th scope="col">Address</th>
            <th scope="col">GenderId</th>
            <th scope="col">PhoneNumber</th>
            <th scope="col">Password</th>
            <th scope="col">UserType</th>
          </tr>
        </thead>
        <tbody>
          <tr :key="index" v-for="(user, index) in users">
            <th scope="row">{{ user.Id }}</th>
            <td>{{ user.Code }}</td>
            <td>{{ user.Name }}</td>
            <td>{{ user.Address }}</td>
            <td>
              <select disabled v-model="user.GenderId">
                <option value="1">Male</option>
                <option value="2">Female</option>
                <option value="3">Other</option>
              </select>
            </td>
            <td>{{ user.PhoneNumber }}</td>
            <td>{{ user.Password }}</td>
            <td>
              <select disabled v-model="user.UserType">
                <option value="1">Administrator</option>
                <option value="2">User</option>
              </select>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import userApi from '../../api/userApi'

export default {
  setup() {
    const users = ref([])
    const getUsers = async () => {
      var res = await userApi.gets();
      console.log(res)
    }

    getUsers();

    return { users }
  }
}
</script>

<style lang="css" scoped>
.title {
  display: flex;
  height: 52px;
  background: #ffffff;
  justify-content: space-between;
  align-items: center;
}

.title .btn-add {
  padding: 0px;
  height: 32px;
  width: 100px;
}

.content-wrapper {
  display: grid;
  grid-template-rows: 52px 1fr;
  grid-row-gap: 20px;
}
</style>
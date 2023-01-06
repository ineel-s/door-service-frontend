<template>
  <div class="container">
    <div class="d-flex justify-content-center" v-if="loading">
      <div class="spinner-border" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
    <div class="alert alert-danger" role="alert" v-if="error">
      {{ error.message }}
    </div>
    <div v-if="!loading && !error && items.length !== 0">
      <div class="container1 card-wraper">
        <div class="box" v-for="item in items" :key="item.id">
          <div class="image">
            <img src="@/image/Profile.png" alt="profile Image">
          </div>

          <div class="name_job">{{ item.name }}</div>
            <ul class="ulist">
              <li><span class="font-weight-bold">Email :- </span>{{ item.email }}</li>
              <li><span class="font-weight-bold">Ph No :- </span>{{ item.phoneNumber }}</li>
              <li><span class="font-weight-bold">Role :- </span>{{ item.role }}</li>
            </ul>
          
          <div class="btns">
            <router-link :to="{ name: 'single-user', path: '/userdetails', params: { id: item._id } }">
                <button>Veiw Profile</button>
            </router-link>
          </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import { getAllUsers } from '@/services/userdetails';
export default {
  name: 'UserDetails',
  data() {
    return {
      sortBy: 'name',
      sortDesc: false,
      fields: [{ key: 'index', sortable: false },
      { key: 'name', sortable: true },
      { key: 'email', sortable: true },
      { key: 'phoneNumber', sortable: false },
      { key: 'address', sortable: false },
      { key: 'services', sortable: false }
      ],
      items: [],
      loading: this.loading,
      error: this.error,
      userID: this.userID
    }
  },
  async mounted() {
    this.loading = true;
    try {
      const user = await getAllUsers();
      this.items = user.data;
      console.log(this.items);
    } catch (error) {
      this.error = error;
    } finally {
      this.loading = false;
    }
  },
  methods: {
    profile(id) {
      return id;
    }
  }
}
</script>

<style scoped>
* {
  margin: auto;
  padding: 0px;
  box-sizing: border-box;
}

.container1 {
  max-width: 1100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 20px;
}

.container1 .box {
  width: calc(33%-10px);
  background: linear-gradient(to right bottom, rgb(101, 159, 246), rgba(253, 160, 133, 1));
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 30px;
  border-radius: 10px;
  margin-bottom: 2em;
}

.container1 .box .image {
  margin: 10px 0;
  height: 100px;
  width: 100px;
  background: #6e4df45e;
  padding: 3px;
  border-radius: 50%;
}

.box .image img {
  height: 100%;
  width: 100%;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #fff;
}

.box .name_job {
  margin: 10px 0 3px 0;
  /* color: #8e44ad; */
  color: aliceblue;
  font-size: 18px;
  font-weight: 600;
}

.btns {
  margin-top: 20px;
  margin-bottom: 5px;
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.btns button {
  width: 100%;
  padding: 9px 0px;
  outline: none;
  border: 2px solid #460063;
  border-radius: 5px;
  cursor: pointer;
  font-size: 18px;
  font-weight: 400;
  /* color: #8e44ad; */
  color: #460063;
  transition: all 0.3s linear;
}

.btns button {
  background: none;
  margin-right: 5px;
}

.btns button:hover {
  background: #460063;
  color: #fff;
}

.btns button:hover {
  color: #fff;
}

.ulist {

  list-style-type: none;
}

@media (max-width:1045px) {
  .container1 .box {
    width: calc(50% - 10px);
    margin-bottom: 20px;
  }
}

@media (max-width:710px) {
  .container1 .box {
    width: 100%;
  }
}
</style>
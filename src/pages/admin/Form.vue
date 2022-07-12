<template>
<div>
<router-link :to="{ name: 'FoCreate'}" class="btn">Register User</router-link>
  <table>
    <thead>
      <tr>
        <th>#id</th>
        <th>Name</th>
        <th>Password</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="product in Form" :key="product.id">
        <td>{{product.id}}</td>
        <td>{{product.title}}</td>
        <!-- <td><img :src="product.image"  width="90" /></td> -->
        <td>{{product.password}}</td>
        <td>
          <router-link :to="{ name: 'FoEdit', params: { id: product.id }}" class="btn">Edit</router-link>
          <button @click="del(product.id)" class="btn btn-del">Delete</button>
        </td>
      </tr>
    </tbody>
  </table>
  </div>
</template>

<script>
import {onMounted, ref} from 'vue';
export default {
  name: 'Form',
  setup() {
    const Form = ref([]);
    onMounted( async () => {
    //   const res = await fetch('http://localhost:3000/Form');
     const res = await fetch('http://localhost:8000/test');
      Form.value = await res.json();
    })
    const del = async (id) => {
    //   await fetch(`http://localhost:3000/Form/${id}`, {
          await fetch(`http://localhost:8000/test/${id}`, {
        method: 'DELETE'
      })
      Form.value = Form.value.filter(p => p.id !== id);
    }
    return { Form, del }
  }
}
</script>
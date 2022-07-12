<template>
  <form @submit.prevent="submit" >
    <label>Name</label>
    <input type="text"  v-model="title"                
    />
    <label>Password</label>
    <input type="password" v-model="password" 
    />
    <button>Save</button>
</form>
</template>

<script>
import { onMounted, ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
export default {
    name: "FoEdit",
    props: ['id'],
    setup() {
       const title = ref(''); 
       const password = ref('');
       const router = useRouter();
       const route = useRoute()
       onMounted(async() => {
        //    const res = await fetch(`http://localhost:3000/Form/${route.params.id}`);
        const res = await fetch(`http://localhost:8000/test/${route.params.id}`);
           const product = await res.json();
           title.value = product.title;
           password.value = product.password;
       })
       const submit = async () => {
        //    await fetch(`http://localhost:3000/Form/${route.params.id}`, {
             await fetch(`http://localhost:8000/test/${route.params.id}`, {
               method: 'PUT',
               headers: {"Content-type": "application/json"},
               body: JSON.stringify({ 
                   title: title.value,
                   password: password.value
                })
           });
           await router.push('/admin/Form');
       }
       
       return {title, password, submit}
    }
    
}
</script>
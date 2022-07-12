<template>
  <form @submit.prevent="submit" >
    <label>Name</label>
    <input type="text" placeholder="Enter Your Name" v-model="title"                
    />
    <label>Password</label>
    <input type="password" placeholder="Enter Your Password" v-model="password" 
    />
    <button>Submit</button>
</form>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
export default {
    name: "FoCreate",
    setup() {
       const title = ref(''); 
       const password = ref('');
       const router = useRouter();
       const submit = async () => {
        //    await fetch('http://localhost:3000/Form', {
            await fetch('http://localhost:8000/test', {
               method: 'POST',
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

<style>
</style>
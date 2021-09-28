<template>
    <div class="form-group" id="app">
        
        <form @submit="login">
           
     <!-- Name --> 
     <div class="form-group">      
    <label>Name <input type="text" name="enter name" id="" v-bind="name" v-model="name"></label><br><br>
     </div>
    <!-- Email        -->
    <div class="form-group">
    <label>Email <input type="email" name="enter email" id="" v-bind="email" v-model="email" ></label><br><br>
    </div>

    <!-- phone        -->
    <div class="form-group">
    <label>Phone <input type="number" name="enter phone" id="" v-bind="phone" v-model="phone" ></label><br><br>
    </div>

    <!-- Address -->
    <div class="form-group">
    <label>Addresss<textarea v-bind="addresss" placeholder="Address" v-model="addresss"></textarea></label><br><br>
    </div>
    <!-- City -->
    <div class="form-group">
    <label>City</label>
    <select v-model="city">
  <option disabled value="">Please select one</option>
  <option>Ahemdabad</option>
  <option>Rajkot</option>
  <option>Vadodara</option>
    </select>
    </div>
      <br>
      <!-- Gender        -->
      <div class="form-group">
    <label>Gender:  </label>
    
    <input type="radio" id="Male" value="Male" v-model="gender">
    <label for="Male">Male</label>
    <input type="radio" id="Female" value="Female" v-model="gender">
    <label for="Female">Female</label>
      </div>
    <br>


    <!-- Hoby -->
  <label> Hobby:  </label>
  <input  type="checkbox" value="Learning" v-model="hobby">
  <label for="Learning" >Learning</label>
  <input  type="checkbox" value="Singing" v-model="hobby">
  <label for="Singing">Singing</label>



    <button class="btn btn-primary"
        @click.prevent="submitted">Submit
</button> 

        </form>
<p v-if="error.length">
            <b>Please Correct the  Following</b>
         
        </p>
        <br>
        <br>
        <br>

    <table border="1px">
        <thead>
          <tr>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Phone</th>
       <th scope="col">Address</th>
      <th scope="col">City</th>
      <th scope="col">Gender</th>
      <th scope="col">Hobby</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      
      <td>{{name}}</td>
      <td>{{email}}</td>
      <td>{{phone}}</td>
      <td>{{addresss}}</td>
        <td>{{city}}</td>
        <td>{{gender}}</td>
        <td>{{hobby[0]}} , {{hobby[1]}}</td>
    </tr>
  </tbody>
    </table>
        

        
    

    </div>


    
</template>

<script>
export default {

    name:'Login',
    data()
    {
        return{
            error:[],
            name:'',
            addresss:'',
            email:'',
            phone:'',
            address:'',
            city:'',
            gender:'',
            hobby:[],
        }
    },
    
    methods:{
        login(e)
        {
            if(this.name && this.email && this.addresss)
            {
                console.log("Login Funcion Called")
            }
            this.error=[];
            if(!this.name)
            {
                this.error.push("name is required")
            }
           if(!this.email)
            {
                this.error.push("email is required")
            }
            if(!this.addresss)
            {
                this.error.push("addresss is required")
            }
            console.warn("error",this.error)
            e.preventDefault()

            console.log("Login Function Called")
            e.preventDefault()
        },

        
    }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.vue-bg {
  background: #bce5d0;
}
</style>
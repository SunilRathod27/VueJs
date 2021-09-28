<template>

<form action="">
<div class="card" v-if="isSubmitted">
    <div class="card-body">
        <h4 class="card-title">Form Data</h4>

        <p>Mail: <b>{{ userData.email }}</b></p>
        <p>Password: <b>{{ userData.password }}</b></p>
        <p>Satisfaction: <b>{{ userData.satisfaction }}</b></p>
        <p style="white-space: pre">Message: <b>{{ message }}</b></p>
        <p>Checkbox Options:</p>
        <!-- <ul>
            <li v-for="item in checkboxOptions"><b>{{ item }}</b></li>
        </ul> -->
        <p>Gender: <b>{{ radioBoxOption }}</b></p>
        <p>Priority: <b>{{ selectedPriority }}</b></p>
        <p>Switched: <b>{{ customSwitch }}</b></p>
    </div>
</div>
</form>
</template>

<script>

    export default {
        data() {
            return {
                userData: {
                    email: '',
                    password: '',
                    satisfaction: 10
                },
                message: 'Describe your review...',
                checkboxOptions: [],
                radioBoxOption: 'Male',
                selectedPriority: 'High',
                priorities: ['High', 'Medium', 'Low'],
                customSwitch: true,
                isSubmitted: false
            }
        },
        methods: {
            submitted() {
                this.isSubmitted = true;
            }
        },
       components: {

      
  }
    }
</script>
 
 
 
 
 
 

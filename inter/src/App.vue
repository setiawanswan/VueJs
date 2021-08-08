<template>
    <div>
        <app-header></app-header>
        <div class="container">
            <Profile 
                :userName="name"
                :userLastname="lastname"
                :userAge="age"
                :userParents="parents"
                @updateName="name = $event"
                :updateLastname="updateLastname"
            />
            <Friends />
        </div>
        <Footer />
    </div>
</template>
<script>
import Footer from './Components/Footer/Footer.vue';
import Profile from './Components/User/Profile.vue';
import Friends from './Components/User/Friends.vue';

    export default {
        data(){
            return {
                name:'Francis',
                lastname:'Jones',
                age:23,
                parents:{
                    mother:'Martha',
                    father:'Mario'
                }
            }
        },
        methods:{
            updateLastname(value){
                this.lastname = value
            }
        },
        components:{
            Footer,
            Profile,
            Friends
        }
    }

</script>
<style>
    body {
        padding: 0;
        margin: 0;
        font-family: 'Roboto', sans-serif;
    }
    .container {
        min-height: 84vh;
        box-sizing: border-box;
        padding: 20px;
    }
</style>
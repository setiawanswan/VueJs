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
            <Habilities>
                <ul slot="main_hab">
                    <li v-for="(hab, index) in habilities" :key="index">
                        {{ hab }}
                    </li>
                </ul>
                <div slot="notes">
                    <p>The user also know PHP</p>
                </div>
                <div>
                    <a href="#">See more about this user</a>
                </div>
                <div :slot="slotName">
                    Other content
                </div>
            </Habilities>
        </div>
        <Footer />
    </div>
</template>
<script>
import Footer from './Components/Footer/Footer.vue';
import Profile from './Components/User/Profile.vue';
import Friends from './Components/User/Friends.vue';
import Habilities from './Components/User/Habilities.vue';

    export default {
        data(){
            return {
                name:'Francis',
                lastname:'Jones',
                age:23,
                parents:{
                    mother:'Martha',
                    father:'Mario'
                },
                habilities: ['JS', 'CSS', 'HTML'],
                slotName:''
            }
        },
        methods:{
            updateLastname(value){
                this.lastname = value
            }
        },
        created() {
            setTimeout(() => {
                this.slotName = 'other'
            },3000)
        },
        components:{
            Footer,
            Profile,
            Friends,
            Habilities
        }
    }

</script>
<style scoped>
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
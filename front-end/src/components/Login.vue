 <template>
    <div class="container ">
        <div class="form-group">

        
        <form @submit.prevent="login">
            <h2 class="mb-3">Login</h2>
            <div class="input">
                <label for="email">Email address</label>
                <input class="form-control" type="text" name="email" placeholder="email@adress.com" />
            </div>
            <div class="input">
                <label for="password">Password</label>
                <input class="form-control" type="password" name="password" placeholder="password123" />
            </div>
            <div class="alternative-option mt-4">
                You don't have an account? <span @click="moveToRegister">Register</span>
            </div>
            <button type="submit" class="mt-4 btn-pers" id="login_button">
                Login
            </button>
        </form>
    </div>
    </div>
</template>
<!-- 
<script>
import UserService from "@/services/user.service";
export default {
    data() {
        return {
            username: "",
            pass: "",
        };
    },
    methods: {
        login(submitEvent) {
            this.username = submitEvent.target.elements.username.value;
            this.pass = submitEvent.target.elements.pass.value;
            const auth = getAll();
            signInWithEmailAndPassword(auth, this.username, this.pass)
                .then(() => {
                    this.$router.push("#");
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorCode);
                    console.log(errorMessage);
                    let alert_1 = document.querySelector("#alert_1");
                    alert_1.classList.remove("d-none");
                    alert_1.innerHTML = errorMessage;
                    console.log(alert_1);
                });
        },
        moveToRegister() {
            this.$router.push("/register");
        },
    },
};
</script> -->
<!-- <template>
    <div id="login">
        <h1>Login</h1>
        <input type="email" name="username" v-model="input.username" placeholder="Username" />
        <input type="password" name="password" v-model="input.password" placeholder="Password" />
        <button type="button" v-on:click="login()">Login</button>
    </div>
</template> -->

<script>
import UserService from "@/services/user.service";
import axios from 'axios'
export default {
    name: 'Login',
    data() {
        return {
            user:{},
            input: {
                username: "",
                password: ""
            }
        }
    },
    
    methods: {
    
        async login() {
            try {
                this.user = await UserService.get(this.id);
                alert(this.user.username).data;
                if (this.input.username != "" && this.input.password != "") {
                    if (this.input.username == "letien" && this.input.password == "letien") {
                        this.$router.push({ name: "home" });
                        
                    } else {
                        alert("The username and / or password is incorrect");
                    }
                } else {
                    alert("A username and password must be present");
                }
            
            } catch (error) {
                    console.log(error);
            }
        }
    }
}
</script>

<style scoped>
#login {
    width: 500px;
    border: 1px solid #CCCCCC;
    background-color: #FFFFFF;
    margin: auto;
    margin-top: 200px;
    padding: 20px;
}
</style>
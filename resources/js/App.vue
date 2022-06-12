<template>

    <div class="container">
        <div class="row justify-content-center">
            <div class="col-sm-4 mt-5">
                <form @submit.prevent="login">
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input type="email" class="form-control" v-model="form.email" />
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input type="password" class="form-control" v-model="form.password" />
                    </div>

                    <button type="submit" class="btn btn-dark">Login</button>
                </form>
            </div>
        </div>
    </div>

</template>


<script>

    import {reactive} from "vue";

    export default {

        setup() {

            const form = reactive({
                email: '',
                password: ''
            });

            const login = async() => {
                // console.log(form);
            }


            return {
                form,
                login
            }

        }

    }

</script>

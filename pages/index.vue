<script setup>
const { data } = await useFetch('/api/products')
</script>

<template>
    <div class="container">
        <div class="row">
            <div v-for="(product, index) in data" :key="'product-' + index" class="col-md-4">
                <div class="card mb-3">
                    <img :src="product.photoURL" class="card-img-top">
                    <div class="card-body">
                        <h5 class="card-title">
                            {{ product.name }}
                        </h5>
                        <p class="card-text">
                            {{ product.description }}
                        </p>
                        <div class="d-grid">
                            <button @click="addToCart(product)" class="btn btn-outline-primary">
                                Add to cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <ShoppingCart v-model="shoppingCart"/>
    </div>
</template>

<script>
export default {
    data() {
        return {
            shoppingCart: []
        }
    },
    mounted() {
        this.shoppingCart = JSON.parse(localStorage.getItem('shoppingCart') || "[]")    
    },
    watch: {
        shoppingCart: {
            handler(newValue) {
                localStorage.setItem('shoppingCart', JSON.stringify(newValue));
            }, deep: true
        }
    },
    methods: {
        addToCart(product) {
            let exists = false;
            
            for (const cartItem of this.shoppingCart) {
                if (cartItem.uuid === product.uuid) {
                    cartItem.amount = cartItem.amount + 1;
                    exists = true;
                    break;
                }
            }

            if (!exists) {
                this.shoppingCart.push({
                    ...product,
                    amount: 1,
                })
            }
        },
    }
}
</script>
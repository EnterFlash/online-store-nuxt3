<template>
  <div>
    <div
      class="offcanvas offcanvas-end"
      tabindex="-1"
      id="offcanvasRight"
      aria-labelledby="offcanvasRightLabel"
    >
      <div class="offcanvas-header">
        <h5 id="offcanvasRightLabel">Shopping cart - $ {{ totalSum }}</h5>
        <button
          type="button"
          class="btn-close text-reset"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div class="offcanvas-body">

        <div v-for="(product, index) in modelValue" :key="'cart-product-' + index" class="card mb-3">
          <div class="row">
            <div class="col-md-4">
              <img :src="product.photoURL" class="img-fluid rounded-start">
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">{{ product.name }}</h5>
                <p class="card-text">{{ product.description }}</p>
                <p class="card-text">{{ product.price }} x $ {{ product.amount }}</p>
                <div class="d-grid">
                  <button @click="removeFromCart(product)" class="btn btn-outline-secondary">
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['modelValue'],
  computed: {
    totalSum() {
      let sum = 0;

      for (const product of this.modelValue) {
        sum += product.price * product.amount;
      }
      
      return sum;
    }
  },
  methods: {
    removeFromCart(product) {
      const shoppingCart = this.modelValue
      const productIndex = shoppingCart.findIndex(item => item.uuid === product.uuid)
      shoppingCart[productIndex].amount -= 1
      
      if (shoppingCart[productIndex].amount < 1) {
        shoppingCart.splice(productIndex, 1);
      }

      this.$emit('update:modelValue', shoppingCart)
    }
  }
}
</script>
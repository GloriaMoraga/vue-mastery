Vue.component('product-details',{
  props: {
    details:{
      type:Array,
      required: true
    }
  },
    template:`
    <ul>
    <li v-for="detail in details">{{ detail }}</li>
    </ul>

    `

})


Vue.component('product', {
  props: {
    premium:{
      type:Boolean,
      required: true
    }
  },
  template: `
  <div class="product">
  <div class="product-image">
      <img :src="image" />
  </div>
  <div class="product-info">
      <h1>{{ title }}</h1>
      <p>{{ sale }}</p>
      <p v-if="inStock">In stock</p>
      <p v-else
         :class="{ outOfStock : !inStock }"
      >Out of stock</p>
      <p>shipping: {{ shipping }}</p>
      <a :href="link">link</a>

      <product-details :details="details"></product-details>

      <ul>
          <li v-for="size in sizes">{{ size }}</li>
      </ul>
      <div class="color-box"
          v-for="(variant, index) in variants" 
          :key="variant.variantId"
          :style="{backgroundColor: variant.variantColor}"
          @mouseover="updateProduct(index)"
      >
         
      </div>
      <button
       v-on:click="addToCart"
       :disabled="!inStock"
       :class="{ disabledButton: !inStock }"
       >add to cart
      </button>
      <div class="cart">
          <p> cart {{cart}}</p>

      </div>

      <button v-on:click="removeToCart"> Remove cart</button>
      
  </div>
</div>
  
  `,
  data (){
    return {
       brand:'vue mastery',
    product: 'socks',
    selectedVariant: 0,
    link:'http://www.google.cl',
     details: ['80% cotton', '20% polyester', 'Gender-neutral'],
    variants: [
      {
        variantId: 2234,
        variantColor: 'green' ,
        variantImage:  './assets/vmSocks-green-onWhite.jpg',
        variantQuantity: 10
      },
      {
        variantId: 2235,
        variantColor: 'blue',
        variantImage:  './assets/vmSocks-blue-onWhite.jpg',
        variantQuantity: 0
      }
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
    cart :0
    }
},
methods:{
    addToCart(){
        this.cart +=1

    },
    updateProduct(index){
        this.selectedVariant = index
      
    },

    removeToCart(){
        this.cart -= 1
    }

},
computed:{
    title(){
      return this.brand + ' ' + this.product
    },

    image(){
      return this.variants[this.selectedVariant].variantImage

    },
    inStock(){
      return this.variants[this.selectedVariant].variantQuantity
    },
    sale(){
      if(this.inStock){
        return  ' On SALE!!'
      }
      
        return  ' out of sale'
    },
    shipping(){
      if(this.premium){
        return "Free"
      }
      return "2,99"
    }
}


})


var app = new Vue ({
    el: '#app',
    data : {
      premium: true
        

    }
    




})
var app = new Vue ({
    el: '#app',
    data : {
        product: 'socks',
        image: './assets/vmSocks-green-onWhite.jpg',
        link:'http://www.google.cl',
        onSale: true,
        details: ['80% cotton', '20% polyester', 'Gender-neutral'],
        variants: [
          {
            variantId: 2234,
            variantColor: 'green'    
          },
          {
            variantId: 2235,
            variantColor: 'blue'
          }
        ],
        sizes: ['S', 'M', 'L', 'XL', 'XXL', 'XXXL']
    }




})
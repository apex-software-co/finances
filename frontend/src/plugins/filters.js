
import Vue from 'vue'

  Vue.use({
    install(Vue) {
      Vue.prototype.$filters = {
        
        money(value) {
          if (!value) {
            var value = 0
          }

          var parsedValue = parseFloat(value)
          var value = parsedValue.toFixed(2).split('.');

          value[0] = value[0].split(/(?=(?:...)*$)/).join('.');

          return value.join(',')
        }
      }

    }
  })


// import Vue from 'vue'


// import VueMask from 'v-mask'
// Vue.use(VueMask);

// Vue.filter('ucfirst', function (value) {
//   if (value) {

//     var splitStr = value.toLowerCase().split(' ');
//     for (var i = 0; i < splitStr.length; i++) {

//       splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
//     }

//     return splitStr.join(' ');
//   }
// })




// Vue.filter('cnpj', function (value) {

//   if (value) {

//     return value.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/g, "\$1.\$2.\$3\/\$4\-\$5")

//   }

//   return ''
// })

// Vue.filter('cpf', function (value) {

//   if (value) {
//     return value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, "\$1.\$2.\$3-\$4")
//   }

//   return ''
// })

// Vue.filter('rg', function (value) {

//   if (value) {
//     return value.replace(/(\d{2})(\d{3})(\d{3})(\d{1})/g, "\$1.\$2.\$3-\$4")
//   }

//   return ''
// })

// Vue.filter('cep', function (value) {

//   if (value) {
//     return value.replace(/(\d{5})(\d{3})/g, "\$1-\$2")
//   }
//   return ''
// })

// Vue.filter('phone', function (value) {

//   if (value) {

//     if (value.length == 11) {
//       return value.replace(/(\d{2})(\d{1})(\d{4})(\d{4})/g, "(\$1) \$2 \$3-\$4")
//     }
//     if (value.length == 10) {
//       return value.replace(/(\d{2})(\d{4})(\d{4})/g, "(\$1) \$2-\$3")
//     }

//     return ''

//   }

//   return null
// })



// Vue.filter('moneyBr', function (value) {
//   if (!value) {
//     var value = 0
//   }

//   var parsedValue = parseFloat(value)
//   var value = parsedValue.toFixed(2).split('.');

//   value[0] = value[0].split(/(?=(?:...)*$)/).join('.');

//   return 'R$ ' + value.join(',')
//   // return value.join(',');
// })
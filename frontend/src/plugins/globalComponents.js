
import Vue from 'vue'

Vue.component('app-text-field', require('@/components/app/ui/AppTextField.vue').default)
Vue.component('app-number-field', require('@/components/app/ui/AppNumberField.vue').default)
Vue.component('app-date-field', require('@/components/app/ui/AppDateField.vue').default)
Vue.component('app-code-field', require('@/components/app/ui/AppCodeField.vue').default)
Vue.component('app-text-search-field', require('@/components/app/ui/AppTextSearchField.vue').default)
Vue.component('app-select', require('@/components/app/ui/AppSelect.vue').default)

Vue.component('status-chip', require('@/components/app/sections/StatusChip.vue').default)
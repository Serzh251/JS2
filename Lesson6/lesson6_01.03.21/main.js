// const SomeComp = {
//     data() {
//         return {
//             title: 'Some component'
//         }
//     },
//     template: `<h3> {{ title }} </h3>`
// };
//
//
// const El = {
//     components: {
//         SomeComp,
//     },
//    data() {
//        return {
//            title: 'Hello World'
//        }
//    },
//    template: `<h3> {{ title }} <SomeComp></SomeComp></h3>`
// };
//
// const app = Vue.createApp({
//     components: {
//       El,
//       'some-comp': SomeComp
//     },
//     data() {
//         return {
//             title: 'Some title',
//             counter: 0,
//             someArr: [1,2,3],
//             tabs: ['one', 'two', 'three'],
//             active: 'one'
//         }
//     },
//     computed: {
//         currentTabName() {
//             return `comp-${this.active}`
//         }
//     },
//     provide() {
//         return {
//             API: 'gthergerf',
//             // API: Vue.computed(() => this.API),
//             someMethod: this.increase
//         }
//     },
//     methods: {
//         increase(val) {
//             console.log(this);
//             console.log('parent');
//             // this.counter += val;
//         }
//     },
// });

// Global

// app.component('comp-one', {
//     inject: ['API'],
//     template: `<div><p>Component 1 - {{ API }} <input type="text"></p></div>`
// });
//
// app.component('comp-two', {
//     template: `<div><p>Component 2</p></div>`
// });
//
// app.component('comp-three', {
//     inject: ['API', 'someMethod'],
//     template: `<p @click="someMethod">Component 3 - {{ API }}</p>`
// });

// app.component('comp-one', {
//     inject: ['API'],
//     template: `<div><p>Component 1 - {{ API }}</p> <comp-two></comp-two></div>`
// });
//
// app.component('comp-two', {
//     template: `<div><p>Component 2</p> <comp-three></comp-three></div>`
// });
//
// app.component('comp-three', {
//     inject: ['API', 'someMethod'],
//     template: `<p @click="someMethod">Component 3 - {{ API }}</p>`
// });

// app.component('sibling', {
//    methods: {
//        siblingMethod() {
//            console.log('sibling');
//        }
//    },
//     template: `<div>
//                 <some-comp></some-comp>
//                     </div>`
// });
//
// app.component('some-comp', {
//     props: ['text'],
//     data() {
//         return {
//             title: `Hello World!`
//         }
//     },
//     methods: {
//         increase(val) {
//             this.$root.$refs.refSibling.siblingMethod();
//             console.log(this);
//             console.log('component')
//             // this.counter += val;
//         }
//     },
//     template: `<div>
//                     <h3>{{ text }}</h3>
//                     <slot>
//                         <button @click="increase">Default button</button>
//                     </slot>
//                     <p>{{ title }}</p>
//                 </div>`
// });
//
// app.component('counter', {
//     props: ['count'],
//     emits: ['increase'],
//     data() {
//         return {
//             counter: 0
//         }
//     },
//     methods: {
//         increase() {
//             this.count++;
//         }
//     },
//     template: `<div>
//                     <h3>{{ count }}</h3>
//                     <button @click="$emit('increase', 2)">Increase</button>
//                 </div>`
// });







app.mount('#app');
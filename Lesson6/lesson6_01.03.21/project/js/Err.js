export const Err = {
    data() {
        return {
            errFlag: ''
        }
    },
    // props: ['errFlag'],
    methods: {
        // errorFlagTrueFunc() {
        //     ErrFlag = true
        // }
        errFlag(text) {
            this.errFlag = text
        }

    },
    template: `
        <h1 class="error" v-if="errFlag">Ошибка запроса к серверу</h1>
   `
};
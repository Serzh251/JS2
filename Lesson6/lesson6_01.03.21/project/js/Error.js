export const Error = {
    data() {
        return {
            text: ''
        }
    },
    methods: {
        setText(val) {
            this.text = val;
        }
    },
    template: `
        <div class="error" v-if="text">
            Ошибка получения данных
            <button @click="setText('')">x</button>
        </div>
    `
};
// <h1 class="error" v-if="errFlag">Ошибка получения данных</h1>
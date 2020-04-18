export const tokyoNumber = {
    data() {
        return {
            tmpData: "hello",
            title: "Welcome to Tokyo",
            subTitle: "Tokyo is a great city",
            number: 0
        };
    },
    //ローカルでのフィルターの定義方法※valueは必須
    //thisは使えないので注意
    // フィルターは再描画を頻発させてしまうリスクがあるためなるべくcomputedを使う方が良い
    filters: {
        lowerCase(value){
            return value.toLowerCase();
        }
    },
    created() {
        console.log("created in Mixin")
    }
};
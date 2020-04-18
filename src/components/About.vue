<template>
    <div>
        <p>About</p>
        <input>
    </div>
</template>

<script>
export default {
    destroyed() {
        console.log("destroyed");
    },
    // destroyedを発火させ無くした場合こちらに動作を書く
    deactivated() {
        console.log("deactivated");
    },
    activated () {
        console.log("activated");
    }
}
</script>
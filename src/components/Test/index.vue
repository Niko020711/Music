<template>
  <div class="container">
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
    <div>6</div>
    <div>7</div>
    <div>8</div>
    <div>9</div>
    <div>10</div>
  </div>
</template>

<script>
export default {
    name: 'test'
}
</script>

<style lang="less" scoped>
    .container{
      margin: 20px;
        display: grid;
        margin: 40px;
        grid-template-columns:  100px 200px 300px;
        // grid-auto-columns: 400px;
        grid-row-gap: 20px;
        grid-column-gap: 10px;
        div{
            text-align: center;
            padding: 10px;
            color: aquamarine;
            border: 1px solid red;
            background-color: cadetblue;
            border-radius: 5px;
        }
    }
</style>
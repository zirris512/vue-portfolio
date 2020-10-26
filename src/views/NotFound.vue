<template>
   <div>
      <h1>404 - Page Not Found</h1>
      <h3>Redirecting to Home...</h3>
   </div>
</template>

<script>
   export default {
      created() {
         setTimeout(() => {
            this.$router.replace("/about");
         }, 3000);
      },
   };
</script>
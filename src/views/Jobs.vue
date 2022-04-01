<template>
  <div>
    <button @click="applyNow">Apply</button>
  </div>
</template>
<script>

export default {

  methods: {
    applyNow() {
      window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLSehwXis4Zs8w3zZO-bcvHo3Sn4MVcVrcWymcIYFN8TNoZYZbA/viewform?usp=sf_link";
    }
  },

};
</script>
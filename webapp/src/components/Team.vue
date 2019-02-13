<template>
  <div id="team">
    <b-row>
      <b-col class="member">
        <img src="../assets/team/joemar.png" class="circular-img">
        <div class="details">
          <span class="name">Joemar Taganna</span><br>
          <span class="role">Founder & Lead Programmer</span>
        </div>
      </b-col>
      <b-col class="member">
        <img src="../assets/team/reamon.png" class="circular-img">
        <div class="details">
          <span class="name">Reamon Sumapig</span><br>
          <span class="role">Senior Programmer</span>
        </div>
      </b-col>
      <b-col class="member">
        <img src="../assets/team/jessie.png" class="circular-img">
        <div class="details">
          <span class="name">Jesus Taganna, Jr.</span><br>
          <span class="role">Senior Programmer</span>
        </div>
      </b-col>
      <b-col class="member">
        <img src="../assets/team/person.png" class="circular-img">
        <div class="details">
          <span class="name">Syryll Anne Pajares</span><br>
          <span class="role">Multimedia Specialist</span>
        </div>
      </b-col>
      <b-col class="member">
        <img src="../assets/team/person.png" class="circular-img">
        <div class="details">
          <span class="name">Lynie Pensona</span><br>
          <span class="role">Secretary/Bookkeeper</span>
        </div>
      </b-col>
      <b-col class="member">
        <img src="../assets/team/person.png" class="circular-img">
        <div class="details">
          <span class="name">Geraldine Taganna</span><br>
          <span class="role">Admin Manager</span>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.circular-img {
  border-radius: 50%;
  border: 1px solid lightgrey;
}
.member {
  text-align: center;
}
.member img {
  width: 140px;
  -webkit-filter: grayscale(90%);
  filter: grayscale(90%);
}
.member img:hover {
  -webkit-filter: grayscale(0%);
  filter: grayscale(0%);
}
.details {
  margin-top: 10px;
}
.details span.name {
  font-weight: 600;
  font-size: 16px;
}
.details span.role {
  font-size: 14px;
  color: gray;
}
</style>
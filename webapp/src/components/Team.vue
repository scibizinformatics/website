<template>
  <div id="team">
    <b-row>
      <b-col sm="12" md="2" class="member">
        <img src="../assets/team/joemar.png">
        <div class="details">
          <span class="name">Joemar Taganna</span><br>
          <span class="role">Founder & Lead Programmer</span>
        </div>
      </b-col>
      <b-col sm="12" md="2" class="member">
        <img src="../assets/team/reamon.png">
        <div class="details">
          <span class="name">Reamon Sumapig</span><br>
          <span class="role">Senior Programmer</span>
        </div>
      </b-col>
      <b-col sm="12" md="2" class="member">
        <img src="../assets/team/jessie.png">
        <div class="details">
          <span class="name">Jesus Taganna, Jr.</span><br>
          <span class="role">Senior Programmer</span>
        </div>
      </b-col>
      <b-col sm="12" md="2" class="member">
        <img src="../assets/team/person.png">
        <div class="details">
          <span class="name">Syryll Anne Pajares</span><br>
          <span class="role">Multimedia Specialist</span>
        </div>
      </b-col>
      <b-col sm="12" md="2" class="member">
        <img src="../assets/team/person.png">
        <div class="details">
          <span class="name">Lynie Pensona</span><br>
          <span class="role">Secretary/Bookkeeper</span>
        </div>
      </b-col>
      <b-col sm="12" md="2" class="member">
        <img src="../assets/team/person.png">
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
.member {
  text-align: center;
}
.member img {
  border-radius: 50%;
  border: 1px solid lightgrey;
  width: 140px;
  -webkit-filter: grayscale(90%);
  filter: grayscale(90%);
  transition: filter 1.5s;
  transition: background 2s;
  transition: border 1s;
}
@media screen and (max-width: 600px) {
  .member {
    margin-bottom: 15px;
  }
}
.member img:hover {
  background: #5fbcd3;
  -webkit-filter: grayscale(0%);
  border: 4px groove #0044aa;
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
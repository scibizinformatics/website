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
        <img src="../assets/team/gevan.png">
        <div class="details">
          <span class="name">Geraldine Taganna</span><br>
          <span class="role">Admin Manager</span>
        </div>
      </b-col>
      <b-col sm="12" md="2" class="member">
        <img src="../assets/team/reamon.png">
        <div class="details">
          <span class="name">Reamon Sumapig</span><br>
          <span class="role">Programmer</span>
        </div>
      </b-col>
      <b-col sm="12" md="2" class="member">
        <img src="../assets/team/jessie.png">
        <div class="details">
          <span class="name">Jesus Taganna, Jr.</span><br>
          <span class="role">Programmer</span>
        </div>
      </b-col>
      <b-col sm="12" md="2" class="member">
        <img src="../assets/team/person_female.jpg">
        <div class="details">
          <span class="name">Marie Edcel Balite</span><br>
          <span class="role">Programmer</span>
        </div>
      </b-col>
      <b-col sm="12" md="2" class="member">
        <img src="../assets/team/person_male.jpg">
        <div class="details">
          <span class="name">Jethro Albano</span><br>
          <span class="role">Programmer</span>
        </div>
      </b-col>
      <b-col sm="12" md="2" class="member">
        <img src="../assets/team/person_male.jpg">
        <div class="details">
          <span class="name">Jeff Khirvy Sarmen</span><br>
          <span class="role">Programmer</span>
        </div>
      </b-col>
      <b-col sm="12" md="2" class="member">
        <img src="../assets/team/person_male.jpg">
        <div class="details">
          <span class="name">Archie Galangue</span><br>
          <span class="role">Programmer</span>
        </div>
      </b-col>
      <b-col sm="12" md="2" class="member">
        <img src="../assets/team/person_female.jpg">
        <div class="details">
          <span class="name">Gzyll Kae Honorio</span><br>
          <span class="role">Accounting Staff / Secretary</span>
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
  -webkit-filter: grayscale(50%);
  filter: grayscale(50%);
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

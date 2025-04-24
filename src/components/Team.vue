<template>
  <div id="team">
    <b-row>
      <transition-group name="team-member" tag="div" class="row">
        <b-col sm="12" md="2" class="member" v-for="(member, index) in teamMembers" :key="member.name" :style="{ transitionDelay: `${index * 0.1}s` }">
          <img :src="member.image">
          <div class="details">
            <span class="name">{{ member.name }}</span><br>
            <span class="role">{{ member.role }}</span>
          </div>
        </b-col>
      </transition-group>
    </b-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      teamMembers: [
        { name: 'Joemar Taganna', role: 'Founder & CEO', image: require('../assets/team/joemar.png') },
        { name: 'Geraldine Taganna', role: 'Admin Manager', image: require('../assets/team/gevan.png') },
        { name: 'Gzyll Kae Honorio', role: 'Accounting Staff / Secretary', image: require('../assets/team/gzyll.png') },
        { name: 'Reamon Sumapig', role: 'Software Developer', image: require('../assets/team/reamon.png') },
        { name: 'Jesus Taganna', role: 'Software Developer', image: require('../assets/team/jessie.png') },
        { name: 'Marie Edcel Balite', role: 'Software Developer', image: require('../assets/team/edcel.png') },
        { name: 'Jethro Albano', role: 'Software Developer', image: require('../assets/team/jethro.png') },
        { name: 'Jeff Khirvy Sarmen', role: 'Software Developer', image: require('../assets/team/jeff.png') },
        { name: 'Archie Galangue', role: 'Software Developer', image: require('../assets/team/archie.png') },
        { name: 'Ronaldo Ramano', role: 'Software Developer', image: require('../assets/team/ron.png') },
        { name: 'Jericho Dave Terado', role: 'Software Developer', image: require('../assets/team/jed.png') },
        { name: 'Arnel Cabanatan', role: 'Graphic Artist', image: require('../assets/team/arnel.png') }
      ]
    }
  }
}
</script>

<style scoped>
.member {
  text-align: center;
  margin-top: 10px;
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.5s ease forwards;
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.member img {
  border-radius: 50%;
  border: 1px solid lightgrey;
  width: 140px;
  -webkit-filter: grayscale(20%);
  filter: grayscale(20%);
  transition: all 0.5s ease;
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
  transform: scale(1.05);
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

/* Vue transition classes */
.team-member-enter-active,
.team-member-leave-active {
  transition: all 0.5s ease;
}

.team-member-enter,
.team-member-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>

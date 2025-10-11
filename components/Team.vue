<template>
  <div id="team">
    <b-row>
      <b-col
        v-for="(member, index) in teamMembers"
        :key="member.name"
        sm="12"
        md="2"
        class="member"
        :data-aos="index % 3 === 0 ? 'fade-right' : index % 3 === 1 ? 'fade-up' : 'fade-left'"
        :data-aos-delay="(index % 3) * 100"
      >
        <img :src="member.image">
        <div class="details">
          <span class="name">{{ member.name }}</span><br>
          <span class="role">{{ member.role }}</span>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: 'TeamSection',
  data () {
    return {
      teamMembers: [
        { name: 'Joemar Taganna', role: 'Founder & CEO', image: require('../assets/team/joemar.png') },
        { name: 'Geraldine Taganna', role: 'Corporate Services Manager', image: require('../assets/team/gevan.png') },
        { name: 'Gzyll Kae Honorio', role: 'Corporate Services Supervisor', image: require('../assets/team/gzyll.png') },
        { name: 'Reca Joy Torre', role: 'Corporate Services Associate', image: require('../assets/team/reca.png') },
        { name: 'Gwyneth Mae Avestruz', role: 'Corporate Services Associate', image: require('../assets/team/gwyn.png') },
        { name: 'Arnel Cabanatan', role: 'Graphic Artist', image: require('../assets/team/arnel.png') },
        { name: 'Reamon Sumapig', role: 'Software Developer', image: require('../assets/team/reamon.png') },
        { name: 'Marie Edcel Balite', role: 'Software Developer', image: require('../assets/team/edcel.png') },
        { name: 'Jethro Albano', role: 'Software Developer', image: require('../assets/team/jethro.png') },
        { name: 'Jeff Khirvy Sarmen', role: 'Software Developer', image: require('../assets/team/jeff.png') },
        { name: 'Archie Galangue', role: 'Software Developer', image: require('../assets/team/archie.png') },
        { name: 'Ronaldo Ramano', role: 'Software Developer', image: require('../assets/team/ron.png') },
        { name: 'Kenneth Matthew Lanante', role: 'Software Developer', image: require('../assets/team/ken.png') },
        { name: 'Jericho Dave Terado', role: 'Software Developer', image: require('../assets/team/jed.png') },
        { name: 'Sean Nicole Lino', role: 'Software Developer', image: require('../assets/team/sean.png') },
        { name: 'Felix Flores', role: 'Software Developer', image: require('../assets/team/felix.png') },
        { name: 'Sherel Jade Calixto', role: 'Software Developer', image: require('../assets/team/sherel.png') },
        { name: 'Adrian Salave', role: 'Software Tester', image: require('../assets/team/adrian.png') }
      ]
    }
  }
}
</script>

<style scoped>
.member {
  text-align: center;
  margin-top: 10px;
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

<template>
  <v-app class="exo">
    <!-- Navbar -->
    <v-app-bar app flat class="nav-bar exo">
      <v-toolbar-title style="width:30% "class="text-h5 font-weight-bold text-primary-darken-2 exo">
        <v-btn class="button2" style="width:25%; margin-left:-75%"@click="scrollUp()"><img src="../assets/disposableheroesHigherquality.png" style="height: 100%; width: 100%;"></v-btn>
          </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn 
      v-for="link in navLinks" 
      :key="link.id" 
      text 
      class="button text-body-1 font-weight-medium" 
      :class="{ 'active-nav-btn': activeSection === link.id }"
      @click="scrollTo(link.id)">
        {{ link.label }}
      </v-btn>

    </v-app-bar>
    <v-main id="title" class="main-bg">
      <!-- HERO -->

      <section id="hero" class="hero-section d-flex align-center justify-center text-center">
        <div class="fade-in">
          <h1 class="display-2 font-weight-bold text-primary-darken-2 mb-4">
            Disposable Heroes
          </h1>
          <p class="text-h6 mb-6 text-grey-darken-2 exo">
            Ein Squad-basiertes Taktik-Spiel
          </p>
          <v-btn style="color:#FCFCFC" color="#4F708A" variant="flat" size="x-large" elevation="2" class="px-8" @click="scrollTo('aufgabe')">
            Mehr erfahren
          </v-btn>
        </div>
      </section>

      <!-- Aufgabe -->
      <section id="aufgabe" class="section-container">
        <h2 class="section-title">Projektbeschreibung</h2>
        <v-container class="py-8">
          <v-row justify="center">
            <v-col cols="12" md="15">
              <v-card class="elevated-card pa-15">
                <p style="font-size: 1.5rem">
                  Das geplante Projekt ist ein Squad-basiertes Singleplayer-Spiel mit Fokus auf taktischem
                  Teammanagement in einer 3D-Umgebung aus Top-Down-Perspektive.
                </p>
                <p style="font-size: 1.5rem">
                  Der Spieler steuert ein Team, das koordiniert Räumlichkeiten betritt und Gefahren beseitigt.
                </p>
                <P style="font-size: 1.5rem">
                  Das Szenario spielt in einer Science-Fiction Zukunft in KI die Welt übernommen hat und sich in
                  Fraktionen gespalten hat. Nun sind sie alle auf der Suche nach wertvollen Daten Resourcen.
                </P>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </section>

      <!-- Team -->
      <section id="team" class="section-container">
        <h2 class="section-title">Unser Team</h2>
        <v-container>
          <v-row justify="center" align="stretch" dense>
            <v-col cols="12" sm="6" md="3" v-for="member in team" :key="member.name">
              <v-card class="team-card pa-5 text-center">
                <v-avatar size="200" class="mx-auto mb-4">
                  <v-img :src="member.image" cover />
                </v-avatar>
                <h4 class="text-primary-darken-2 font-weight-bold" style="margin-bottom: 0%;">
                  {{ member.first_name }}
                </h4>
                <h4 class="text-primary-darken-2 font-weight-bold" style="margin-top: 0%;">
                  {{ member.last_name }}
                </h4>
                <p class="text-primary mb-1">{{ member.role }}</p>
                <p class="text-black-darken-1">{{ member.desc }}</p>
                <p class="text-grey-darken-1 email">{{ member.email }}</p>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </section>

      <!-- Meilensteine -->
      <section id="meilensteine" class="section-container">
        <h2 class="section-title">Meilensteine</h2>
        <v-container>
          <v-data-table :headers="headers" :items="milestones" class="elevated-card text-grey-darken-3"
            hide-default-footer style="font-size: 1.5rem;">
            <template v-slot:item.task="{ item }">
              <span>{{ item.task }}</span>
            </template>
            <template v-slot:item.date="{ item }">
              <v-chip color="primary" text-color="white" variant="flat">
                {{ item.date }}
              </v-chip>
            </template>
          </v-data-table>
        </v-container>
      </section>

      <!-- Fortschritt -->
      <section id="timeline" class="section-container">
        <h2 class="section-title">Fortschritt</h2>
        <v-container class="py-8" justify="center">
          <v-row justify="center">
            <v-col cols="12" md="18">
              <v-card class="elevated-card pa-15 text-center">
                <v-timeline align="start">
                  <v-timeline-item :dot-color="'#4F708A'">
                    <template v-slot:opposite>
                      Entwicklung eines ersten funktionierenden Prototyps abgeschlossen
                    </template>
                    <div>
                      <div class="text-h6">Content title</div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      </p>
                    </div>
                  </v-timeline-item>

                  <v-timeline-item :dot-color="'#4F708A'">
                    <template v-slot:opposite>
                      Opposite content
                    </template>
                    <div>
                      <div class="text-h6">Content title</div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      </p>
                    </div>
                  </v-timeline-item>

                  <v-timeline-item :dot-color="'#4F708A'">
                    <template v-slot:opposite>
                      Massiv
                    </template>
                    <div>
                      <div class="text-h6">Content title</div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      </p>
                    </div>
                  </v-timeline-item>
                </v-timeline>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </section>


      <!-- Kontakt -->
      <section id="kontakt" class="section-container text-center">
        <h2 class="section-title">Kontakt</h2>
        <v-container class="py-8">
          <v-row justify="center">
            <v-col cols="12" md="15">
              <v-card class="elevated-card pa-15">
                <p class="text-grey-darken-2" style="font-size: 1.45rem">
                  Bei Fragen oder Feedback kontaktieren sie uns gerne unter den oben stehenden Email Addressen.
                </p>
                <p class="text-grey-darken-2" style="font-size: 1.45rem">
                  Oder kontaktieren sie unseren Betreuer: Herr Mag. Dr. Eugen Jiresch, ejiresch@tgm.ac.at
                </p>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </section>
    </v-main>

    <!-- Footer -->
    <v-footer class="footer-light">
      <v-container>
        <p class="text-center text-grey-darken-1 mb-0">
          © 2025 Disposable Heroes - Alle Rechte vorbehalten
        </p>
      </v-container>
    </v-footer>
  </v-app>
</template>

<script setup>
import { ref , onMounted, onUnmounted} from "vue"
import Foto_Maximilian_Bauer from "../assets/Foto_Maximilian_Bauer.jpg"
import Foto_Victor_Bublinskyy from "../assets/Foto_Victor_Bublinskyy.jpg"
import Foto_Jakob_Fenzl from "../assets/Foto_Jakob_Fenzl.jpg"
import Foto_Dominik_Sandler from "../assets/Foto_Dominik_Sandler.jpg"

const activeSection = ref("hero")

const scrollTo = (id) => {
  activeSection.value = id
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: "smooth" })
}
// Prüft beim Scrollen, welcher Abschnitt gerade sichtbar ist
const handleScroll = () => {
  const sections = ["hero", "aufgabe", "team", "meilensteine","timeline", "kontakt"]

  for (const id of sections) {
    const el = document.getElementById(id)
    if (el) {
      const rect = el.getBoundingClientRect()
      // Wenn der obere Teil der Section im sichtbaren Bereich liegt
      if (rect.top <= 150 && rect.bottom >= 150) {
        activeSection.value = id
        break
      }
    }
  }
}

onMounted(() => {
  window.addEventListener("scroll", handleScroll)
  handleScroll() // initial aufrufen
})

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll)
})

function scrollUp(){
  const el = document.getElementById("title")
  if (el) el.scrollIntoView({ behavior: "smooth" })
}
const navLinks = [
  { id: "aufgabe", label: "Aufgabe" },
  { id: "team", label: "Team" },
  { id: "meilensteine", label: "Meilensteine" },
  { id: "timeline", label: "Fortschritt" },
  { id: "kontakt", label: "Kontakt" },
]

const team = ref([
  {
    first_name: "Maximilian",
    last_name: "Bauer",
    role: "Projektleiter, Entwickler",
    desc: "Gamelogik, Szenenbau und Observer Pattern",
    image: Foto_Maximilian_Bauer,
    email: "mbauer@student.tgm.ac.at",
  },
  {
    first_name: "Viktor",
    last_name: "Bublinskyy",
    role: "Entwickler",
    desc: "UI, VFX und SFX",
    image: Foto_Victor_Bublinskyy,
    email: "vbublinskyy@student.tgm.ac.at",
  },
  {
    first_name: "Jakob",
    last_name: "Fenzl",
    role: "Modellierer",
    desc: "3D Modellierung und Animierung",
    image: Foto_Jakob_Fenzl,
    email: "jfenzl@student.tgm.ac.at",
  },
  {
    first_name: "Dominik",
    last_name: "Sandler",
    role: "Entwickler",
    desc: "KI-Logik",
    image: Foto_Dominik_Sandler,
    email: "dsandler@student.tgm.ac.at",
  },
])

const headers = [
  { title: "Meilenstein", key: "task", sortable: false },
  { title: "Datum", key: "date", sortable: false  },
]

const milestones = [
  { task: "Entwicklung eines ersten funktionierenden Prototyps abgeschlossen", date: "14.10.2025" },
  { task: "UI für Spieleranweisungen fertiggestellt", date: "30.10.2025" },
  { task: "Zwei Charaktermodelle fertiggestellt", date: "14.11.2025" },
  { task: "Prototyp überarbeitet & erweitert", date: "15.11.2025" },
  { task: "Verhalten des KI-Teams implementiert", date: "30.11.2025" },
  { task: "Visuelle Effekte & Soundeffekte fertiggestellt", date: "20.12.2025" },
  { task: "Game-Logik abgeschlossen", date: "12.01.2026" },
  { task: "Usertesting & Bugfixing abgeschlossen", date: "15.02.2026" },
  { task: "Projekt veröffentlicht", date: "28.02.2026" },
]
</script>

<script>
export default {
  name: 'HomeView',
}
</script>

<style scoped>
.exo {
  font-family: 'Exo 2';
}

.v-app-bar.exo,
.v-app-bar.exo * {
  font-family: 'Exo 2', sans-serif !important;
}

.main-bg {
  background: linear-gradient(180deg, #f7f8fa 0%, #eef1f4 100%);
  color: #1a1a1a;
}

.nav-bar {
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);

}

.hero-section {
  height: 90vh;
  background: url("") center/cover no-repeat;
  position: relative;
}

.hero-section::after {
  content: "";
  position: absolute;
  inset: 0;
  background: rgba(255, 255, 255, 0.5);
}

.hero-section>div {
  position: relative;
  z-index: 2;
}

.section-container {
  padding-top: 6rem;
  padding-bottom: 6rem;
}

.section-title {
  text-align: center;
  font-weight: 700;
  font-size: 3.rem;
  margin-bottom: 3rem;
  color: #2b3a4a;
}

.elevated-card {
  background: white;
  border-radius: 16px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
}

.team-card {
  background: white;
  border-radius: 16px;
  transition: all 0.3s ease;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.06);
  min-height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.team-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 20px rgba(79, 112, 138, 0.2);
}

.footer-light {
  background: #f0f2f5;
  border-top: 3px solid rgba(0, 0, 0, 0.08);
  padding: 1.5rem 0;
}


.fade-in {
  animation: fadeIn 1.2s ease-in-out forwards;
}

.email {
  margin-top: auto;
  font-size: 0.95rem;
}

.button {
  background-color: #ffffff;
  color: #2b3a4a;
}

.button2{
background-color: #ffffff;
}

.active-nav-btn {
  background-color: rgba(79, 112, 138, 0.15) !important;
  color: #4F708A !important;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.button:not(.active-nav-btn):hover {
  background-color: rgba(79, 112, 138, 0.08);
  color: #4F708A;
}

.unfinished_timeline_thing{
  color: "#4F708A";
}


@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(15px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>

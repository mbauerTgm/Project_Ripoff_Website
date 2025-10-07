<template>
  <v-app>
    <!-- Navigation -->
    <v-app-bar app flat color="#4F708A" size="30%">
      <v-toolbar-title class="font-weight-bold text-white">
        Disposable Heroes
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text class="nav-btn" @click="scrollTo('aufgabe')">Aufgabe</v-btn>
      <v-btn text class="nav-btn" @click="scrollTo('team')">Team</v-btn>
      <v-btn text class="nav-btn" @click="scrollTo('fortschritt')">Fortschritt</v-btn>
      <v-btn text class="nav-btn" @click="scrollTo('kontakt')">Kontakt</v-btn>
    </v-app-bar>

    <v-main style="background-color:#3D3D3D;">
      <!-- Hero Section -->
      <section id="hero" class="hero-section">
        <div class="overlay d-flex flex-column align-center justify-center text-center">
          <h1 class="text-h2 font-weight-bold mb-2 main-title">Disposable Heroes</h1>
          <h2 class="text-h5 subtitle">Ein Squad basiertes Taktik Spiel</h2>
          <v-btn
            color="#4F708A"
            class="mt-6"
            size="large"
            @click="scrollTo('aufgabe')"
          >
            Mehr erfahren
          </v-btn>
        </div>
      </section>

      <!-- Aufgabenbeschreibung -->
      <section id="aufgabe">
      <v-container class="py-16">
        <h2 class="section-title">Projektbeschreibung</h2>
        <v-row justify="center">
          <v-col cols="12" md="8">
            <v-card flat class="pa-6 card-dark">
              <p>
                Beschreibung
              </p>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
      </section>

      <!-- Team Section -->
      <section id="team">
      <v-container class="py-16">
        <h2 class="section-title">Unser Team</h2>
        <v-row justify="center" align="stretch" dense>
          <v-col
            cols="12"
            sm="6"
            md="3"
            v-for="member in team"
            :key="member.name"
          >
            <v-card class="card-dark pa-4 text-center" elevation="2" style="min-height: 100%;">
              <v-img :src="member.image" cover />
              
              <h3 class="text-white font-weight-bold">{{ member.name }}</h3>
              <p class="accent-text mb-1">{{ member.role }}</p>
              <p class="text-secondary">{{ member.desc }}</p>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
      </section>

      <!-- Fortschritt -->
      <v-container id="fortschritt" class="py-16">
        <h2 class="section-title">Fortschrittsdokumentation</h2>
        <v-data-table
          :headers="headers"
          :items="milestones"
          class="elevation-2"
          hide-default-footer
          style="background-color:#2E2E2E; color:#FCFCFC;"
        >
          <template v-slot:item.task="{ item }">
            <span color="#FCFCFC">{{ item.task }}</span>
          </template>
          <template v-slot:item.date="{ item }">
            <v-chip color="#FCFCFC" text-color="white">{{ item.date }}</v-chip>
          </template>
        </v-data-table>
      </v-container>

      <!-- Kontakt -->
      <v-container id="kontakt" class="py-16 text-center">
        <h2 class="section-title">Kontakt</h2>

      </v-container>
    </v-main>

    <!-- Footer -->
    <v-footer color="#2E2E2E" height="40%">
      <v-container>
        <p class="text-center mb-0 text-secondary">
          © 2025 Disposable Heroes - Alle Rechte vorbehalten
        </p>
      </v-container>
    </v-footer>
  </v-app>
</template>

<script setup>
import { ref } from "vue"
import Foto_Maximilian_Bauer from '../assets/Foto_Maximilian_Bauer.jpg'
import Foto_Victor_Bublinskyy from '../assets/Foto_Victor_Bublinskyy.jpg'
import Foto_Jakob_Fenzl from '../assets/Foto_Jakob_Fenzl.jpg'
import Foto_Dominik_Sanlder from '../assets/Foto_Dominik_Sandler.jpg'

const scrollTo = (id) => {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: "smooth" })
}

const team = ref([
  {
    name: "Maximilian Bauer",
    role: "Projektleiter, Entwickler",
    desc: "Gamelogik, Szenenbau und Observer Pattern",
    image: Foto_Maximilian_Bauer,
  },
  {
    name: "Viktor Bublinskyy",
    role: "Entwickler, Juxxl",
    desc: "UI, VFX und SFX",
    image: Foto_Victor_Bublinskyy,
  },
  {
    name: "Jakob Fenzl",
    role: "Modellierer",
    desc: "3D Modellierung und Animierung",
    image: Foto_Jakob_Fenzl,
  },
  {
    name: "Dominik Sandler",
    role: "Entwickler",
    desc: "KI-Logik",
    image: Foto_Dominik_Sanlder,
  },
])

const headers = [
  { text: "Meilenstein", value: "task" },
  { text: "Datum", value: "date" },
]

const milestones = [
  { task: "Entwicklung eines ersten funktionierenden Prototyps der grundlegenden Game-Logik abgeschlossen", date: "14.10.2025" },
  { task: "UI für Spieleranweisungen und erste KI-Befehle fertiggestellt", date: "30.10.2025" },
  { task: "Zwei Charaktermodelle modelliert, texturiert und animiert im Spiel", date: "14.11.2025" },
  { task: "Prototyp überarbeitet & erweitert", date: "15.11.2025" },
  { task: "Verhalten des KI-Teams vollständig implementiert", date: "30.11.2025" },
  { task: "Drei visuelle Effekte und Soundeffekte fertiggestellt", date: "20.12.2025" },
  { task: "Game-Logik abgeschlossen und KI-Team verfeinert", date: "12.01.2026" },
  { task: "Usertesting & Bugfixing abgeschlossen", date: "15.02.2026" },
  { task: "Projektziele erfüllt & Projekt veröffentlicht", date: "28.02.2026" },
]
</script>

<style scoped>
html {
  scroll-behavior: smooth;
}

.nav-btn {
  color: #fcfcfc;
  text-transform: none;
  font-weight: 500;
}
.nav-btn:hover {
  color: #ffffff;
}
.hero-section {
  background: url("https://images.unsplash.com/photo-1517694712202-14dd9538aa97")
    center/cover no-repeat;
  height: 600px;
  position: relative;
}
.overlay {
  background-color: rgba(0, 0, 0, 0.6);
  height: 100%;
  color: #fcfcfc;
}
.main-title {
  color: #fcfcfc;
}
.subtitle {
  color: #d1d1d1;
}
.section-title {
  color: #fcfcfc;
  text-align: center;
  font-weight: bold;
  margin-bottom: 2rem;
}
.card-dark {
  background-color: #2e2e2e;
  color: #fcfcfc;
  border-radius: 12px;
}
.text-secondary {
  color: #FCFCFC;
}
.accent-text {
  color: #4f708a;
}
</style>

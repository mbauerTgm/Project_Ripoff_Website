<template>
  <div class="home-wrapper">
    <MobileLayout 
      v-if="mobile"
      :galleryID="galleryID"
      :images="images"
      :team="team"
      :milestones="milestones"
      :navLinks="navLinks"
    />

    <DesktopLayout 
      v-else
      :galleryID="galleryID"
      :images="images"
      :team="team"
      :milestones="milestones"
      :navLinks="navLinks"
    />
  </div>
</template>

<script setup>
import { ref } from "vue"
import { useDisplay } from "vuetify"

// Importiere die zwei Layout-Komponenten
// Stelle sicher, dass du diese Dateien im Ordner /components erstellt hast!
import DesktopLayout from "./DesktopLayout.vue"
import MobileLayout from "./MobileLayout.vue"

// Assets für Team (Daten hier, damit wir sie nicht doppelt schreiben müssen)
import Foto_Maximilian_Bauer from "../assets/Foto_Maximilian_Bauer.jpg"
import Foto_Victor_Bublinskyy from "../assets/Foto_Victor_Bublinskyy.jpg"
import Foto_Jakob_Fenzl from "../assets/Foto_Jakob_Fenzl.jpg"
import Foto_Dominik_Sandler from "../assets/Foto_Dominik_Sandler.jpg"

// Props von App.vue empfangen
const props = defineProps({
  galleryID: String,
  images: Array,
});

// Vuetify Mobile Check
const { mobile } = useDisplay()

// --- GEMEINSAME DATEN ---
const navLinks = [
  {id: "title", label: "Disposable Heroes"},
  { id: "aufgabe", label: "Aufgabe" },
  { id: "team", label: "Team" },
  { id: "meilensteine", label: "Meilensteine" },
  { id: "timeline", label: "Fortschritt" },
  { id: "gallery", label: "Galerie" }, 
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
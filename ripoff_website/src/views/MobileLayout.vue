<template>
  <v-app class="exo">
    <v-navigation-drawer v-model="drawer" location="right" temporary class="exo">
      <v-list>
        <v-list-item v-for="link in navLinks" :key="link.id" @click="scrollTo(link.id); drawer = false">
          <v-list-item-title class="font-weight-bold text-primary-darken-2">
            {{ link.label }}
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app flat class="nav-bar exo">
      <v-toolbar-title class="font-weight-bold text-primary-darken-2">
         
      </v-toolbar-title>
      <v-img src="../assets/disposableheroesHigherquality.png" max-height="20" contain @click="scrollUp()"></v-img>
      <v-spacer></v-spacer>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    </v-app-bar>

    <v-main id="title" class="main-bg">
       <div class="hero-background" :style="{ backgroundImage: `url(${RenderFinal})` }"></div>

      <section id="hero" class="hero-section d-flex align-center justify-center text-center px-4">
        <div class="fade-in">
          <h1 class="text-h4 font-weight-bold text-primary-darken-2 mb-4">
            Disposable Heroes
          </h1>
          <p class="text-body-1 mb-6 text-grey-darken-2 exo">
            Ein Squad-basiertes Taktik-Spiel
          </p>
        </div>
      </section>

      <section id="aufgabe" class="section-container">
        <h2 class="section-title text-h4">Projektbeschreibung</h2>
        <v-container>
          <v-row justify="center">
            <v-col cols="12">
              <v-card class="elevated-card pa-6">
                <p class="text-body-1 mb-4">
                  Das geplante Projekt ist ein Squad-basiertes Singleplayer-Spiel mit Fokus auf taktischem
                  Teammanagement in einer 3D-Umgebung aus Top-Down-Perspektive.
                </p>
                <p class="text-body-1">
                  Der Spieler steuert ein Team, das koordiniert Räumlichkeiten betritt und Gefahren beseitigt.
                </p>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </section>

      <section id="team" class="section-container">
        <h2 class="section-title text-h4">Unser Team</h2>
        <v-container>
          <v-row dense>
            <v-col cols="12" v-for="member in team" :key="member.name" class="mb-4">
              <v-card class="team-card pa-4 text-center">
                <v-avatar size="120" class="mx-auto mb-4">
                  <v-img :src="member.image" cover />
                </v-avatar>
                <h3 class="text-h6 text-primary-darken-2 font-weight-bold">{{ member.first_name }} {{ member.last_name }}</h3>
                <p class="text-primary mb-1">{{ member.role }}</p>
                <p class="text-body-2 text-black-darken-1">{{ member.desc }}</p>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </section>

      <section id="meilensteine" class="section-container">
        <h2 class="section-title text-h4">Meilensteine</h2>
        <v-container>
            <v-card class="elevated-card">
                 <v-list lines="two">
                    <v-list-item v-for="(item, i) in milestones" :key="i" class="border-b">
                        <v-list-item-title class="text-wrap mb-1">
                            {{ item.task }}
                        </v-list-item-title>
                        <v-list-item-subtitle>
                            <v-chip size="small" color="primary" text-color="white" variant="flat">{{ item.date }}</v-chip>
                        </v-list-item-subtitle>
                    </v-list-item>
                 </v-list>
            </v-card>
        </v-container>
      </section>

      <section id="timeline" class="section-container exo" >
          <h2 class="section-title text-h4">Fortschritt</h2>
           <v-container>
               <v-card class="elevated-card pa-4">
                   <v-timeline side="end" density="compact" align="start">
                        <v-timeline-item dot-color="#4F708A" size="small">
                          <v-sheet
                            class="exo pa-3"
                            rounded="lg"
                            elevation="0"
                            style="border-left: 3px solid #4F708A; background-color: #f8fafb;">
                             <div class="mb-2 text-caption">02.10.2025</div>
                             <div class="text-subtitle-2 font-weight-bold">Observer Pattern Implementierung</div>
                             <div class="text-caption text-grey-darken-1">Fertigstellung des Messaging Services inkl. Dokumentation, zur umsetzungen des Observer Patterns in den Systemen </div>
                          </v-sheet>
                        </v-timeline-item>
                        <v-timeline-item dot-color="#4F708A" size="small">
                            <v-sheet
                              class="exo pa-3"
                              rounded="lg"
                              elevation="0"
                              style="border-left: 3px solid #4F708A; background-color: #f8fafb;">
                             <div class="mb-2 text-caption">21.10.2025</div>
                             <div class="text-subtitle-2 font-weight-bold">Kamera System fertiggestellt </div>
                             <div class="text-caption text-grey-darken-1">Das Kamera-System und die dazugehörige Steuerung wurden mittels Unity's Cinemachine 3 implementiert. </div>
                            </v-sheet>
                            </v-timeline-item>
                        <v-timeline-item dot-color="#4F708A" size="small">
                          <v-sheet
                            class="exo pa-3"
                            rounded="lg"
                            elevation="0"
                            style="border-left: 3px solid #4F708A; background-color: #f8fafb;">
                             <div class="mb-2 text-caption">22.10.2025</div>
                             <div class="text-subtitle-2 font-weight-bold">Modellierung des Haupt-Charakters fertiggestellt </div>
                             <div class="text-caption text-grey-darken-1">Das Modell des Haupt-Charakter wurde samt Texturen in Blender fertiggestellt </div>
                          </v-sheet>
                            </v-timeline-item>
                         <v-timeline-item dot-color="#4F708A" size="small">
                          <v-sheet
                            class="exo pa-3"
                            rounded="lg"
                            elevation="0"
                            style="border-left: 3px solid #4F708A; background-color: #f8fafb;">
                             <div class="mb-2 text-caption">06.11.2025</div>
                             <div class="text-subtitle-2 font-weight-bold">Design des Hauptmenü fertiggestellt </div>
                             <div class="text-caption text-grey-darken-1">Das Design des Hauptmenüs wurde fertiggestellt inklusive Einstellungen und mit dem Prototyp verbunden. </div>
                          </v-sheet>
                            </v-timeline-item>
                        <v-timeline-item dot-color="#4F708A" size="small">
                          <v-sheet
                            class="exo pa-3"
                            rounded="lg"
                            elevation="0"
                            style="border-left: 3px solid #4F708A; background-color: #f8fafb;">
                             <div class="mb-2 text-caption">06.11.2025</div>
                             <div class="text-subtitle-2 font-weight-bold">UI Kommandomenü fertiggestellt </div>
                             <div class="text-caption text-grey-darken-1">Das Kommandomenü wurde fertiggestellt und mit dem Observer Pattern verbunden. </div>
                          </v-sheet>
                            </v-timeline-item>
                        <v-timeline-item dot-color="#4F708A" size="small">
                          <v-sheet
                            class="exo pa-3"
                            rounded="lg"
                            elevation="0"
                            style="border-left: 3px solid #4F708A; background-color: #f8fafb;">
                             <div class="mb-2 text-caption">07.11.2025</div>
                             <div class="text-subtitle-2 font-weight-bold">Erster Prototyp</div>
                             <div class="text-caption text-grey-darken-1">Es wurde aus allen bisherigen Ergebnissen ein technischer Prototyp erstellt. Dieser wurde dann bei "Tag der offenen Tür" am TGM, den Besuchern, vorgestellt.</div>
                        </v-sheet>
                            </v-timeline-item>
                        <v-timeline-item dot-color="#4F708A" size="small">
                          <v-sheet
                            class="exo pa-3"
                            rounded="lg"
                            elevation="0"
                            style="border-left: 3px solid #4F708A; background-color: #f8fafb;">
                             <div class="mb-2 text-caption">11.11.2025</div>
                             <div class="text-subtitle-2 font-weight-bold">Kamera verbessert</div>
                             <div class="text-caption text-grey-darken-1">Die Interpolationskurve, beziehungsweise das Dampening der Kamera wurde angepasst um ein besseres Erlebnis zu bieten.</div>
                          </v-sheet>
                        </v-timeline-item>
                        <v-timeline-item dot-color="#4F708A" size="small">
                          <v-sheet
                            class="exo pa-3"
                            rounded="lg"
                            elevation="0"
                            style="border-left: 3px solid #4F708A; background-color: #f8fafb;">
                             <div class="mb-2 text-caption">01.01.2026</div>
                             <div class="text-subtitle-2 font-weight-bold">Desing/Implementation des Ersten Level</div>
                             <div class="text-caption text-grey-darken-1">Erstellung von Grundlayout des ersten Levels und Organisation der Projekt-Files. Überarbeitung mit besseren Assets ausständig.</div>
                          </v-sheet>
                        </v-timeline-item>
                        <v-timeline-item dot-color="#4F708A" size="small">
                        <v-sheet
                          class="exo pa-3"
                          rounded="lg"
                          elevation="0"
                          style="border-left: 3px solid #4F708A; background-color: #f8fafb;"
                        >
                          <div class="mb-2 text-caption">
                            03.01.2026
                          </div>

                          <div class="text-subtitle-2 font-weight-bold">
                            Team movement verbessert und erweitert
                          </div>

                          <div class="text-caption text-grey-darken-1">
                            Es wurden basic Methoden für das Movement der Teammates integriert, 
                            z.B. FollowLeader, HoldPosition und MoveToPosition.
                          </div>
                        </v-sheet>
                      </v-timeline-item>
                      <v-timeline-item dot-color="#4F708A" size="small">
                          <v-sheet
                            class="exo pa-3"
                            rounded="lg"
                            elevation="0"
                            style="border-left: 3px solid #4F708A; background-color: #f8fafb;">
                             <div class="mb-2 text-caption">04.01.2026</div>
                             <div class="text-subtitle-2 font-weight-bold">Field of View/Fog of War verbessert</div>
                             <div class="text-caption text-grey-darken-1">Es wurde eine neue Iteration des Field of View/Fog of War System erstellt. Es wurde gefixed, dass der Spieler durch Wände schauen kann und es wurde um den Spieler ein Viewcone ähnlicher Kreis hinzugefügt.</div>
                          </v-sheet>
                        </v-timeline-item>
                      <v-timeline-item dot-color="#4F708A" size="small">
                        <v-sheet
                          class="exo pa-3"
                          rounded="lg"
                          elevation="0"
                          style="border-left: 3px solid #4F708A; background-color: #f8fafb;"
                        >
                          <div class="mb-2 text-caption">
                            12.01.2026
                          </div>

                          <div class="text-subtitle-2 font-weight-bold">
                            Teammate Formationen wurden grundsetztlich implementiert
                          </div>

                          <div class="text-caption text-grey-darken-1">
                            Es ist möglich Formationen zu definieren, welche über Events ausgelöst werden können. 
                          </div>
                        </v-sheet>
                      </v-timeline-item>
                            
                   </v-timeline>
               </v-card>
           </v-container>
      </section>

      <section id="gallery" class="section-container text-center">
        <h2 class="section-title text-h4">Insights</h2>
        <div :id="galleryID" class="d-flex flex-wrap justify-center">
            <a v-for="(image, key) in images" :key="key" 
               :href="image.videoSrc || image.largeURL"
               :data-pswp-width="image.width" :data-pswp-height="image.height" :data-pswp-type="image.type"
               target="_blank" rel="noreferrer" class="ma-1">
              <img :src="image.thumbnailURL" alt="" style="width: 100px; height: 100px; object-fit: cover; border-radius: 8px;"/>
            </a>
        </div>
      </section>

      <section id="kontakt" class="section-container text-center">
         <h2 class="section-title text-h4">Kontakt</h2>
         <v-container>
            <v-card class="elevated-card pa-6">
               <p class="text-grey-darken-2" style="font-size: 1rem">
                  Bei Fragen oder Feedback kontaktieren sie uns gerne unter den oben stehenden Email Addressen.
                </p>
                <p class="text-grey-darken-2" style="font-size: 1rem">
                  Oder kontaktieren sie unseren Betreuer: Herr Mag. Dr. Eugen Jiresch, ejiresch@tgm.ac.at
                </p>
            </v-card>
         </v-container>
      </section>
      
      <v-footer class="footer-light justify-center">
          <span class="text-caption">© 2025 Disposable Heroes</span>
      </v-footer>
    </v-main>
  </v-app>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue"
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';
import PhotoSwipeVideoPlugin from 'photoswipe-video-plugin';
import RenderFinal from "../assets/Render4k.png"

const props = defineProps({
  galleryID: String,
  images: Array,
  team: Array,
  milestones: Array,
  navLinks: Array
});

const drawer = ref(false);
let lightbox = null;

onMounted(() => {
  if (!lightbox) {
    lightbox = new PhotoSwipeLightbox({
      gallery: '#' + props.galleryID, 
      children: 'a',
      pswpModule: () => import('photoswipe'),
    });
    new PhotoSwipeVideoPlugin(lightbox, {});
    lightbox.init();
  }
})

onUnmounted(() => {
  if (lightbox) { lightbox.destroy(); lightbox = null; }
})

const scrollTo = (id) => {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: "smooth" })
}

function scrollUp(){
  const el = document.getElementById("title")
  if (el) el.scrollIntoView({ behavior: "smooth" })
}
</script>

<style scoped>
.exo { font-family: 'Exo 2', sans-serif; }
.main-bg { position: relative; overflow: hidden; }
.hero-background {
  position: fixed; top: 0; left: 0; width: 100%; height: 100vh;
  background-repeat: no-repeat; background-position: center; background-size: cover; z-index: 1; pointer-events: none;
}
.hero-section { height: 80vh; position: relative; z-index: 2; }
.section-container { padding: 4rem 0; position: relative; z-index: 2; }
.elevated-card { background: rgba(255, 255, 255, 0.95); border-radius: 16px; }
.section-title { margin-bottom: 2rem; color: #2b3a4a; text-align: center; font-weight: 700;}
</style>
<template>
  <div class="w-screen">
    <div class="">
      <div class="border-b border-light fixed w-screen bg-slate-50 z-10">
        <div class="container mx-auto h-16 flex items-center">
          <div>
            <ul class="flex space-x-10">
              <li>
                <a class="hover:underline" href="https://github.com/ankurrsinghal/vue-wall-clocks"
                  target="_blank">Github</a>
              </li>
              <li>
                <a class="hover:underline" href="https://twitter.com/ankurpsinghal" target="_blank">Twitter</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="container mx-auto pb-20">
        <div class="flex justify-between w-full py-40 items-center h-screen">
          <h1 class="text-8xl font-bold leading-tight">
            <span class="block text-secondary">Vue</span>
            <span class="block text-primary gradient">Beautiful</span>
            <span class="block text-secondary">Wall Clocks</span>
          </h1>
          <div>
            <Clock :size="350" smooth>
              <LineMarker />
            </Clock>
          </div>
        </div>
        <div class="space-y-40">
          <div>
            <h1 class="text-4xl font-extralight">Get Started</h1>
            <div class="flex mt-10">
              <div class="flex-1 text-sm border border-black rounded-md px-4 p-2 inline-block">
                <div v-shiki="getting_started" />
              </div>
            </div>
          </div>
          <div>
            <h1 class="text-4xl font-extralight">Simple Clock</h1>
            <div class="flex mt-10">
              <div class="flex-1 text-sm border border-black rounded-md px-4 flex items-center">
                <div v-shiki="simple_usage" />
              </div>
              <div class="flex-1">
                <Clock :size="200">
                  <LineMarker />
                </Clock>
              </div>
            </div>
          </div>
          <div>
            <h1 class="text-4xl font-extralight">Smooth Animation</h1>
            <div class="flex mt-10">
              <div class="flex-1 text-sm border border-black rounded-md px-4 flex items-center">
                <div v-shiki="simple_usage" />
              </div>
              <div class="flex-1">
                <Clock :size="200" smooth>
                  <LineMarker />
                </Clock>
              </div>
            </div>
          </div>
          <div>
            <h1 class="text-4xl font-extralight">Circular Markers</h1>
            <div class="flex mt-10">
              <div class="flex-1 text-sm border border-black rounded-md px-4 flex items-center">
                <div v-shiki="simple_usage" />
              </div>
              <div class="flex-1">
                <Clock :size="200" smooth>
                  <CircleMarker />
                </Clock>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Clock from './Clock.vue';
import LineMarker from './LineMarker.vue';
import RomanMarker from './RomanMarker.vue';
import CircleMarker from './CircleMarker.vue';
import NumberMarker from './NumberMarker.vue';
import { simple, getting_started } from './data';

export default {
  name: 'App',
  components: {
    Clock,
    LineMarker,
    RomanMarker,
    CircleMarker,
    NumberMarker
  },
  computed: {
    getting_started() {
      return getting_started;
    },
    simple_usage() {
      return simple;
    }
  },
  directives: {
    shiki: {
      mounted: (el, { value }) => {
        shiki
          .getHighlighter({
            theme: 'vitesse-light'
          })
          .then(highlighter => {
            const code = highlighter.codeToHtml(value, { lang: 'js' })
            el.innerHTML = code
          });
      }
    }
  }
};
</script>

<style>
.gradient {
  background: -webkit-linear-gradient(120deg, #35495e -80%, #41b883);
  -webkit-background-clip: text;
  color: transparent;
}
</style>

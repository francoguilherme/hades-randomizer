<template>
  <div class="p-3">
    <h1>Hades Build Randomizer</h1>
    <h3>Preset Keepsakes (in case you want to finish with Acorn or Tooth)</h3>
    <div>
      Tartarus
      <select name="tartarus" id="tartarus" v-model="presetKeepsakes[0]">
        <option value=""></option>
        <option v-for="ks in availableKeepsakes" :value="ks">{{keepsakesDict[ks]}}</option>
      </select>
    </div>

    <div>
      Asphodel
      <select name="asphodel" id="asphodel" v-model="presetKeepsakes[1]">
        <option value=""></option>
        <option v-for="ks in availableKeepsakes" :value="ks">{{keepsakesDict[ks]}}</option>
      </select>
    </div>

    <div>
      Elysium
      <select name="elysium" id="elysium" v-model="presetKeepsakes[2]">
        <option value=""></option>
        <option v-for="ks in availableKeepsakes" :value="ks">{{keepsakesDict[ks]}}</option>
      </select>
    </div>

    <div>
      Temple of Styx
      <select name="styx" id="styx" v-model="presetKeepsakes[3]">
        <option value=""></option>
        <option v-for="ks in availableKeepsakes" :value="ks">{{keepsakesDict[ks]}}</option>
      </select>
    </div>

    <button class="my-3" @click="generateBuild">GENERATE BUILD</button>

    <h3>Generated Build</h3>
    <div v-if="aspect" class="text-center w-fit-content">
      <img :src="require(`~/assets/aspects/${aspect}.webp`)" :alt="formattedAspect">
      <p>{{formattedAspect}}</p>
    </div>
    <div v-if="formattedKeepsakes" class="text-center w-fit-content">
      <div>
        <img
            class="mx-2"
            v-for="ks in keepsakes"
            :src="require(`~/assets/keepsakes/${ks}.webp`)"
            :alt="keepsakesDict[ks]"
        >
      </div>
      <p>{{formattedKeepsakes}}</p>
    </div>
  </div>
</template>

<script>
import lodash from "lodash";

export default {
  name: "index",
  methods: {
    generateBuild() {
      this.aspect = lodash.sample(this.availableAspects);
      this.keepsakes = [...this.presetKeepsakes];
      this.keepsakes.forEach((ks, i) => {
        if (ks === "") {
          let rand = lodash.sample(this.availableKeepsakes);
          while (this.keepsakes.includes(rand)) {
            rand = lodash.sample(this.availableKeepsakes);
          }
          this.keepsakes[i] = rand;
        }
      })
    }
  },
  computed: {
    availableAspects() {
      return Object.keys(this.aspectsDict);
    },
    availableKeepsakes() {
      return Object.keys(this.keepsakesDict);
    },
    formattedAspect() {
      return this.aspect && this.aspectsDict[this.aspect]
    },
    formattedKeepsakes() {
      if (this.keepsakes.every(ks => !!ks)) {
        return `${this.keepsakesDict[this.keepsakes[0]]}, ${this.keepsakesDict[this.keepsakes[1]]}, ${this.keepsakesDict[this.keepsakes[2]]}, ${this.keepsakesDict[this.keepsakes[3]]}`
      }
    },
  },
  data() {
    return {
      aspect: "",
      presetKeepsakes: ["", "", "", ""],
      keepsakes: ["", "", "", ""],
      aspectsDict: {
        blade_0: "Stygian Blade: Aspect of Zagreus",
        blade_1: "Stygian Blade: Aspect of Nemesis",
        blade_2: "Stygian Blade: Aspect of Poseidon",
        blade_3: "Stygian Blade: Aspect of Arthur",
        spear_0: "Eternal Spear: Aspect of Zagreus",
        spear_1: "Eternal Spear: Aspect of Achilles",
        spear_2: "Eternal Spear: Aspect of Hades",
        spear_3: "Eternal Spear: Aspect of Guan Yu",
        shield_0: "Shield of Chaos: Aspect of Zagreus",
        shield_1: "Shield of Chaos: Aspect of Chaos",
        shield_2: "Shield of Chaos: Aspect of Zeus",
        shield_3: "Shield of Chaos: Aspect of Beowulf",
        bow_0: "Heart-Seeking Bow: Aspect of Zagreus",
        bow_1: "Heart-Seeking Bow: Aspect of Chiron",
        bow_2: "Heart-Seeking Bow: Aspect of Hera",
        bow_3: "Heart-Seeking Bow: Aspect of Rama",
        fists_0: "Twin Fists of Malphon: Aspect of Zagreus",
        fists_1: "Twin Fists of Malphon: Aspect of Talos",
        fists_2: "Twin Fists of Malphon: Aspect of Demeter",
        fists_3: "Twin Fists of Malphon: Aspect of Gilgamesh",
        rail_0: "Adamant Rail: Aspect of Zagreus",
        rail_1: "Adamant Rail: Aspect of Eris",
        rail_2: "Adamant Rail: Aspect of Hestia",
        rail_3: "Adamant Rail: Aspect of Lucifer"
      },
      keepsakesDict: {
        aphrodite: "Eternal Rose",
        ares: "Blood-Filled Vial",
        artemis: "Adamant Arrowhead",
        athena: "Owl Pendant",
        demeter: "Frostbitten Horn",
        dionysus: "Overflowing Cup",
        poseidon: "Conch Shell",
        zeus: "Thunder Signet",
        eurydice: "Evergreen Acorn",
        skelly: "Lucky Tooth",
      }
    }
  }
}
</script>

<style scoped>
 .w-fit-content {
   width: fit-content;
 }
</style>

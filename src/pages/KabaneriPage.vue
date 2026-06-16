<script setup lang="ts">
import { computed, ref, watch } from 'vue'

import {
  normalTable,
  resetTable,
  throughTable,
  upperTable,
  type Exchange,
} from '../data/kabaneri'

const emit = defineEmits<{
  back: []
}>()

const game = ref(0)

const exchange = ref<Exchange>('equal')

const isReset = ref(false)
const isUpper = ref(false)
const isThrough = ref(false)

const isShortened = ref(false)
const cycle = ref(1)

const blackSmokeSmall = ref(false)
const blackSmokeLarge = ref(false)
const himakuLevel3 = ref(false)
const himakuLevel4 = ref(false)
const kujiKahou = ref(false)
const rokkonShojo = ref(false)
const kaimonCastle = ref(false)
const redGreenSerif = ref(false)
const mumyo3 = ref(false)

watch(isReset, (value) => {
  if (value) {
    isUpper.value = false
    isThrough.value = false
  }
})

watch(isUpper, (value) => {
  if (value) {
    isReset.value = false
    isThrough.value = false
  }
})

watch(isThrough, (value) => {
  if (value) {
    isReset.value = false
    isUpper.value = false
  }
})

const activeTable = computed(() => {
  if (isReset.value) return resetTable
  if (isUpper.value) return upperTable
  if (isThrough.value) return throughTable

  return normalTable
})

const row = computed(() => {
  return (
    [...activeTable.value]
      .reverse()
      .find((r) => game.value >= r.game) ??
    activeTable.value[0]
  )
})

const ev = computed(() => {
  if (!row.value) return 0

  return row.value[exchange.value]
})

const machineRate = computed(() => {
  if (!row.value) return 0

  return row.value.machineRate
})

const hourly = computed(() => {
  if (!row.value) return 0

  switch (exchange.value) {
    case 'equal':
      return row.value.equalHourly

    case 'fiveSixReplay':
      return row.value.fiveSixReplayHourly

    case 'fiveSixCash':
      return row.value.fiveSixCashHourly

    case 'fiveSixLimit500':
      return row.value.fiveSixLimit500Hourly

    default:
      return 0
  }
})

const evJudge = computed(() => {
  if (ev.value >= 5000) return '🔥 激アツ'
  if (ev.value >= 3000) return '👍 かなり打ちたい'
  if (ev.value >= 1000) return '⭕ 打ってよい'
  if (ev.value >= 0) return '🤔 条件次第'

  return '❌ 見送り'
})

const hintJudge = computed(() => {
  if (blackSmokeLarge.value)
    return '🔥 穢れ解放まで続行推奨'

  if (
    kujiKahou.value ||
    rokkonShojo.value ||
    kaimonCastle.value
  ) {
    return '🔥 ボーナス/STまで続行'
  }

  if (himakuLevel4.value)
    return '🔥 周期到達まで続行'

  if (isShortened.value) {
    if (game.value >= 400)
      return '👍 天井596G狙い'

    if (cycle.value === 1)
      return '⭕ 1周期目までフォロー'

    if (cycle.value >= 3)
      return '⭕ 4周期天井狙い'
  }

  if (himakuLevel3.value)
    return '⭕ 周期到達まで検討'

  if (
    blackSmokeSmall.value ||
    redGreenSerif.value ||
    mumyo3.value
  ) {
    return '🤔 CZ/黒煙示唆で様子見'
  }

  return ''
})
</script>

<template>
  <div class="container">
    <button
      class="back-button"
      @click="emit('back')"
    >
      ← 戻る
    </button>

    <h1>スマスロ カバネリ期待値計算</h1>

    <label>現在ゲーム数</label>

    <input
      v-model.number="game"
      type="number"
      placeholder="ゲーム数を入力"
    />

    <label>交換率</label>

    <select v-model="exchange">
      <option value="equal">等価</option>
      <option value="fiveSixReplay">5.6枚再プレイ</option>
      <option value="fiveSixCash">5.6枚現金</option>
      <option value="fiveSixLimit500">5.6枚500枚制限</option>
    </select>

    <label>現在周期</label>

    <input
      v-model.number="cycle"
      type="number"
      min="1"
      placeholder="周期を入力"
    />

    <div class="switches">
      <label class="toggle-row">
        <span>短縮状態</span>
        <input v-model="isShortened" type="checkbox" />
        <span class="toggle"></span>
      </label>

      <label class="toggle-row">
        <span>黒煙 小</span>
        <input v-model="blackSmokeSmall" type="checkbox" />
        <span class="toggle"></span>
      </label>

      <label class="toggle-row">
        <span>黒煙 大</span>
        <input v-model="blackSmokeLarge" type="checkbox" />
        <span class="toggle"></span>
      </label>

      <label class="toggle-row">
        <span>皮膜Lv3</span>
        <input v-model="himakuLevel3" type="checkbox" />
        <span class="toggle"></span>
      </label>

      <label class="toggle-row">
        <span>皮膜Lv4</span>
        <input v-model="himakuLevel4" type="checkbox" />
        <span class="toggle"></span>
      </label>

      <label class="toggle-row">
        <span>くじ果報</span>
        <input v-model="kujiKahou" type="checkbox" />
        <span class="toggle"></span>
      </label>

      <label class="toggle-row">
        <span>六根清浄</span>
        <input v-model="rokkonShojo" type="checkbox" />
        <span class="toggle"></span>
      </label>

      <label class="toggle-row">
        <span>海門城背景</span>
        <input v-model="kaimonCastle" type="checkbox" />
        <span class="toggle"></span>
      </label>

      <label class="toggle-row">
        <span>赤/緑セリフ</span>
        <input v-model="redGreenSerif" type="checkbox" />
        <span class="toggle"></span>
      </label>

      <label class="toggle-row">
        <span>無名3回</span>
        <input v-model="mumyo3" type="checkbox" />
        <span class="toggle"></span>
      </label>
    </div>
    <div class="switches">
      <label class="toggle-row">
        <span>リセット</span>

        <input
          v-model="isReset"
          type="checkbox"
        />

        <span class="toggle"></span>
      </label>

      <label
        class="toggle-row"
        :class="{ disabled: isReset }"
      >
        <span>上位後</span>

        <input
          v-model="isUpper"
          type="checkbox"
          :disabled="isReset"
        />

        <span class="toggle"></span>
      </label>

      <label
        class="toggle-row"
        :class="{ disabled: isReset }"
      >
        <span>駆け抜け後</span>

        <input
          v-model="isThrough"
          type="checkbox"
          :disabled="isReset"
        />

        <span class="toggle"></span>
      </label>
    </div>

    <div class="result">
      <div class="ev">
        {{ ev.toLocaleString() }}円
      </div>

      <div class="judge">
        {{ evJudge }}
      </div>

      <div
        v-if="hintJudge"
        class="detail"
      >
        {{ hintJudge }}
      </div>

      <div class="detail">
        機械割 {{ machineRate.toFixed(2) }}%
      </div>

      <div class="detail">
        時給 {{ hourly.toLocaleString() }}円
      </div>
    </div>
  </div>
</template>

<style>
* {
  box-sizing: border-box;
}

.menu {
  padding-top: 60px;
}

.machine-button {
  width: 100%;
  padding: 24px;
  margin-top: 20px;

  font-size: 22px;
  font-weight: bold;

  color: white;
  background: #ff3b30;

  border: none;
  border-radius: 18px;

  cursor: pointer;
}

.machine-button:active {
  transform: scale(0.98);
}

.back-button {
  margin-bottom: 20px;
  padding: 10px 16px;

  color: white;
  background: #333;

  border: none;
  border-radius: 12px;
}

body {
  margin: 0;
  background: #111;
  color: #f5f5f5;
  font-family:
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    sans-serif;
}
.detail {
  margin-top: 8px;
  font-size: 16px;
  color: #ccc;
}
.container {
  max-width: 430px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 24px 18px;
  background: linear-gradient(180deg, #1b1b1b 0%, #0d0d0d 100%);
}

h1 {
  margin: 0 0 24px;
  font-size: 24px;
  text-align: center;
  color: #ff3b30;
}

label {
  display: block;
  margin-top: 18px;
  margin-bottom: 8px;
  font-size: 14px;
  font-weight: bold;
  color: #ccc;
  text-align: left;
}

input[type='number'],
select {
  width: 100%;
  padding: 15px 14px;
  font-size: 18px;
  color: #fff;
  background: #222;
  border: 1px solid #444;
  border-radius: 12px;
  outline: none;
}

input[type='number']:focus,
select:focus {
  border-color: #ff3b30;
}

.result {
  margin-top: 28px;
  padding: 24px 18px;
  text-align: center;
  background: #1f1f1f;
  border: 1px solid #ff3b30;
  border-radius: 18px;
  box-shadow: 0 0 24px rgba(255, 59, 48, 0.25);
}

.ev {
  font-size: 32px;
  font-weight: 800;
}

.judge {
  margin-top: 14px;
  font-size: 20px;
  font-weight: bold;
}

/* =========================
   iPhone風トグル
========================= */

.switches {
  margin-top: 24px;
  background: #1c1c1e;
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid #2c2c2e;
}

.toggle-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 56px;
  padding: 0 16px;
  margin: 0;
  border-bottom: 1px solid #2c2c2e;
}

.toggle-row:last-child {
  border-bottom: none;
}

.toggle-row span:first-child {
  color: #fff;
  font-size: 17px;
  font-weight: 500;
}

.toggle-row input {
  display: none;
}

.toggle {
  position: relative;
  width: 52px;
  height: 32px;
  background: #3a3a3c;
  border-radius: 999px;
  transition: all 0.2s ease;
}

.toggle::before {
  content: '';
  position: absolute;
  top: 3px;
  left: 3px;
  width: 26px;
  height: 26px;
  background: white;
  border-radius: 50%;
  transition: all 0.2s ease;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
}

.toggle-row input:checked + .toggle {
  background: #34c759;
}

.toggle-row input:checked + .toggle::before {
  transform: translateX(20px);
}

/* =========================
   レスポンシブ
========================= */

@media (max-width: 480px) {
  .container {
    padding-top: 18px;
  }

  h1 {
    font-size: 22px;
  }

  .ev {
    font-size: 28px;
  }

  .judge {
    font-size: 18px;
  }
}

.disabled {
  opacity: 0.4;
}
</style>
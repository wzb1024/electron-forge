<template>
  <el-config-provider :dark="isDark">
    <div class="container">
      <el-card class="welcome-card">
        <template #header>
          <div class="card-header">
            <h2>
              <el-icon><Monitor /></el-icon>
              欢迎使用 Vite + Vue + Element Plus {{ isElectron ? '+ Electron' : '' }}
            </h2>
          </div>
        </template>
        <div class="card-content">
          <el-row :gutter="20">
            <el-col :span="12">
              <el-button type="primary" @click="count++">
                点击计数: {{ count }}
              </el-button>
            </el-col>
            <el-col :span="12">
              <el-switch
                v-model="isDark"
                inline-prompt
                :active-icon="Moon"
                :inactive-icon="Sunny"
                @change="toggleDark"
              />
            </el-col>
          </el-row>
          <el-divider />
          <el-alert
            :title="isElectron ? '这是一个基于 Electron 的桌面应用' : '这是一个 Web 应用'"
            type="success"
            :closable="false"
          />
        </div>
      </el-card>
    </div>
  </el-config-provider>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useDark, useToggle } from '@vueuse/core'
import { Moon, Sunny } from '@element-plus/icons-vue'

const count = ref(0)
const isDark = useDark()
const toggleDark = useToggle(isDark)

const isElectron = computed(() => import.meta.env.VITE_APP_ENV === 'electron')
</script>

<style lang="scss" scoped>
.welcome-card {
  :deep(.el-card__header) {
    border-bottom-color: var(--border-color);
  }

  :deep(.el-card__body) {
    padding: 20px;
  }
}
</style>

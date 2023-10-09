import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  root: 'app',  // 루트디렉토리를 vite는 자동으로 사용하게 되어 있지만,
                 // api서버의 코드와 분리 하기 위해서, root를 app 디렉토리로 변경함
  publicDir: 'app/public', // root와 같은 이유로, default root에서 이동함
  base: 'app/public/assets'
})

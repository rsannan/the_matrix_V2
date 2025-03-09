import { createClient } from '@supabase/supabase-js'

export default defineNuxtPlugin(() => {
        const {supabaseKey, supabaseUrl} = useRuntimeConfig().public
        const supabase = createClient(supabaseUrl, supabaseKey)

    return {
        provide: {
          supabase
        }
      }
})

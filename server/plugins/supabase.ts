import { createClient } from '@supabase/supabase-js'

export default defineNitroPlugin((nitroApp) => {
    nitroApp.hooks.hook('request', (event) => {
        const {supabaseKey, supabaseUrl} = useRuntimeConfig()
        const supabase = createClient(supabaseUrl, supabaseKey)
        event.context.supabase = supabase
      });
})

export default defineEventHandler(async (event) => {
  console.log('supabase', event.context.supabase)
  return 'hellow'
})

export default defineEventHandler(async (event) => {
  const {email, password}= await readBody(event)
const supabase = event.context.supabase
const { data, error } = await supabase.auth.signUp({
  email,
  password,
})

if(error)
  return error

  return {message:'You have signed up successfully'}
})

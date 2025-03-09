const { $supabase: supabase } = useNuxtApp()

export async function signOut() {
    const { error } = await supabase?.auth.signOut()
 return error ? error.message : 'You have signed out successfully'
}

export async function signIn(email: string, password: string) {
    const { data ,error } = await supabase?.auth.signInWithPassword({
        email,
        password,
      })
    
      if(error )
        return error.message
        return {
          data: data?.user,
          message:'You have logged in successfully'
        }
}

export async function signUp(body:{email: string, password:string, firstName?: string, lastName?: string}){
  const {email, password, firstName, lastName}= body

  const { data ,error: authError } = await supabase?.auth.signUp({
    email,
    password,
  })

  if(firstName || lastName){
    const {error: userError} = await supabase
    .from('users')
    .update({first_name:firstName?.replaceAll("'", ''), last_name:lastName?.replaceAll("'", '')})
    .eq('id', data?.user?.id)
    if(userError) return userError.message
  }
  
  if(authError )
    return authError.message 
  
    return {message:'You have signed up successfully'}
}

export async function resetPassword(email: string){
  const { error } = await supabase?.auth.resetPasswordForEmail(email, {
    redirectTo: 'http://localhost:3737/login/update-password',
  })

  if(error )
    return error.message 
  
    return {
      message:'We have sent you an email to reset your password'
    }
}

export async function updatePassword(password: string){
  const {  error } = await supabase?.auth.updateUser({
    password: password,
  })

  if(error )
    return error.message 
  
    return {
      message:'You have reset your password successfully'
    }
}
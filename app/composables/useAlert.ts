interface Alert{
  show: boolean;
  message: string;
  icon: string;
  title?: string;
  color: 'primary' | 'red' | 'amber'| undefined;
}
const state = reactive<Alert>({
 show: false,
 message: '',
 icon:'',
 title:undefined,
 color: undefined
})
export default function() {
 function success(message: string | Ref<string>, title?: string | Ref<string>) {
 Object.assign(state, { 
  show: true,
  message: toValue(message),
  icon:'i-ph-check-circle-thin',
  title:toValue(title),
  color: 'primary'
})

 }

 function danger(message: string | Ref<string>, title?: string | Ref<string>) {
 Object.assign(state, { 
  show: true,
  message: toValue(message),
  icon:'i-ph-x-circle-thin',
  title:toValue(title) ?? 'There was an error',
  color: 'red'
})
 }

 function warn(message: string | Ref<string>, title?: string | Ref<string>) {
 Object.assign(state, { 
  show: true,
  message: toValue(message),
  icon:'i-ph-warning',
  title:toValue(title),
  color: 'amber'
})
 }

 function closeAlert() {
  Object.assign(state, { 
    show: false,
    message: '',
    icon:'',
    title:undefined,
    color: undefined})
 }

 return{
  state: readonly(state),
  success,
  danger,
  warn,
  closeAlert
 }
}

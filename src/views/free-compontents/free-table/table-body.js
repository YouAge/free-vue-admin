/**
 *@ github： https://github.com/YouAge
 *@ 文件介绍: table
 */


export default {
  name:'FTableBody',
  data(){
    return{
      name:'tbale'
    }

  },
  render(h){
    const data = this.data || []
    return h('div',{class:['top']},[
      h('div',{ref:'free',domProps:{value:'文职'},on:{click:this.click}},'文职')
    ])
  },
  methods:{
    click(){
      console.log('点击事件')
    }
  }
}

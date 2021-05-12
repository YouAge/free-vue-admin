import path from 'path'

/**
 *@ github： https://github.com/YouAge
 *@ 文件介绍: 路由跳转
 */

import { isExternal } from '@/utils/tool'
export default {
  data:"userRoute",
  methods:{

    dealRouter({path,name,meta}){
      if(isExternal(path)){
        window.open(path)
      }else if(meta.path){
        this.$router.push({name:name,params:{path:meta.path}})
      }
      else {
        this.$router.push(path)
      }
    }


  }
}

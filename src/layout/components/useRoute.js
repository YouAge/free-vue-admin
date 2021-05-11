import path from 'path'

/**
 *@ github： https://github.com/YouAge
 *@ 文件介绍: 路由跳转
 */

import { isExternal } from '@/utils/tool'
export default {
  data:"userRoute",
  methods:{

    dealRouter(item){
      if(isExternal(item.path)){
        window.open(item.path)
      }else {
        this.$router.push(item.path)
      }
    }


  }
}

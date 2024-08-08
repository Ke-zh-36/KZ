import { Message } from "element-ui";  
  
// 创建一个新的对象来封装Message方法，以避免直接修改Message实例  
const Kmessage = {  
    // 封装成功的消息  
    KmessageS: (resp) => {  
        return Message.success({  
            message: `${resp}`,  
            center: true // 注意：Message.success() 没有 type 参数，因为它已经隐含了成功类型  
        });  
    },  
    // 封装错误的消息（注意：这里之前的方法名KmessageE被错误地用于两个不同目的）  
    KmessageE: (resp) => {  
        return Message.error({  
            message: `${resp}`,  
            center: true // 注意：Message.error() 同样没有 type 参数  
        });  
    }  
};  
  
// 导出整个Kmessage对象，而不是其中一个方法的调用结果  
export default Kmessage;
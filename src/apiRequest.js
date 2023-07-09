const apiRequest = async(url ='',optionObj=null,errMsg)=>{
    try{
        const response =await fetch(url,optionObj)
        if(!response.ok) throw Error("please reload the app")


    }catch(err){
        errMsg=err.errMsg

    }finally{
        return errMsg

    }

}

export default apiRequest
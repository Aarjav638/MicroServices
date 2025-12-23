import Bcrypt from 'bcrypt'

const HashPassword = async(plainText:string)=>{
    try {
        const genSalt = 10 ;
        const hashedPassword = await Bcrypt.hash(plainText,genSalt)
        return hashedPassword
    } catch (error) {
        throw error
    }

}

const ComparePassword = async(plaintext:string,hashedPassword:string)=>{
    try{
        const match = await Bcrypt.compare(plaintext,hashedPassword)
        return match
    }catch(error){
throw error
    }
}

export {ComparePassword,HashPassword}